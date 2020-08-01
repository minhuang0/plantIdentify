'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
            navigationBarTitleText: '花瓣'
        }, _this.methods = {
            start: function start() {
                var that = this;
                _wepy2.default.getSetting({
                    success: function success(res) {
                        console.log(res);
                        if (!res.authSetting['scope.userLocation']) {
                            _wepy2.default.showModal({
                                title: '是否授权当前位置',
                                content: '需要获取您的地理位置，请确认授权，否则地图功能将无法使用',
                                success: function success(res) {
                                    if (res.cancel) {
                                        console.info('授权失败');
                                    } else if (res.confirm) {
                                        that.showGetLocation();
                                    }
                                }
                            });
                            return;
                        }
                        that.goIdentifyPage();
                    }
                });
            },
            goLive: function goLive() {
                _wepy2.default.navigateTo({
                    url: '../live/index'
                });
            },
            goMap: function goMap() {
                _wepy2.default.navigateTo({
                    url: '../map/index'
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'goIdentifyPage',
        value: function goIdentifyPage() {
            _wepy2.default.navigateTo({
                url: './index'
            });
        }
    }, {
        key: 'showGetLocation',
        value: function showGetLocation() {
            var that = this;
            _wepy2.default.openSetting({
                success: function success(data) {
                    if (data.authSetting['scope.userLocation'] === true) {
                        _wepy2.default.showToast({
                            title: '授权成功',
                            icon: 'success',
                            duration: 5000
                        });
                        // 再次授权，调用getLocationt的API
                        that.goIdentifyPage(that);
                    } else {
                        _wepy2.default.showToast({
                            title: '授权失败',
                            icon: 'success',
                            duration: 5000
                        });
                    }
                }

            });
        }
    }, {
        key: 'getLocation',
        value: function getLocation() {
            _wepy2.default.getLocation({
                type: 'wgs84',
                success: function success(res) {}
            });
        }
    }, {
        key: 'onLoad',
        value: function onLoad() {
            this.getLocation();
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/publish/welcome'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibWV0aG9kcyIsInN0YXJ0IiwidGhhdCIsIndlcHkiLCJnZXRTZXR0aW5nIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJhdXRoU2V0dGluZyIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsImNhbmNlbCIsImluZm8iLCJjb25maXJtIiwic2hvd0dldExvY2F0aW9uIiwiZ29JZGVudGlmeVBhZ2UiLCJnb0xpdmUiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZ29NYXAiLCJvcGVuU2V0dGluZyIsImRhdGEiLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCJnZXRMb2NhdGlvbiIsInR5cGUiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQUdUQyxPLEdBQVU7QUFDTkMsaUJBRE0sbUJBQ0c7QUFDTCxvQkFBTUMsT0FBTyxJQUFiO0FBQ0FDLCtCQUFLQyxVQUFMLENBQWdCO0FBQ1pDLDJCQURZLG1CQUNIQyxHQURHLEVBQ0U7QUFDVkMsZ0NBQVFDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBLDRCQUFJLENBQUNBLElBQUlHLFdBQUosQ0FBZ0Isb0JBQWhCLENBQUwsRUFBNEM7QUFDeENOLDJDQUFLTyxTQUFMLENBQWU7QUFDWEMsdUNBQU8sVUFESTtBQUVYQyx5Q0FBUyw4QkFGRTtBQUdYUCx1Q0FIVyxtQkFHRkMsR0FIRSxFQUdHO0FBQ1Ysd0NBQUlBLElBQUlPLE1BQVIsRUFBZ0I7QUFDWk4sZ0RBQVFPLElBQVIsQ0FBYSxNQUFiO0FBQ0gscUNBRkQsTUFFTyxJQUFJUixJQUFJUyxPQUFSLEVBQWlCO0FBQ3BCYiw2Q0FBS2MsZUFBTDtBQUNIO0FBQ0o7QUFUVSw2QkFBZjtBQVdBO0FBQ0g7QUFDRGQsNkJBQUtlLGNBQUw7QUFDSDtBQWxCVyxpQkFBaEI7QUFvQkgsYUF2Qks7QUF3Qk5DLGtCQXhCTSxvQkF3Qkk7QUFDTmYsK0JBQUtnQixVQUFMLENBQWdCO0FBQ1pDO0FBRFksaUJBQWhCO0FBR0gsYUE1Qks7QUE2Qk5DLGlCQTdCTSxtQkE2Qkc7QUFDTGxCLCtCQUFLZ0IsVUFBTCxDQUFnQjtBQUNaQztBQURZLGlCQUFoQjtBQUdIO0FBakNLLFM7Ozs7O3lDQW1DUTtBQUNkakIsMkJBQUtnQixVQUFMLENBQWdCO0FBQ1pDO0FBRFksYUFBaEI7QUFHSDs7OzBDQUNrQjtBQUNmLGdCQUFNbEIsT0FBTyxJQUFiO0FBQ0FDLDJCQUFLbUIsV0FBTCxDQUFpQjtBQUNiakIseUJBQVMsaUJBQVVrQixJQUFWLEVBQWdCO0FBQ3JCLHdCQUFJQSxLQUFLZCxXQUFMLENBQWlCLG9CQUFqQixNQUEyQyxJQUEvQyxFQUFxRDtBQUNqRE4sdUNBQUtxQixTQUFMLENBQWU7QUFDWGIsbUNBQU8sTUFESTtBQUVYYyxrQ0FBTSxTQUZLO0FBR1hDLHNDQUFVO0FBSEMseUJBQWY7QUFLQTtBQUNBeEIsNkJBQUtlLGNBQUwsQ0FBb0JmLElBQXBCO0FBQ0gscUJBUkQsTUFRTztBQUNIQyx1Q0FBS3FCLFNBQUwsQ0FBZTtBQUNYYixtQ0FBTyxNQURJO0FBRVhjLGtDQUFNLFNBRks7QUFHWEMsc0NBQVU7QUFIQyx5QkFBZjtBQUtIO0FBQ0o7O0FBakJZLGFBQWpCO0FBb0JIOzs7c0NBQ2M7QUFDWHZCLDJCQUFLd0IsV0FBTCxDQUFpQjtBQUNiQyxzQkFBTSxPQURPO0FBRWJ2Qix5QkFBUyxpQkFBU0MsR0FBVCxFQUFjLENBQ3RCO0FBSFksYUFBakI7QUFLSDs7O2lDQUNTO0FBQ04saUJBQUtxQixXQUFMO0FBQ0g7Ozs7RUE1RThCeEIsZUFBSzBCLEk7O2tCQUFuQmhDLEsiLCJmaWxlIjoid2VsY29tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfoirHnk6MnXG4gICAgICAgIH1cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aGF0ID0gdGhpc1xuICAgICAgICAgICAgICAgIHdlcHkuZ2V0U2V0dGluZyh7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJMb2NhdGlvbiddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aYr+WQpuaOiOadg+W9k+WJjeS9jee9ricsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfpnIDopoHojrflj5bmgqjnmoTlnLDnkIbkvY3nva7vvIzor7fnoa7orqTmjojmnYPvvIzlkKbliJnlnLDlm77lip/og73lsIbml6Dms5Xkvb/nlKgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuY2FuY2VsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKCfmjojmnYPlpLHotKUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXMuY29uZmlybSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuc2hvd0dldExvY2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmdvSWRlbnRpZnlQYWdlKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ29MaXZlICgpIHtcbiAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IGAuLi9saXZlL2luZGV4YFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ29NYXAgKCkge1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogYC4uL21hcC9pbmRleGBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGdvSWRlbnRpZnlQYWdlICgpIHtcbiAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgdXJsOiBgLi9pbmRleGBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgc2hvd0dldExvY2F0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzXG4gICAgICAgICAgICB3ZXB5Lm9wZW5TZXR0aW5nKHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5hdXRoU2V0dGluZ1snc2NvcGUudXNlckxvY2F0aW9uJ10gPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aOiOadg+aIkOWKnycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5YaN5qyh5o6I5p2D77yM6LCD55SoZ2V0TG9jYXRpb25055qEQVBJXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmdvSWRlbnRpZnlQYWdlKHRoYXQpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmjojmnYPlpLHotKUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwMFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBnZXRMb2NhdGlvbiAoKSB7XG4gICAgICAgICAgICB3ZXB5LmdldExvY2F0aW9uKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnd2dzODQnLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgb25Mb2FkICgpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0TG9jYXRpb24oKVxuICAgICAgICB9XG4gICAgfVxuIl19