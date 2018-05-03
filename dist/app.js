'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _fetch = require('./modules/common/fetch.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
    _inherits(_default, _wepy$app);

    function _default() {
        _classCallCheck(this, _default);

        var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

        _this.config = {
            pages: ['pages/publish/index'],
            window: {
                backgroundTextStyle: 'light',
                navigationBarBackgroundColor: '#fff',
                navigationBarTitleText: 'WeChat',
                navigationBarTextStyle: 'black'
            }
        };
        _this.globalData = {
            userInfo: null
        };

        _this.use('requestfix');
        return _this;
    }

    _createClass(_default, [{
        key: 'onLaunch',
        value: function onLaunch() {
            // this.getUserInfo()
        }
    }, {
        key: 'sleep',
        value: function sleep(s) {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve('promise resolved');
                }, s * 1000);
            });
        }
    }, {
        key: 'getUserInfo',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var that;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                that = this;
                                return _context.abrupt('return', new Promise(function (resolve, reject) {
                                    if (that.globalData.userInfo) {
                                        return resolve(that.globalData.userInfo);
                                    }
                                    _wepy2.default.login({
                                        success: function success(res) {
                                            // 获取openId
                                            _wepy2.default.request({
                                                url: 'https://api.weixin.qq.com/sns/jscode2session',
                                                data: {
                                                    appid: 'wx074fc89a63291f58', // 小程序唯一标识
                                                    secret: 'c52454ed68690c8a35190b941c6c298b', // 小程序的 app secret
                                                    grant_type: 'authorization_code',
                                                    js_code: res.code
                                                },
                                                method: 'GET',
                                                header: { 'content-type': 'application/json' },
                                                success: function success(openIdRes) {
                                                    console.info('登录成功返回的openId：' + openIdRes.data.openid);
                                                    // 判断openId是否获取成功
                                                    if (openIdRes.data.openid != null && openIdRes.data.openid !== undefined) {
                                                        // 有一点需要注意 询问用户 是否授权 那提示 是这API发出的
                                                        _wepy2.default.getUserInfo({
                                                            success: function success(res) {
                                                                var _this2 = this;

                                                                that.globalData.userInfo = res.userInfo;
                                                                that.globalData.userInfo.openId = openIdRes.data.openid;
                                                                return (0, _fetch.postFetch)('/loginWeChat', { noAjax: true, data: this.globalData.userInfo }).then(function (userInfo) {
                                                                    _this2.globalData.userInfo.id = userInfo.user.id;
                                                                    resolve(that.globalData.userInfo);
                                                                });
                                                                // 自定义操作
                                                                // 绑定数据，渲染页面
                                                            },
                                                            fail: function fail(failData) {
                                                                console.info('用户拒绝授权');
                                                                reject(failData);
                                                            }
                                                        });
                                                    } else {
                                                        console.info('获取用户openId失败');
                                                        reject(openIdRes);
                                                    }
                                                }
                                            });
                                        }
                                    });
                                }));

                            case 2:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getUserInfo() {
                return _ref.apply(this, arguments);
            }

            return getUserInfo;
        }()
    }]);

    return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0IiwidGhhdCIsImxvZ2luIiwic3VjY2VzcyIsInJlcyIsInJlcXVlc3QiLCJ1cmwiLCJkYXRhIiwiYXBwaWQiLCJzZWNyZXQiLCJncmFudF90eXBlIiwianNfY29kZSIsImNvZGUiLCJtZXRob2QiLCJoZWFkZXIiLCJvcGVuSWRSZXMiLCJjb25zb2xlIiwiaW5mbyIsIm9wZW5pZCIsInVuZGVmaW5lZCIsImdldFVzZXJJbmZvIiwib3BlbklkIiwibm9BamF4IiwidGhlbiIsImlkIiwidXNlciIsImZhaWwiLCJmYWlsRGF0YSIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBbUJJLHdCQUFjO0FBQUE7O0FBQUE7O0FBQUEsY0FoQmRBLE1BZ0JjLEdBaEJMO0FBQ0xDLG1CQUFPLENBQ0gscUJBREcsQ0FERjtBQUlMQyxvQkFBUTtBQUNKQyxxQ0FBcUIsT0FEakI7QUFFSkMsOENBQThCLE1BRjFCO0FBR0pDLHdDQUF3QixRQUhwQjtBQUlKQyx3Q0FBd0I7QUFKcEI7QUFKSCxTQWdCSztBQUFBLGNBSmRDLFVBSWMsR0FKRDtBQUNUQyxzQkFBVTtBQURELFNBSUM7O0FBRVYsY0FBS0MsR0FBTCxDQUFTLFlBQVQ7QUFGVTtBQUdiOzs7O21DQUVVO0FBQ1A7QUFDSDs7OzhCQUVLQyxDLEVBQUc7QUFDTCxtQkFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDQywyQkFBVyxZQUFNO0FBQ2JGLDRCQUFRLGtCQUFSO0FBQ0gsaUJBRkQsRUFFR0YsSUFBSSxJQUZQO0FBR0gsYUFKTSxDQUFQO0FBS0g7Ozs7Ozs7Ozs7QUFHU0ssb0MsR0FBTyxJO2lFQUNOLElBQUlKLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEMsd0NBQUlFLEtBQUtSLFVBQUwsQ0FBZ0JDLFFBQXBCLEVBQThCO0FBQzFCLCtDQUFPSSxRQUFRRyxLQUFLUixVQUFMLENBQWdCQyxRQUF4QixDQUFQO0FBQ0g7QUFDRCxtREFBS1EsS0FBTCxDQUFXO0FBQ1BDLCtDQURPLG1CQUNDQyxHQURELEVBQ007QUFDVDtBQUNBLDJEQUFLQyxPQUFMLENBQWE7QUFDVEMscURBQUssOENBREk7QUFFVEMsc0RBQU07QUFDRkMsMkRBQU8sb0JBREwsRUFDMkI7QUFDN0JDLDREQUFRLGtDQUZOLEVBRTBDO0FBQzVDQyxnRUFBWSxvQkFIVjtBQUlGQyw2REFBU1AsSUFBSVE7QUFKWCxpREFGRztBQVFUQyx3REFBUSxLQVJDO0FBU1RDLHdEQUFRLEVBQUUsZ0JBQWdCLGtCQUFsQixFQVRDO0FBVVRYLHVEQVZTLG1CQVVBWSxTQVZBLEVBVVc7QUFDaEJDLDREQUFRQyxJQUFSLENBQWEsbUJBQW1CRixVQUFVUixJQUFWLENBQWVXLE1BQS9DO0FBQ0E7QUFDQSx3REFBSUgsVUFBVVIsSUFBVixDQUFlVyxNQUFmLElBQXlCLElBQXpCLElBQWlDSCxVQUFVUixJQUFWLENBQWVXLE1BQWYsS0FBMEJDLFNBQS9ELEVBQTBFO0FBQ3RFO0FBQ0EsdUVBQUtDLFdBQUwsQ0FBaUI7QUFDYmpCLHFFQUFTLGlCQUFVQyxHQUFWLEVBQWU7QUFBQTs7QUFDcEJILHFFQUFLUixVQUFMLENBQWdCQyxRQUFoQixHQUEyQlUsSUFBSVYsUUFBL0I7QUFDQU8scUVBQUtSLFVBQUwsQ0FBZ0JDLFFBQWhCLENBQXlCMkIsTUFBekIsR0FBa0NOLFVBQVVSLElBQVYsQ0FBZVcsTUFBakQ7QUFDQSx1RUFBTyxzQkFBVSxjQUFWLEVBQTBCLEVBQUVJLFFBQVEsSUFBVixFQUFnQmYsTUFBTSxLQUFLZCxVQUFMLENBQWdCQyxRQUF0QyxFQUExQixFQUE0RTZCLElBQTVFLENBQWlGLG9CQUFZO0FBQ2hHLDJFQUFLOUIsVUFBTCxDQUFnQkMsUUFBaEIsQ0FBeUI4QixFQUF6QixHQUE4QjlCLFNBQVMrQixJQUFULENBQWNELEVBQTVDO0FBQ0ExQiw0RUFBUUcsS0FBS1IsVUFBTCxDQUFnQkMsUUFBeEI7QUFDSCxpRUFITSxDQUFQO0FBSUE7QUFDQTtBQUNILDZEQVZZO0FBV2JnQyxrRUFBTSxjQUFVQyxRQUFWLEVBQW9CO0FBQ3RCWCx3RUFBUUMsSUFBUixDQUFhLFFBQWI7QUFDQWxCLHVFQUFPNEIsUUFBUDtBQUNIO0FBZFkseURBQWpCO0FBZ0JILHFEQWxCRCxNQWtCTztBQUNIWCxnRUFBUUMsSUFBUixDQUFhLGNBQWI7QUFDQWxCLCtEQUFPZ0IsU0FBUDtBQUNIO0FBQ0o7QUFuQ1EsNkNBQWI7QUFxQ0g7QUF4Q00scUNBQVg7QUEwQ0gsaUNBOUNNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFwQ2MsZUFBS2EsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcbiAgICBpbXBvcnQgeyBwb3N0RmV0Y2ggfSBmcm9tICdAL21vZHVsZXMvY29tbW9uL2ZldGNoJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIHBhZ2VzOiBbXG4gICAgICAgICAgICAgICAgJ3BhZ2VzL3B1Ymxpc2gvaW5kZXgnXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgd2luZG93OiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ1dlQ2hhdCcsXG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZ2xvYmFsRGF0YSA9IHtcbiAgICAgICAgICAgIHVzZXJJbmZvOiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKClcbiAgICAgICAgICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcbiAgICAgICAgfVxuXG4gICAgICAgIG9uTGF1bmNoKCkge1xuICAgICAgICAgICAgLy8gdGhpcy5nZXRVc2VySW5mbygpXG4gICAgICAgIH1cblxuICAgICAgICBzbGVlcChzKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCdwcm9taXNlIHJlc29sdmVkJylcbiAgICAgICAgICAgICAgICB9LCBzICogMTAwMClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBhc3luYyBnZXRVc2VySW5mbyAoKSB7XG4gICAgICAgICAgICBjb25zdCB0aGF0ID0gdGhpc1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhhdC5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2VweS5sb2dpbih7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDojrflj5ZvcGVuSWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9hcGkud2VpeGluLnFxLmNvbS9zbnMvanNjb2RlMnNlc3Npb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwaWQ6ICd3eDA3NGZjODlhNjMyOTFmNTgnLCAvLyDlsI/nqIvluo/llK/kuIDmoIfor4ZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VjcmV0OiAnYzUyNDU0ZWQ2ODY5MGM4YTM1MTkwYjk0MWM2YzI5OGInLCAvLyDlsI/nqIvluo/nmoQgYXBwIHNlY3JldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmFudF90eXBlOiAnYXV0aG9yaXphdGlvbl9jb2RlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganNfY29kZTogcmVzLmNvZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiB7ICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzIChvcGVuSWRSZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKCfnmbvlvZXmiJDlip/ov5Tlm57nmoRvcGVuSWTvvJonICsgb3BlbklkUmVzLmRhdGEub3BlbmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDliKTmlq1vcGVuSWTmmK/lkKbojrflj5bmiJDlip9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wZW5JZFJlcy5kYXRhLm9wZW5pZCAhPSBudWxsICYmIG9wZW5JZFJlcy5kYXRhLm9wZW5pZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmnInkuIDngrnpnIDopoHms6jmhI8g6K+i6Zeu55So5oi3IOaYr+WQpuaOiOadgyDpgqPmj5DnpLog5piv6L+ZQVBJ5Y+R5Ye655qEXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lmdsb2JhbERhdGEudXNlckluZm8ub3BlbklkID0gb3BlbklkUmVzLmRhdGEub3BlbmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwb3N0RmV0Y2goJy9sb2dpbldlQ2hhdCcsIHsgbm9BamF4OiB0cnVlLCBkYXRhOiB0aGlzLmdsb2JhbERhdGEudXNlckluZm8gfSkudGhlbih1c2VySW5mbyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdsb2JhbERhdGEudXNlckluZm8uaWQgPSB1c2VySW5mby51c2VyLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g6Ieq5a6a5LmJ5pON5L2cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOe7keWumuaVsOaNru+8jOa4suafk+mhtemdolxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKGZhaWxEYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbygn55So5oi35ouS57ud5o6I5p2DJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGZhaWxEYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oJ+iOt+WPlueUqOaIt29wZW5JZOWksei0pScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3Qob3BlbklkUmVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuIl19