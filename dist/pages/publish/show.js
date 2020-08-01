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
            image: '',
            result: [],
            shareId: '',
            loadImage: '', // canvas切图用的image
            isFromAlbum: false, // 是否来源于相册
            plantDetail: {}, // 图片详情
            canvas: {
                width: 375,
                height: 600
            },
            isOnlyShowFirst: true,
            isNotPlant: false,
            isFromShare: false
        }, _this.methods = {
            goWebviewDetail: function goWebviewDetail(e) {
                if (e.currentTarget.dataset.item && e.currentTarget.dataset.item.name) {
                    _wepy2.default.navigateTo({
                        url: './detail?name=' + e.currentTarget.dataset.item.name
                    });
                }
            },
            showMore: function showMore() {
                this.isOnlyShowFirst = false;
            },
            close: function close() {
                _wepy2.default.navigateBack();
            }
        }, _this.computed = {
            formatResult: function formatResult() {
                var _this2 = this;

                var result = this.result.reduce(function (arr, i) {
                    if (_this2.isOnlyShowFirst && arr.length === 1) {
                        return arr;
                    }
                    // if (!i.desList) {
                    //     return arr
                    // }
                    if (i.desList && Array.isArray(i.desList)) {
                        i.desList.map(function (item) {
                            arr.push({
                                score: parseInt(i.score * 100) + '%',
                                name: i.name,
                                imageUrl: item.imageUrl,
                                abstracts: item.abstracts
                            });
                        });
                        return arr;
                    }
                    arr.push({
                        score: parseInt(i.score * 100) + '%',
                        name: i.name,
                        imageUrl: i.desList && i.desList.imageUrl || '',
                        abstracts: i.desList && i.desList.abstracts || ''
                    });
                    return arr;
                }, []);
                if (this.result.length > 0 && result.length === 0) {
                    this.isNotPlant = true;
                    // this.$apply()
                }
                return result;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onShareAppMessage',
        value: function onShareAppMessage() {
            return {
                title: (this.formatResult[0] && this.formatResult[0].name || '') + ' (' + (this.formatResult[0] && this.formatResult[0].score) + ')',
                path: 'pages/publish/index?shareId=' + this.shareId,
                imageUrl: this.shareImage
            };
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
    }, {
        key: 'compressImage',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                return _context.abrupt('return', new Promise(function (resolve, reject) {
                                    setTimeout(function () {
                                        _wepy2.default.canvasToTempFilePath({
                                            canvasId: 'canvas',
                                            success: function success(res) {
                                                resolve(res.tempFilePath);
                                            },
                                            fail: function fail(e) {
                                                reject(e);
                                            }
                                        });
                                    }, 500);
                                }));

                            case 1:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function compressImage() {
                return _ref2.apply(this, arguments);
            }

            return compressImage;
        }()
    }, {
        key: 'getPlantDetail',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(name, score) {
                var res;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return (0, _fetch.getFetch)('/searchBySolr?strs=' + ('绿萝' || name), {
                                    noAjax: true
                                });

                            case 2:
                                res = _context2.sent;

                                this.plantDetail.baike = res.baikeParams ? res.baikeParams[0] : {
                                    imageUrl: '',
                                    abstracts: ''
                                };
                                this.plantDetail.zhiku = res.zhikuParams;
                                this.plantDetail.name = name;
                                this.plantDetail.score = parseInt(score * 100) + '%';
                                this.$apply();

                            case 8:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getPlantDetail(_x, _x2) {
                return _ref3.apply(this, arguments);
            }

            return getPlantDetail;
        }()
    }, {
        key: 'parseLeafSnapResponse',
        value: function parseLeafSnapResponse() {
            var rsp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '{}';

            var res = JSON.parse(rsp);
            var result = res.res && res.res.result;
            this.shareId = res.id;
            this.result = Array.isArray(result) ? result : result ? [result] : [];
            // 去拿植物详情
            // if (this.result[0] && this.result[0].name) {
            //     this.getPlantDetail(this.result[0].name, this.result[0].score)
            // }
            _wepy2.default.hideLoading();
            _wepy2.default.showShareMenu({
                withShareTicket: true
            });
            this.$apply();
        }
    }, {
        key: 'loadimage',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
                var _this3 = this;

                var ctx, minImage, currentTimes;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                if (!this.isFromShare) {
                                    _context3.next = 2;
                                    break;
                                }

                                return _context3.abrupt('return');

                            case 2:
                                // 从相册来的重新绘制canvas宽高
                                // if (this.isFromAlbum) {
                                //     this.canvas.width = 375
                                //     this.canvas.height = e.detail.height / e.detail.width * 375
                                // }
                                ctx = _wepy2.default.createCanvasContext('canvas');

                                ctx.drawImage(this.loadImage, 0, 0, 375, e.detail.height / e.detail.width * 375);
                                // if (this.isFromAlbum) {
                                //     ctx.drawImage(this.loadImage, 0, 0, 375, e.detail.height / e.detail.width * 375)
                                // } else {
                                //     ctx.drawImage(this.loadImage, 87, 90, 200, 200, 0, 0, 200, 200)
                                // }
                                ctx.draw();
                                minImage = '';
                                currentTimes = 0;

                            case 7:
                                if (!(!minImage && currentTimes < 6)) {
                                    _context3.next = 14;
                                    break;
                                }

                                currentTimes++;
                                _context3.next = 11;
                                return this.compressImage();

                            case 11:
                                minImage = _context3.sent;
                                _context3.next = 7;
                                break;

                            case 14:
                                console.log(currentTimes, minImage);
                                this.image = minImage;
                                this.$apply();
                                return _context3.abrupt('return', new Promise(function (resolve, reject) {
                                    _wepy2.default.getLocation({
                                        // type: 'wgs84',
                                        type: 'gcj02',
                                        success: function success(res) {
                                            resolve(res);
                                        }
                                    });
                                }).then(function (res) {
                                    return (0, _fetch.uploadFile)('/leafSnap', minImage, {
                                        lon: res.longitude,
                                        lat: res.latitude
                                    }).then(function (res) {
                                        _this3.parseLeafSnapResponse(res);
                                    }).catch(function (e) {
                                        _this3.error(e);
                                    });
                                }));

                            case 18:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function loadimage(_x4) {
                return _ref4.apply(this, arguments);
            }

            return loadimage;
        }()
    }, {
        key: 'onLoad',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(options) {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _wepy2.default.getSystemInfo({
                                    success: function success(res) {}
                                });

                                if (!options.shareId) {
                                    _context4.next = 3;
                                    break;
                                }

                                return _context4.abrupt('return', this.getShareDate(options.shareId));

                            case 3:
                                _wepy2.default.showLoading({ title: '识别中', mask: true });
                                this.isFromAlbum = options.isFromAlbum !== 'false';
                                this.$apply();
                                this.loadImage = options.image ? decodeURIComponent(options.image) : 'https://sh.cfpheks.com/storage/d4b51c0983704f01c84f42b2385147be/AjQGiixNQ40PF53ASIHzkoFzyMiK5ZJUQlkrbRYN.png';
                                this.$apply();

                            case 8:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function onLoad(_x5) {
                return _ref5.apply(this, arguments);
            }

            return onLoad;
        }()
    }, {
        key: 'getShareDate',
        value: function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(id) {
                var res, shareRes;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                this.isFromShare = true;
                                _wepy2.default.showLoading({ title: '数据加载中', mask: true });
                                _context5.next = 4;
                                return (0, _fetch.getFetch)('/shareRes/' + id, {
                                    noAjax: true
                                });

                            case 4:
                                res = _context5.sent;
                                shareRes = res.leafsnapRes || {};

                                shareRes.res = JSON.parse(shareRes.res);
                                this.image = shareRes.imgUrl;
                                this.parseLeafSnapResponse(JSON.stringify(shareRes));

                            case 9:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function getShareDate(_x6) {
                return _ref6.apply(this, arguments);
            }

            return getShareDate;
        }()
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/publish/show'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3cuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImltYWdlIiwicmVzdWx0Iiwic2hhcmVJZCIsImxvYWRJbWFnZSIsImlzRnJvbUFsYnVtIiwicGxhbnREZXRhaWwiLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsImlzT25seVNob3dGaXJzdCIsImlzTm90UGxhbnQiLCJpc0Zyb21TaGFyZSIsIm1ldGhvZHMiLCJnb1dlYnZpZXdEZXRhaWwiLCJlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJpdGVtIiwibmFtZSIsIndlcHkiLCJuYXZpZ2F0ZVRvIiwidXJsIiwic2hvd01vcmUiLCJjbG9zZSIsIm5hdmlnYXRlQmFjayIsImNvbXB1dGVkIiwiZm9ybWF0UmVzdWx0IiwicmVkdWNlIiwiYXJyIiwiaSIsImxlbmd0aCIsImRlc0xpc3QiLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJwdXNoIiwic2NvcmUiLCJwYXJzZUludCIsImltYWdlVXJsIiwiYWJzdHJhY3RzIiwidGl0bGUiLCJwYXRoIiwic2hhcmVJbWFnZSIsImhpZGVMb2FkaW5nIiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0IiwiY2FudmFzVG9UZW1wRmlsZVBhdGgiLCJjYW52YXNJZCIsInN1Y2Nlc3MiLCJyZXMiLCJ0ZW1wRmlsZVBhdGgiLCJmYWlsIiwibm9BamF4IiwiYmFpa2UiLCJiYWlrZVBhcmFtcyIsInpoaWt1Iiwiemhpa3VQYXJhbXMiLCIkYXBwbHkiLCJyc3AiLCJKU09OIiwicGFyc2UiLCJpZCIsInNob3dTaGFyZU1lbnUiLCJ3aXRoU2hhcmVUaWNrZXQiLCJjdHgiLCJjcmVhdGVDYW52YXNDb250ZXh0IiwiZHJhd0ltYWdlIiwiZGV0YWlsIiwiZHJhdyIsIm1pbkltYWdlIiwiY3VycmVudFRpbWVzIiwiY29tcHJlc3NJbWFnZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRMb2NhdGlvbiIsInR5cGUiLCJ0aGVuIiwibG9uIiwibG9uZ2l0dWRlIiwibGF0IiwibGF0aXR1ZGUiLCJwYXJzZUxlYWZTbmFwUmVzcG9uc2UiLCJjYXRjaCIsImVycm9yIiwib3B0aW9ucyIsImdldFN5c3RlbUluZm8iLCJnZXRTaGFyZURhdGUiLCJzaG93TG9hZGluZyIsIm1hc2siLCJkZWNvZGVVUklDb21wb25lbnQiLCJzaGFyZVJlcyIsImxlYWZzbmFwUmVzIiwiaW1nVXJsIiwic3RyaW5naWZ5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQUdUQyxJLEdBQU87QUFDSEMsbUJBQU8sRUFESjtBQUVIQyxvQkFBUSxFQUZMO0FBR0hDLHFCQUFTLEVBSE47QUFJSEMsdUJBQVcsRUFKUixFQUlZO0FBQ2ZDLHlCQUFhLEtBTFYsRUFLaUI7QUFDcEJDLHlCQUFhLEVBTlYsRUFNYztBQUNqQkMsb0JBQVE7QUFDSkMsdUJBQU8sR0FESDtBQUVKQyx3QkFBUTtBQUZKLGFBUEw7QUFXSEMsNkJBQWlCLElBWGQ7QUFZSEMsd0JBQVksS0FaVDtBQWFIQyx5QkFBYTtBQWJWLFMsUUFlUEMsTyxHQUFVO0FBQ05DLDJCQURNLDJCQUNXQyxDQURYLEVBQ2M7QUFDaEIsb0JBQUlBLEVBQUVDLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCQyxJQUF4QixJQUFnQ0gsRUFBRUMsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JDLElBQXhCLENBQTZCQyxJQUFqRSxFQUF1RTtBQUNuRUMsbUNBQUtDLFVBQUwsQ0FBZ0I7QUFDWkMsZ0RBQXNCUCxFQUFFQyxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkMsSUFBeEIsQ0FBNkJDO0FBRHZDLHFCQUFoQjtBQUdIO0FBQ0osYUFQSztBQVFOSSxvQkFSTSxzQkFRTTtBQUNSLHFCQUFLYixl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QUFuQjs7cUNBSUltQyxRQUFRdkYsTzs7Ozs7a0VBQ0QsS0FBS3lGLFlBQUwsQ0FBa0JGLFFBQVF2RixPQUExQixDOzs7QUFFWGlCLCtDQUFLeUUsV0FBTCxDQUFpQixFQUFFcEQsT0FBTyxLQUFULEVBQWdCcUQsTUFBTSxJQUF0QixFQUFqQjtBQUNBLHFDQUFLekYsV0FBTCxHQUFtQnFGLFFBQVFyRixXQUFSLEtBQXdCLE9BQTNDO0FBQ0EscUNBQUswRCxNQUFMO0FBQ0EscUNBQUszRCxTQUFMLEdBQWlCc0YsUUFBUXpGLEtBQVIsR0FBZ0I4RixtQkFBbUJMLFFBQVF6RixLQUEzQixDQUFoQixHQUFvRCw4R0FBckU7QUFDQSxxQ0FBSzhELE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBRWdCSSxFOzs7Ozs7QUFDaEIscUNBQUt2RCxXQUFMLEdBQW1CLElBQW5CO0FBQ0FRLCtDQUFLeUUsV0FBTCxDQUFpQixFQUFFcEQsT0FBTyxPQUFULEVBQWtCcUQsTUFBTSxJQUF4QixFQUFqQjs7dUNBQ2tCLG9DQUFzQjNCLEVBQXRCLEVBQTRCO0FBQzFDVCw0Q0FBUTtBQURrQyxpQ0FBNUIsQzs7O0FBQVpILG1DO0FBR0F5Qyx3QyxHQUFXekMsSUFBSTBDLFdBQUosSUFBbUIsRTs7QUFDcENELHlDQUFTekMsR0FBVCxHQUFlVSxLQUFLQyxLQUFMLENBQVc4QixTQUFTekMsR0FBcEIsQ0FBZjtBQUNBLHFDQUFLdEQsS0FBTCxHQUFhK0YsU0FBU0UsTUFBdEI7QUFDQSxxQ0FBS1gscUJBQUwsQ0FBMkJ0QixLQUFLa0MsU0FBTCxDQUFlSCxRQUFmLENBQTNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbk0yQjVFLGVBQUtnRixJOztrQkFBbkJ2RyxLIiwiZmlsZSI6InNob3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCB7IHVwbG9hZEZpbGUsIGdldEZldGNoIH0gZnJvbSAnQC9tb2R1bGVzL2NvbW1vbi9mZXRjaCdcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iKseeToydcbiAgICAgICAgfVxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgaW1hZ2U6ICcnLFxuICAgICAgICAgICAgcmVzdWx0OiBbXSxcbiAgICAgICAgICAgIHNoYXJlSWQ6ICcnLFxuICAgICAgICAgICAgbG9hZEltYWdlOiAnJywgLy8gY2FudmFz5YiH5Zu+55So55qEaW1hZ2VcbiAgICAgICAgICAgIGlzRnJvbUFsYnVtOiBmYWxzZSwgLy8g5piv5ZCm5p2l5rqQ5LqO55u45YaMXG4gICAgICAgICAgICBwbGFudERldGFpbDoge30sIC8vIOWbvueJh+ivpuaDhVxuICAgICAgICAgICAgY2FudmFzOiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDM3NSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzT25seVNob3dGaXJzdDogdHJ1ZSxcbiAgICAgICAgICAgIGlzTm90UGxhbnQ6IGZhbHNlLFxuICAgICAgICAgICAgaXNGcm9tU2hhcmU6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIGdvV2Vidmlld0RldGFpbCAoZSkge1xuICAgICAgICAgICAgICAgIGlmIChlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pdGVtICYmIGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lml0ZW0ubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBgLi9kZXRhaWw/bmFtZT0ke2UuY3VycmVudFRhcmdldC5kYXRhc2V0Lml0ZW0ubmFtZX1gXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dNb3JlICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzT25seVNob3dGaXJzdCA9IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xvc2UgKCkge1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb21wdXRlZCA9IHtcbiAgICAgICAgICAgIGZvcm1hdFJlc3VsdCAoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5yZXN1bHQucmVkdWNlKChhcnIsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNPbmx5U2hvd0ZpcnN0ICYmIGFyci5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhcnJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAoIWkuZGVzTGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIGFyclxuICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpLmRlc0xpc3QgJiYgQXJyYXkuaXNBcnJheShpLmRlc0xpc3QpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpLmRlc0xpc3QubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29yZTogcGFyc2VJbnQoaS5zY29yZSAqIDEwMCkgKyAnJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGkubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw6IGl0ZW0uaW1hZ2VVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFic3RyYWN0czogaXRlbS5hYnN0cmFjdHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhcnJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhcnIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29yZTogcGFyc2VJbnQoaS5zY29yZSAqIDEwMCkgKyAnJScsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBpLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybDogaS5kZXNMaXN0ICYmIGkuZGVzTGlzdC5pbWFnZVVybCB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFic3RyYWN0czogaS5kZXNMaXN0ICYmIGkuZGVzTGlzdC5hYnN0cmFjdHMgfHwgJydcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFyclxuICAgICAgICAgICAgICAgIH0sIFtdKVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlc3VsdC5sZW5ndGggPiAwICYmIHJlc3VsdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc05vdFBsYW50ID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBvblNoYXJlQXBwTWVzc2FnZSAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBgJHsodGhpcy5mb3JtYXRSZXN1bHRbMF0gJiYgdGhpcy5mb3JtYXRSZXN1bHRbMF0ubmFtZSkgfHwgJyd9ICgkeyh0aGlzLmZvcm1hdFJlc3VsdFswXSAmJiB0aGlzLmZvcm1hdFJlc3VsdFswXS5zY29yZSl9KWAsXG4gICAgICAgICAgICAgICAgcGF0aDogYHBhZ2VzL3B1Ymxpc2gvaW5kZXg/c2hhcmVJZD0ke3RoaXMuc2hhcmVJZH1gLFxuICAgICAgICAgICAgICAgIGltYWdlVXJsOiB0aGlzLnNoYXJlSW1hZ2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlcnJvciAoZSkge1xuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfnvZHnu5zlvILluLgnLFxuICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBhc3luYyBjb21wcmVzc0ltYWdlICgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHdlcHkuY2FudmFzVG9UZW1wRmlsZVBhdGgoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FudmFzSWQ6ICdjYW52YXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMudGVtcEZpbGVQYXRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhaWwgKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGFzeW5jIGdldFBsYW50RGV0YWlsIChuYW1lLCBzY29yZSkge1xuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZ2V0RmV0Y2goYC9zZWFyY2hCeVNvbHI/c3Rycz0keyfnu7/okJ0nIHx8IG5hbWV9YCwge1xuICAgICAgICAgICAgICAgIG5vQWpheDogdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMucGxhbnREZXRhaWwuYmFpa2UgPSByZXMuYmFpa2VQYXJhbXMgPyByZXMuYmFpa2VQYXJhbXNbMF0gOiB7XG4gICAgICAgICAgICAgICAgaW1hZ2VVcmw6ICcnLFxuICAgICAgICAgICAgICAgIGFic3RyYWN0czogJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucGxhbnREZXRhaWwuemhpa3UgPSByZXMuemhpa3VQYXJhbXNcbiAgICAgICAgICAgIHRoaXMucGxhbnREZXRhaWwubmFtZSA9IG5hbWVcbiAgICAgICAgICAgIHRoaXMucGxhbnREZXRhaWwuc2NvcmUgPSBwYXJzZUludChzY29yZSAqIDEwMCkgKyAnJSdcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgfVxuICAgICAgICBwYXJzZUxlYWZTbmFwUmVzcG9uc2UgKHJzcCA9ICd7fScpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IEpTT04ucGFyc2UocnNwKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHJlcy5yZXMgJiYgcmVzLnJlcy5yZXN1bHRcbiAgICAgICAgICAgIHRoaXMuc2hhcmVJZCA9IHJlcy5pZFxuICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSBBcnJheS5pc0FycmF5KHJlc3VsdCkgPyByZXN1bHQgOiByZXN1bHQgPyBbcmVzdWx0XSA6IFtdXG4gICAgICAgICAgICAvLyDljrvmi7/mpI3nianor6bmg4VcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLnJlc3VsdFswXSAmJiB0aGlzLnJlc3VsdFswXS5uYW1lKSB7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5nZXRQbGFudERldGFpbCh0aGlzLnJlc3VsdFswXS5uYW1lLCB0aGlzLnJlc3VsdFswXS5zY29yZSlcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgICAgd2VweS5zaG93U2hhcmVNZW51KHtcbiAgICAgICAgICAgICAgICB3aXRoU2hhcmVUaWNrZXQ6IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgbG9hZGltYWdlIChlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0Zyb21TaGFyZSkge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5LuO55u45YaM5p2l55qE6YeN5paw57uY5Yi2Y2FudmFz5a696auYXG4gICAgICAgICAgICAvLyBpZiAodGhpcy5pc0Zyb21BbGJ1bSkge1xuICAgICAgICAgICAgLy8gICAgIHRoaXMuY2FudmFzLndpZHRoID0gMzc1XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gZS5kZXRhaWwuaGVpZ2h0IC8gZS5kZXRhaWwud2lkdGggKiAzNzVcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHdlcHkuY3JlYXRlQ2FudmFzQ29udGV4dCgnY2FudmFzJylcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5sb2FkSW1hZ2UsIDAsIDAsIDM3NSwgZS5kZXRhaWwuaGVpZ2h0IC8gZS5kZXRhaWwud2lkdGggKiAzNzUpXG4gICAgICAgICAgICAvLyBpZiAodGhpcy5pc0Zyb21BbGJ1bSkge1xuICAgICAgICAgICAgLy8gICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5sb2FkSW1hZ2UsIDAsIDAsIDM3NSwgZS5kZXRhaWwuaGVpZ2h0IC8gZS5kZXRhaWwud2lkdGggKiAzNzUpXG4gICAgICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5sb2FkSW1hZ2UsIDg3LCA5MCwgMjAwLCAyMDAsIDAsIDAsIDIwMCwgMjAwKVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgY3R4LmRyYXcoKVxuICAgICAgICAgICAgbGV0IG1pbkltYWdlID0gJydcbiAgICAgICAgICAgIGxldCBjdXJyZW50VGltZXMgPSAwXG4gICAgICAgICAgICB3aGlsZSAoIW1pbkltYWdlICYmIGN1cnJlbnRUaW1lcyA8IDYpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50VGltZXMrK1xuICAgICAgICAgICAgICAgIG1pbkltYWdlID0gYXdhaXQgdGhpcy5jb21wcmVzc0ltYWdlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRUaW1lcywgbWluSW1hZ2UpXG4gICAgICAgICAgICB0aGlzLmltYWdlID0gbWluSW1hZ2VcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgd2VweS5nZXRMb2NhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIC8vIHR5cGU6ICd3Z3M4NCcsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdnY2owMicsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB1cGxvYWRGaWxlKCcvbGVhZlNuYXAnLCBtaW5JbWFnZSwge1xuICAgICAgICAgICAgICAgICAgICBsb246IHJlcy5sb25naXR1ZGUsXG4gICAgICAgICAgICAgICAgICAgIGxhdDogcmVzLmxhdGl0dWRlXG4gICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnNlTGVhZlNuYXBSZXNwb25zZShyZXMpXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoZSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBhc3luYyBvbkxvYWQgKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnNoYXJlSWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRTaGFyZURhdGUob3B0aW9ucy5zaGFyZUlkKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2VweS5zaG93TG9hZGluZyh7IHRpdGxlOiAn6K+G5Yir5LitJywgbWFzazogdHJ1ZSB9KVxuICAgICAgICAgICAgdGhpcy5pc0Zyb21BbGJ1bSA9IG9wdGlvbnMuaXNGcm9tQWxidW0gIT09ICdmYWxzZSdcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICAgIHRoaXMubG9hZEltYWdlID0gb3B0aW9ucy5pbWFnZSA/IGRlY29kZVVSSUNvbXBvbmVudChvcHRpb25zLmltYWdlKSA6ICdodHRwczovL3NoLmNmcGhla3MuY29tL3N0b3JhZ2UvZDRiNTFjMDk4MzcwNGYwMWM4NGY0MmIyMzg1MTQ3YmUvQWpRR2lpeE5RNDBQRjUzQVNJSHprb0Z6eU1pSzVaSlVRbGtyYlJZTi5wbmcnXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgZ2V0U2hhcmVEYXRlIChpZCkge1xuICAgICAgICAgICAgdGhpcy5pc0Zyb21TaGFyZSA9IHRydWVcbiAgICAgICAgICAgIHdlcHkuc2hvd0xvYWRpbmcoeyB0aXRsZTogJ+aVsOaNruWKoOi9veS4rScsIG1hc2s6IHRydWUgfSlcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdldEZldGNoKGAvc2hhcmVSZXMvJHtpZH1gLCB7XG4gICAgICAgICAgICAgICAgbm9BamF4OiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29uc3Qgc2hhcmVSZXMgPSByZXMubGVhZnNuYXBSZXMgfHwge31cbiAgICAgICAgICAgIHNoYXJlUmVzLnJlcyA9IEpTT04ucGFyc2Uoc2hhcmVSZXMucmVzKVxuICAgICAgICAgICAgdGhpcy5pbWFnZSA9IHNoYXJlUmVzLmltZ1VybFxuICAgICAgICAgICAgdGhpcy5wYXJzZUxlYWZTbmFwUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoc2hhcmVSZXMpKVxuICAgICAgICB9XG4gICAgfVxuIl19