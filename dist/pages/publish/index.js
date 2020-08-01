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
            navigationBarTitleText: '花瓣'
        }, _this.data = {
            cctx: {
                takePhoto: function takePhoto() {}
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onReady',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(res) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _wepy2.default.hideShareMenu();
                                if (_wepy2.default.createCameraContext()) {
                                    this.cctx = _wepy2.default.createCameraContext('myCamera');
                                } else {
                                    // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
                                    _wepy2.default.showModal({
                                        title: '提示',
                                        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
                                    });
                                }

                            case 2:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function onReady(_x) {
                return _ref2.apply(this, arguments);
            }

            return onReady;
        }()
    }, {
        key: 'openShow',
        value: function openShow(image) {
            var isFromAlbum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            _wepy2.default.navigateTo({
                url: './show?image=' + encodeURIComponent(image) + '&isFromAlbum=' + isFromAlbum
            });
            this.$apply();
        }
    }, {
        key: 'takePhoto',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var _this2 = this;

                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                this.cctx.takePhoto({
                                    quality: 'low',
                                    success: function success(res) {
                                        _wepy2.default.showLoading({ title: '识别中', mask: true });
                                        _this2.openShow(res.tempImagePath);
                                    }
                                });

                            case 1:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function takePhoto() {
                return _ref3.apply(this, arguments);
            }

            return takePhoto;
        }()
    }, {
        key: 'getImageFromAlbum',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
                var imageFilePath;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return (0, _fetch.chooseImage)({
                                    sourceType: ['album']
                                    // sizeType: ['compressed']
                                }).then(function (res) {
                                    return res.tempFilePaths[0];
                                });

                            case 2:
                                imageFilePath = _context3.sent;

                                _wepy2.default.showLoading({ title: '识别中', mask: true });
                                this.openShow(imageFilePath, true);

                            case 5:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function getImageFromAlbum(_x3) {
                return _ref4.apply(this, arguments);
            }

            return getImageFromAlbum;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            if (options.shareId) {
                _wepy2.default.navigateTo({
                    url: './show?shareId=' + options.shareId
                });
            }
        }
    }, {
        key: 'error',
        value: function error(e) {
            _wepy2.default.hideLoading();
            _wepy2.default.showToast({
                title: '网络异常',
                icon: 'none',
                duration: 2000
            });
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/publish/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJjY3R4IiwidGFrZVBob3RvIiwicmVzIiwid2VweSIsImhpZGVTaGFyZU1lbnUiLCJjcmVhdGVDYW1lcmFDb250ZXh0Iiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50IiwiaW1hZ2UiLCJpc0Zyb21BbGJ1bSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJlbmNvZGVVUklDb21wb25lbnQiLCIkYXBwbHkiLCJxdWFsaXR5Iiwic3VjY2VzcyIsInNob3dMb2FkaW5nIiwibWFzayIsIm9wZW5TaG93IiwidGVtcEltYWdlUGF0aCIsImUiLCJzb3VyY2VUeXBlIiwidGhlbiIsInRlbXBGaWxlUGF0aHMiLCJpbWFnZUZpbGVQYXRoIiwib3B0aW9ucyIsInNoYXJlSWQiLCJoaWRlTG9hZGluZyIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsUUFHVEMsSSxHQUFPO0FBQ0hDLGtCQUFNO0FBQ0ZDLHlCQURFLHVCQUNXLENBQUU7QUFEYjtBQURILFM7Ozs7OztpR0FLUUMsRzs7Ozs7QUFDWEMsK0NBQUtDLGFBQUw7QUFDQSxvQ0FBSUQsZUFBS0UsbUJBQUwsRUFBSixFQUFnQztBQUM1Qix5Q0FBS0wsSUFBTCxHQUFZRyxlQUFLRSxtQkFBTCxDQUF5QixVQUF6QixDQUFaO0FBQ0gsaUNBRkQsTUFFTztBQUFFO0FBQ0xGLG1EQUFLRyxTQUFMLENBQWU7QUFDWEMsK0NBQU8sSUFESTtBQUVYQyxpREFBUztBQUZFLHFDQUFmO0FBSUg7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FFS0MsSyxFQUE0QjtBQUFBLGdCQUFyQkMsV0FBcUIsdUVBQVAsS0FBTzs7QUFDbENQLDJCQUFLUSxVQUFMLENBQWdCO0FBQ1pDLHVDQUFxQkMsbUJBQW1CSixLQUFuQixDQUFyQixxQkFBOERDO0FBRGxELGFBQWhCO0FBR0EsaUJBQUtJLE1BQUw7QUFDSDs7Ozs7Ozs7Ozs7QUFFRyxxQ0FBS2QsSUFBTCxDQUFVQyxTQUFWLENBQW9CO0FBQ2hCYyw2Q0FBUyxLQURPO0FBRWhCQyw2Q0FBUyxpQkFBQ2QsR0FBRCxFQUFTO0FBQ2RDLHVEQUFLYyxXQUFMLENBQWlCLEVBQUVWLE9BQU8sS0FBVCxFQUFnQlcsTUFBTSxJQUF0QixFQUFqQjtBQUNBLCtDQUFLQyxRQUFMLENBQWNqQixJQUFJa0IsYUFBbEI7QUFDSDtBQUxlLGlDQUFwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0FRcUJDLEM7Ozs7Ozs7dUNBQ08sd0JBQVk7QUFDcENDLGdEQUFZLENBQUMsT0FBRDtBQUNaO0FBRm9DLGlDQUFaLEVBR3pCQyxJQUh5QixDQUdwQixlQUFPO0FBQ1gsMkNBQU9yQixJQUFJc0IsYUFBSixDQUFrQixDQUFsQixDQUFQO0FBQ0gsaUNBTDJCLEM7OztBQUF0QkMsNkM7O0FBTU50QiwrQ0FBS2MsV0FBTCxDQUFpQixFQUFFVixPQUFPLEtBQVQsRUFBZ0JXLE1BQU0sSUFBdEIsRUFBakI7QUFDQSxxQ0FBS0MsUUFBTCxDQUFjTSxhQUFkLEVBQTZCLElBQTdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBRUlDLE8sRUFBUztBQUNiLGdCQUFJQSxRQUFRQyxPQUFaLEVBQXFCO0FBQ2pCeEIsK0JBQUtRLFVBQUwsQ0FBZ0I7QUFDWkMsNkNBQXVCYyxRQUFRQztBQURuQixpQkFBaEI7QUFHSDtBQUNKOzs7OEJBQ01OLEMsRUFBRztBQUNObEIsMkJBQUt5QixXQUFMO0FBQ0F6QiwyQkFBSzBCLFNBQUwsQ0FBZTtBQUNYdEIsdUJBQU8sTUFESTtBQUVYdUIsc0JBQU0sTUFGSztBQUdYQywwQkFBVTtBQUhDLGFBQWY7QUFLSDs7OztFQTNEOEI1QixlQUFLNkIsSTs7a0JBQW5CcEMsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IHsgY2hvb3NlSW1hZ2UgfSBmcm9tICdAL21vZHVsZXMvY29tbW9uL2ZldGNoJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6Iqx55OjJ1xuICAgICAgICB9XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBjY3R4OiB7XG4gICAgICAgICAgICAgICAgdGFrZVBob3RvICgpIHt9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgb25SZWFkeSAocmVzKSB7XG4gICAgICAgICAgICB3ZXB5LmhpZGVTaGFyZU1lbnUoKVxuICAgICAgICAgICAgaWYgKHdlcHkuY3JlYXRlQ2FtZXJhQ29udGV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jY3R4ID0gd2VweS5jcmVhdGVDYW1lcmFDb250ZXh0KCdteUNhbWVyYScpXG4gICAgICAgICAgICB9IGVsc2UgeyAvLyDlpoLmnpzluIzmnJvnlKjmiLflnKjmnIDmlrDniYjmnKznmoTlrqLmiLfnq6/kuIrkvZPpqozmgqjnmoTlsI/nqIvluo/vvIzlj6/ku6Xov5nmoLflrZDmj5DnpLpcbiAgICAgICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+W9k+WJjeW+ruS/oeeJiOacrOi/h+S9ju+8jOaXoOazleS9v+eUqOivpeWKn+iDve+8jOivt+WNh+e6p+WIsOacgOaWsOW+ruS/oeeJiOacrOWQjumHjeivleOAgidcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG9wZW5TaG93IChpbWFnZSwgaXNGcm9tQWxidW0gPSBmYWxzZSkge1xuICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICB1cmw6IGAuL3Nob3c/aW1hZ2U9JHtlbmNvZGVVUklDb21wb25lbnQoaW1hZ2UpfSZpc0Zyb21BbGJ1bT0ke2lzRnJvbUFsYnVtfWBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgdGFrZVBob3RvKCkge1xuICAgICAgICAgICAgdGhpcy5jY3R4LnRha2VQaG90byh7XG4gICAgICAgICAgICAgICAgcXVhbGl0eTogJ2xvdycsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3ZXB5LnNob3dMb2FkaW5nKHsgdGl0bGU6ICfor4bliKvkuK0nLCBtYXNrOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BlblNob3cocmVzLnRlbXBJbWFnZVBhdGgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBhc3luYyBnZXRJbWFnZUZyb21BbGJ1bSAoZSkge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VGaWxlUGF0aCA9IGF3YWl0IGNob29zZUltYWdlKHtcbiAgICAgICAgICAgICAgICBzb3VyY2VUeXBlOiBbJ2FsYnVtJ11cbiAgICAgICAgICAgICAgICAvLyBzaXplVHlwZTogWydjb21wcmVzc2VkJ11cbiAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnRlbXBGaWxlUGF0aHNbMF1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB3ZXB5LnNob3dMb2FkaW5nKHsgdGl0bGU6ICfor4bliKvkuK0nLCBtYXNrOiB0cnVlIH0pXG4gICAgICAgICAgICB0aGlzLm9wZW5TaG93KGltYWdlRmlsZVBhdGgsIHRydWUpXG4gICAgICAgIH1cbiAgICAgICAgb25Mb2FkIChvcHRpb25zKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5zaGFyZUlkKSB7XG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgLi9zaG93P3NoYXJlSWQ9JHtvcHRpb25zLnNoYXJlSWR9YFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZXJyb3IgKGUpIHtcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn572R57uc5byC5bi4JyxcbiAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4iXX0=