'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _fetch = require('./../../modules/common/fetch.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
    _inherits(Index, _wepy$page);

    function Index() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Index);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '直播',
            gationBarTitleText: '低延时播放',
            backgroundColor: '#000',
            backgroundTextStyle: 'light'
            /**
            * 页面的初始数据
            */
        }, _this.data = {
            playing: false,
            videoContext: {},

            fullScreen: false,
            playUrl: '',
            orientation: 'vertical',
            objectFit: 'contain',
            muted: false,
            backgroundMuted: false,
            debug: false,
            exterFlag: false // 为了兼容微信iOS客户端的bug增加的控制字段，打开debug的时候把操作view remove再add
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onScanQR',
        value: function onScanQR() {
            this.stop();
            this.createContext();
            console.log('onScaneQR');
            var that = this;
            _wepy2.default.scanCode({
                onlyFromCamera: true,
                success: function success(res) {
                    console.log(res);
                    that.playUrl = res.result;
                }
            });
        }
    }, {
        key: 'onBlur',
        value: function onBlur(e) {
            this.playUrl = e.detail.value;
        }
    }, {
        key: 'onNewUrlClick',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return (0, _fetch.getFetch)('/getLiveUrl', {
                                    noAjax: true
                                });

                            case 2:
                                res = _context.sent;

                                this.playUrl = res.liveUrl;
                                this.onPlayClick();
                                console.log(this.playUrl);
                                this.$apply();

                            case 7:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function onNewUrlClick() {
                return _ref2.apply(this, arguments);
            }

            return onNewUrlClick;
        }()
    }, {
        key: 'onPlayClick',
        value: function onPlayClick() {
            var url = this.playUrl;
            if (url.indexOf('rtmp:') === 0) {} else {
                _wepy2.default.showModal({
                    content: '非加速播放地址',
                    showCancel: false
                });
                return;
            }

            this.playing = !this.playing;
            console.log(this.playing);

            if (this.playing) {
                this.videoContext.play();
                console.log('video play()');
                _wepy2.default.showLoading({
                    title: ''
                });
            } else {
                this.videoContext.stop();
                console.log('video stop()');
                _wepy2.default.hideLoading();
            }
        }
    }, {
        key: 'onOrientationClick',
        value: function onOrientationClick() {
            if (this.orientation === 'vertical') {
                this.orientation = 'horizontal';
            } else {
                this.orientation = 'vertical';
            }

            this.orientation = this.orientation;
        }
    }, {
        key: 'onObjectfitClick',
        value: function onObjectfitClick() {
            if (this.objectFit === 'fillCrop') {
                this.objectFit = 'contain';
            } else {
                this.objectFit = 'fillCrop';
            }
            this.objectFit = this.objectFit;
        }
    }, {
        key: 'onLogClick',
        value: function onLogClick() {
            this.setData({
                debug: !this.debug
            });
            var that = this;
            setTimeout(function () {
                that.setData({
                    exterFlag: !that.data.exterFlag
                });
            }, 10);
        }
    }, {
        key: 'onMuteClick',
        value: function onMuteClick() {
            this.muted = !this.muted;
        }
    }, {
        key: 'onFullScreenClick',
        value: function onFullScreenClick() {
            if (!this.fullScreen) {
                this.videoContext.requestFullScreen({
                    direction: 0
                });
            } else {
                this.videoContext.exitFullScreen({});
            }
        }
    }, {
        key: 'onPlayEvent',
        value: function onPlayEvent(e) {
            console.log(e.detail.code);
            if (e.detail.code === -2301) {
                this.stop();
                _wepy2.default.showToast({
                    title: '活动还没开始哦',
                    icon: 'none',
                    duration: 2000
                });
            }
            if (e.detail.code === 2004 || e.detail.code === 2003) {
                _wepy2.default.hideLoading();
            }
        }
    }, {
        key: 'onFullScreenChange',
        value: function onFullScreenChange(e) {
            this.fullScreen = e.detail.fullScreen;
            console.log(e);
            _wepy2.default.showToast({
                title: this.fullScreen ? '全屏' : '退出全屏'
            });
        }
    }, {
        key: 'stop',
        value: function stop() {
            this.palying = false;
            this.orientation = 'vertical';
            this.objectFit = 'contain';
            this.muted = false;
            this.fullScreen = false;
            this.backgroundMuted = false;
            this.debug = false;
            this.exterFlag = false;
            console.log(this.videoContext);
            this.videoContext.stop();
            _wepy2.default.hideLoading();
        }
    }, {
        key: 'createContext',
        value: function createContext() {
            this.videoContext = _wepy2.default.createLivePlayerContext('video-livePlayer');
        }

        /**
        * 生命周期函数--监听页面加载
        */

    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            this.onNewUrlClick();
        }

        /**
        * 生命周期函数--监听页面初次渲染完成
        */

    }, {
        key: 'onReady',
        value: function onReady() {
            this.createContext();
            console.log(this.videoContext);

            _wepy2.default.setKeepScreenOn({
                keepScreenOn: true
            });
        }

        /**
        * 生命周期函数--监听页面显示
        */

    }, {
        key: 'onShow',
        value: function onShow() {
            // 保持屏幕常亮
            _wepy2.default.setKeepScreenOn({
                keepScreenOn: true
            });
        }

        /**
        * 生命周期函数--监听页面隐藏
        */

    }, {
        key: 'onHide',
        value: function onHide() {}

        /**
        * 生命周期函数--监听页面卸载
        */

    }, {
        key: 'onUnload',
        value: function onUnload() {
            this.stop();

            _wepy2.default.setKeepScreenOn({
                keepScreenOn: false
            });
        }

        /**
        * 页面相关事件处理函数--监听用户下拉动作
        */

    }, {
        key: 'onPullDownRefresh',
        value: function onPullDownRefresh() {}

        /**
        * 页面上拉触底事件的处理函数
        */

    }, {
        key: 'onReachBottom',
        value: function onReachBottom() {}

        /**
        * 用户点击右上角分享
        */

    }, {
        key: 'onShareAppMessage',
        value: function onShareAppMessage() {
            return {
                path: '/pages/live/index'
                // imageUrl: 'https://mc.qcloudimg.com/static/img/dacf9205fe088ec2fef6f0b781c92510/share.png'
            };
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/live/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImdhdGlvbkJhclRpdGxlVGV4dCIsImJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJkYXRhIiwicGxheWluZyIsInZpZGVvQ29udGV4dCIsImZ1bGxTY3JlZW4iLCJwbGF5VXJsIiwib3JpZW50YXRpb24iLCJvYmplY3RGaXQiLCJtdXRlZCIsImJhY2tncm91bmRNdXRlZCIsImRlYnVnIiwiZXh0ZXJGbGFnIiwic3RvcCIsImNyZWF0ZUNvbnRleHQiLCJjb25zb2xlIiwibG9nIiwidGhhdCIsIndlcHkiLCJzY2FuQ29kZSIsIm9ubHlGcm9tQ2FtZXJhIiwic3VjY2VzcyIsInJlcyIsInJlc3VsdCIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsIm5vQWpheCIsImxpdmVVcmwiLCJvblBsYXlDbGljayIsIiRhcHBseSIsInVybCIsImluZGV4T2YiLCJzaG93TW9kYWwiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsInBsYXkiLCJzaG93TG9hZGluZyIsInRpdGxlIiwiaGlkZUxvYWRpbmciLCJzZXREYXRhIiwic2V0VGltZW91dCIsInJlcXVlc3RGdWxsU2NyZWVuIiwiZGlyZWN0aW9uIiwiZXhpdEZ1bGxTY3JlZW4iLCJjb2RlIiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwicGFseWluZyIsImNyZWF0ZUxpdmVQbGF5ZXJDb250ZXh0Iiwib3B0aW9ucyIsIm9uTmV3VXJsQ2xpY2siLCJzZXRLZWVwU2NyZWVuT24iLCJrZWVwU2NyZWVuT24iLCJwYXRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0IsSUFEbkI7QUFFTEMsZ0NBQW9CLE9BRmY7QUFHTEMsNkJBQWlCLE1BSFo7QUFJTEMs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QUFMLEdBQXVCLEtBQXZCO0FBQ0EsaUJBQUtDLEtBQUwsR0FBYSxLQUFiO0FBQ0EsaUJBQUtDLFNBQUwsR0FBaUIsS0FBakI7QUFDQUcsb0JBQVFDLEdBQVIsQ0FBWSxLQUFLWixZQUFqQjtBQUNBLGlCQUFLQSxZQUFMLENBQWtCUyxJQUFsQjtBQUNBSywyQkFBS3FCLFdBQUw7QUFDSDs7O3dDQUVnQjtBQUNiLGlCQUFLbkMsWUFBTCxHQUFvQmMsZUFBS2dDLHVCQUFMLENBQTZCLGtCQUE3QixDQUFwQjtBQUNIOztBQUVEOzs7Ozs7K0JBR1FDLE8sRUFBUztBQUNiLGlCQUFLQyxhQUFMO0FBQ0g7O0FBRUQ7Ozs7OztrQ0FHVztBQUNQLGlCQUFLdEMsYUFBTDtBQUNBQyxvQkFBUUMsR0FBUixDQUFZLEtBQUtaLFlBQWpCOztBQUVBYywyQkFBS21DLGVBQUwsQ0FBcUI7QUFDakJDLDhCQUFjO0FBREcsYUFBckI7QUFHSDs7QUFFRDs7Ozs7O2lDQUdVO0FBQ047QUFDQXBDLDJCQUFLbUMsZUFBTCxDQUFxQjtBQUNqQkMsOEJBQWM7QUFERyxhQUFyQjtBQUdIOztBQUVEOzs7Ozs7aUNBR1UsQ0FFVDs7QUFFRDs7Ozs7O21DQUdZO0FBQ1IsaUJBQUt6QyxJQUFMOztBQUVBSywyQkFBS21DLGVBQUwsQ0FBcUI7QUFDakJDLDhCQUFjO0FBREcsYUFBckI7QUFHSDs7QUFFRDs7Ozs7OzRDQUdxQixDQUVwQjs7QUFFRDs7Ozs7O3dDQUdpQixDQUVoQjs7QUFFRDs7Ozs7OzRDQUdxQjtBQUNqQixtQkFBTztBQUNIQyxzQkFBTTtBQUNOO0FBRkcsYUFBUDtBQUlIOzs7O0VBM084QnJDLGVBQUtzQyxJOztrQkFBbkI1RCxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgeyBnZXRGZXRjaCB9IGZyb20gJ0AvbW9kdWxlcy9jb21tb24vZmV0Y2gnXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnm7Tmkq0nLFxuICAgICAgICAgICAgZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5L2O5bu25pe25pKt5pS+JyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDAnLFxuICAgICAgICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0J1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAqIOmhtemdoueahOWIneWni+aVsOaNrlxuICAgICAgICAqL1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgcGxheWluZzogZmFsc2UsXG4gICAgICAgICAgICB2aWRlb0NvbnRleHQ6IHt9LFxuXG4gICAgICAgICAgICBmdWxsU2NyZWVuOiBmYWxzZSxcbiAgICAgICAgICAgIHBsYXlVcmw6ICcnLFxuICAgICAgICAgICAgb3JpZW50YXRpb246ICd2ZXJ0aWNhbCcsXG4gICAgICAgICAgICBvYmplY3RGaXQ6ICdjb250YWluJyxcbiAgICAgICAgICAgIG11dGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGJhY2tncm91bmRNdXRlZDogZmFsc2UsXG4gICAgICAgICAgICBkZWJ1ZzogZmFsc2UsXG4gICAgICAgICAgICBleHRlckZsYWc6IGZhbHNlIC8vIOS4uuS6huWFvOWuueW+ruS/oWlPU+WuouaIt+err+eahGJ1Z+WinuWKoOeahOaOp+WItuWtl+aute+8jOaJk+W8gGRlYnVn55qE5pe25YCZ5oqK5pON5L2cdmlldyByZW1vdmXlho1hZGRcbiAgICAgICAgfVxuXG4gICAgICAgIG9uU2NhblFSICgpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUNvbnRleHQoKVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ29uU2NhbmVRUicpXG4gICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXNcbiAgICAgICAgICAgIHdlcHkuc2NhbkNvZGUoe1xuICAgICAgICAgICAgICAgIG9ubHlGcm9tQ2FtZXJhOiB0cnVlLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgICAgICAgICB0aGF0LnBsYXlVcmwgPSByZXMucmVzdWx0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIG9uQmx1ciAoZSkge1xuICAgICAgICAgICAgdGhpcy5wbGF5VXJsID0gZS5kZXRhaWwudmFsdWVcbiAgICAgICAgfVxuXG4gICAgICAgIGFzeW5jIG9uTmV3VXJsQ2xpY2sgKCkge1xuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZ2V0RmV0Y2goJy9nZXRMaXZlVXJsJywge1xuICAgICAgICAgICAgICAgIG5vQWpheDogdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMucGxheVVybCA9IHJlcy5saXZlVXJsXG4gICAgICAgICAgICB0aGlzLm9uUGxheUNsaWNrKClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucGxheVVybClcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgfVxuXG4gICAgICAgIG9uUGxheUNsaWNrICgpIHtcbiAgICAgICAgICAgIHZhciB1cmwgPSB0aGlzLnBsYXlVcmxcbiAgICAgICAgICAgIGlmICh1cmwuaW5kZXhPZigncnRtcDonKSA9PT0gMCkge1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfpnZ7liqDpgJ/mkq3mlL7lnLDlnYAnLFxuICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucGxheWluZyA9ICF0aGlzLnBsYXlpbmdcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucGxheWluZylcblxuICAgICAgICAgICAgaWYgKHRoaXMucGxheWluZykge1xuICAgICAgICAgICAgICAgIHRoaXMudmlkZW9Db250ZXh0LnBsYXkoKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd2aWRlbyBwbGF5KCknKVxuICAgICAgICAgICAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJydcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZGVvQ29udGV4dC5zdG9wKClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndmlkZW8gc3RvcCgpJylcbiAgICAgICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9uT3JpZW50YXRpb25DbGljayAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgICAgIHRoaXMub3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCdcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmllbnRhdGlvbiA9ICd2ZXJ0aWNhbCdcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5vcmllbnRhdGlvbiA9IHRoaXMub3JpZW50YXRpb25cbiAgICAgICAgfVxuXG4gICAgICAgIG9uT2JqZWN0Zml0Q2xpY2sgKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMub2JqZWN0Rml0ID09PSAnZmlsbENyb3AnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vYmplY3RGaXQgPSAnY29udGFpbidcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vYmplY3RGaXQgPSAnZmlsbENyb3AnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm9iamVjdEZpdCA9IHRoaXMub2JqZWN0Rml0XG4gICAgICAgIH1cblxuICAgICAgICBvbkxvZ0NsaWNrICgpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgZGVidWc6ICF0aGlzLmRlYnVnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGF0LnNldERhdGEoe1xuICAgICAgICAgICAgICAgICAgICBleHRlckZsYWc6ICF0aGF0LmRhdGEuZXh0ZXJGbGFnXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICB9XG5cbiAgICAgICAgb25NdXRlQ2xpY2sgKCkge1xuICAgICAgICAgICAgdGhpcy5tdXRlZCA9ICF0aGlzLm11dGVkXG4gICAgICAgIH1cblxuICAgICAgICBvbkZ1bGxTY3JlZW5DbGljayAoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZnVsbFNjcmVlbikge1xuICAgICAgICAgICAgICAgIHRoaXMudmlkZW9Db250ZXh0LnJlcXVlc3RGdWxsU2NyZWVuKHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAwXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWRlb0NvbnRleHQuZXhpdEZ1bGxTY3JlZW4oe1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvblBsYXlFdmVudCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZS5kZXRhaWwuY29kZSlcbiAgICAgICAgICAgIGlmIChlLmRldGFpbC5jb2RlID09PSAtMjMwMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcCgpXG4gICAgICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+a0u+WKqOi/mOayoeW8gOWni+WTpicsXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGUuZGV0YWlsLmNvZGUgPT09IDIwMDQgfHwgZS5kZXRhaWwuY29kZSA9PT0gMjAwMykge1xuICAgICAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgb25GdWxsU2NyZWVuQ2hhbmdlIChlKSB7XG4gICAgICAgICAgICB0aGlzLmZ1bGxTY3JlZW4gPSBlLmRldGFpbC5mdWxsU2NyZWVuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLmZ1bGxTY3JlZW4gPyAn5YWo5bGPJyA6ICfpgIDlh7rlhajlsY8nXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgc3RvcCAoKSB7XG4gICAgICAgICAgICB0aGlzLnBhbHlpbmcgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5vcmllbnRhdGlvbiA9ICd2ZXJ0aWNhbCdcbiAgICAgICAgICAgIHRoaXMub2JqZWN0Rml0ID0gJ2NvbnRhaW4nXG4gICAgICAgICAgICB0aGlzLm11dGVkID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuZnVsbFNjcmVlbiA9IGZhbHNlXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRNdXRlZCA9IGZhbHNlXG4gICAgICAgICAgICB0aGlzLmRlYnVnID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuZXh0ZXJGbGFnID0gZmFsc2VcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudmlkZW9Db250ZXh0KVxuICAgICAgICAgICAgdGhpcy52aWRlb0NvbnRleHQuc3RvcCgpXG4gICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgfVxuXG4gICAgICAgIGNyZWF0ZUNvbnRleHQgKCkge1xuICAgICAgICAgICAgdGhpcy52aWRlb0NvbnRleHQgPSB3ZXB5LmNyZWF0ZUxpdmVQbGF5ZXJDb250ZXh0KCd2aWRlby1saXZlUGxheWVyJylcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XG4gICAgICAgICovXG4gICAgICAgIG9uTG9hZCAob3B0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5vbk5ld1VybENsaWNrKClcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXG4gICAgICAgICovXG4gICAgICAgIG9uUmVhZHkgKCkge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb250ZXh0KClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudmlkZW9Db250ZXh0KVxuXG4gICAgICAgICAgICB3ZXB5LnNldEtlZXBTY3JlZW5Pbih7XG4gICAgICAgICAgICAgICAga2VlcFNjcmVlbk9uOiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgICAgICAgKi9cbiAgICAgICAgb25TaG93ICgpIHtcbiAgICAgICAgICAgIC8vIOS/neaMgeWxj+W5leW4uOS6rlxuICAgICAgICAgICAgd2VweS5zZXRLZWVwU2NyZWVuT24oe1xuICAgICAgICAgICAgICAgIGtlZXBTY3JlZW5PbjogdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAgICAgICovXG4gICAgICAgIG9uSGlkZSAoKSB7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG4gICAgICAgICovXG4gICAgICAgIG9uVW5sb2FkICgpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpXG5cbiAgICAgICAgICAgIHdlcHkuc2V0S2VlcFNjcmVlbk9uKHtcbiAgICAgICAgICAgICAgICBrZWVwU2NyZWVuT246IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcbiAgICAgICAgKi9cbiAgICAgICAgb25QdWxsRG93blJlZnJlc2ggKCkge1xuXG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICAgICAgKi9cbiAgICAgICAgb25SZWFjaEJvdHRvbSAoKSB7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAqIOeUqOaIt+eCueWHu+WPs+S4iuinkuWIhuS6q1xuICAgICAgICAqL1xuICAgICAgICBvblNoYXJlQXBwTWVzc2FnZSAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHBhdGg6ICcvcGFnZXMvbGl2ZS9pbmRleCdcbiAgICAgICAgICAgICAgICAvLyBpbWFnZVVybDogJ2h0dHBzOi8vbWMucWNsb3VkaW1nLmNvbS9zdGF0aWMvaW1nL2RhY2Y5MjA1ZmUwODhlYzJmZWY2ZjBiNzgxYzkyNTEwL3NoYXJlLnBuZydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiJdfQ==