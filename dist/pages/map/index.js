'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _fetch = require('./../../modules/common/fetch.js');

var _dateFns = require('./../../npm/date-fns/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULT_ICON_PATH = '../../modules/images/flower.png';

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
            mapCtx: '',
            longitude: '',
            latitude: '',
            boundary: '0.05',
            scale: '16',
            showMap: true,
            markers: [{
                iconPath: DEFAULT_ICON_PATH,
                id: 0,
                latitude: 23.099994,
                longitude: 113.324520,
                width: 30,
                height: 30
            }],
            cover: {
                show: false,
                url: DEFAULT_ICON_PATH,
                time: '06-18 20:20',
                name: '非植物'
            },
            listMap: new Map()
        }, _this.methods = {
            start: function start() {
                var that = this;
                _wepy2.default.getSetting({
                    success: function success(res) {
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
            bindupdated: function bindupdated(e) {
                // console.log('bindupdated')
                // this.cover.show = false
            },
            bindtap: function bindtap(e) {
                this.getPositionAndUpdateMarkets(e);
                this.cover.show = false;
            },
            closeCover: function closeCover() {
                this.cover.show = false;
            },
            search: function search(e) {
                _wepy2.default.navigateTo({
                    url: '../publish/detail?name=' + e.currentTarget.dataset.name
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
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
        key: 'goIdentifyPage',
        value: function goIdentifyPage() {
            _wepy2.default.navigateTo({
                url: '../publish/index'
            });
        }
    }, {
        key: 'getPositionAndUpdateMarkets',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
                var _ref3, latitude, longitude, boundary;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.getBoundaryAndCenterLatitudeAdnLongitude();

                            case 2:
                                _ref3 = _context.sent;
                                latitude = _ref3.latitude;
                                longitude = _ref3.longitude;
                                boundary = _ref3.boundary;
                                _context.next = 8;
                                return this.getList({ latitude: latitude, longitude: longitude, boundary: boundary });

                            case 8:
                                this.updateMarkers();

                            case 9:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getPositionAndUpdateMarkets(_x) {
                return _ref2.apply(this, arguments);
            }

            return getPositionAndUpdateMarkets;
        }()
    }, {
        key: 'getRegion',
        value: function getRegion() {
            var _this2 = this;

            return new Promise(function (resolve) {
                _this2.mapCtx.getRegion({
                    success: function success(e) {
                        resolve(e);
                    }
                });
            });
        }
    }, {
        key: 'getScale',
        value: function getScale() {
            var _this3 = this;

            return new Promise(function (resolve) {
                _this3.mapCtx.getScale({
                    success: function success(e) {
                        resolve(e.scale);
                    }
                });
            });
        }
    }, {
        key: 'getLocation',
        value: function getLocation() {
            return new Promise(function (resolve) {
                _wepy2.default.getLocation({
                    type: 'gcj02',
                    success: function success(res) {
                        resolve(res);
                    }
                });
            });
        }
    }, {
        key: 'downloadFile',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url) {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                return _context2.abrupt('return', new Promise(function (resolve) {
                                    _wepy2.default.downloadFile({
                                        url: url,
                                        success: function success(res) {
                                            // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
                                            if (res.statusCode === 200) {
                                                // resolve('../../modules/images/flower.png')
                                                resolve(res.tempFilePath);
                                            }
                                            resolve('');
                                        }
                                    });
                                }));

                            case 1:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function downloadFile(_x2) {
                return _ref4.apply(this, arguments);
            }

            return downloadFile;
        }()
    }, {
        key: 'getList',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var _this4 = this;

                var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                    longitude = _ref6.longitude,
                    latitude = _ref6.latitude,
                    boundary = _ref6.boundary;

                var res;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return (0, _fetch.getFetch)('/mapList?lon=' + (longitude || this.longitude) + '&lat=' + (latitude || this.latitude) + '&boundary=' + (boundary || this.boundary), {
                                    noAjax: true
                                });

                            case 2:
                                res = _context3.sent;

                                this.$apply();
                                res.map(function (item) {
                                    // promiseArr.push(Promise.resolve('../../modules/images/flower.png'))
                                    // promiseArr.push(this.downloadFile(item.imgUrl))
                                    (function (data) {
                                        _this4.downloadFile(data.imgUrl).then(function (url) {
                                            var currentData = _this4.listMap.get(item.id);
                                            if (!(currentData.id && currentData.localImageUrl)) {
                                                data.localImageUrl = url;
                                                _this4.listMap.set(data.id, data);
                                            }
                                        });
                                    })(item);
                                });
                                return _context3.abrupt('return', res.map(function (item, idx) {
                                    // item.localImageUrl = result[idx]
                                    if (!_this4.listMap.get(item.id)) {
                                        _this4.listMap.set(item.id, item);
                                    }
                                }));

                            case 6:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function getList() {
                return _ref5.apply(this, arguments);
            }

            return getList;
        }()
    }, {
        key: 'regionchange',
        value: function () {
            var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e) {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                if (!(e.type === 'end')) {
                                    _context4.next = 4;
                                    break;
                                }

                                _context4.next = 3;
                                return this.getPositionAndUpdateMarkets();

                            case 3:
                                this.cover.show = false;

                            case 4:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function regionchange(_x4) {
                return _ref7.apply(this, arguments);
            }

            return regionchange;
        }()
    }, {
        key: 'markertap',
        value: function markertap(e) {
            var plant = this.listMap.get(e.markerId);
            var res = JSON.parse(plant.res);
            var result = Array.isArray(res.result) ? res.result : res.result ? [res.result] : [];
            this.cover = {
                id: plant.id,
                show: true,
                url: plant.localImageUrl || plant.imgUrl,
                time: (0, _dateFns.format)(plant.created_at, 'MM-DD mm:ss'),
                name: result[0].name
            };
        }
    }, {
        key: 'updateMarkers',
        value: function updateMarkers() {
            this.markers = Array.from(this.listMap.values()).reduce(function (arr, item) {
                if (item.localImageUrl) {
                    arr.push({
                        iconPath: item.localImageUrl,
                        id: item.id,
                        latitude: item.latitude,
                        longitude: item.longitude,
                        width: 30,
                        height: 30
                    });
                }
                return arr;
            }, []);
            this.$apply();
        }
    }, {
        key: 'controltap',
        value: function () {
            var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e) {
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                console.log(e.controlId);

                            case 1:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function controltap(_x5) {
                return _ref8.apply(this, arguments);
            }

            return controltap;
        }()
    }, {
        key: 'getBoundaryAndCenterLatitudeAdnLongitude',
        value: function () {
            var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                var _ref10, southwest, northeast, boundary, latitude, longitude;

                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                _context6.next = 2;
                                return this.getRegion();

                            case 2:
                                _ref10 = _context6.sent;
                                southwest = _ref10.southwest;
                                northeast = _ref10.northeast;
                                boundary = (northeast.longitude - southwest.longitude) / 2;
                                latitude = (northeast.latitude + southwest.latitude) / 2;
                                longitude = (northeast.longitude + southwest.longitude) / 2;
                                return _context6.abrupt('return', { boundary: boundary, latitude: latitude, longitude: longitude });

                            case 9:
                            case 'end':
                                return _context6.stop();
                        }
                    }
                }, _callee6, this);
            }));

            function getBoundaryAndCenterLatitudeAdnLongitude() {
                return _ref9.apply(this, arguments);
            }

            return getBoundaryAndCenterLatitudeAdnLongitude;
        }()
    }, {
        key: 'onLoad',
        value: function () {
            var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                var _this5 = this;

                var locationRes, _ref12, longitude, latitude, boundary;

                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) {
                        switch (_context7.prev = _context7.next) {
                            case 0:
                                // 使用 wx.createMapContext 获取 map 上下文
                                this.mapCtx = _wepy2.default.createMapContext('map');
                                _context7.next = 3;
                                return this.getLocation();

                            case 3:
                                locationRes = _context7.sent;

                                this.longitude = locationRes.longitude;
                                this.latitude = locationRes.latitude;
                                this.updateMarkers();
                                _context7.next = 9;
                                return this.getBoundaryAndCenterLatitudeAdnLongitude();

                            case 9:
                                _ref12 = _context7.sent;
                                longitude = _ref12.longitude;
                                latitude = _ref12.latitude;
                                boundary = _ref12.boundary;
                                _context7.next = 15;
                                return this.getList({ longitude: longitude, latitude: latitude, boundary: boundary || this.boundary });

                            case 15:
                                this.updateMarkers();
                                this.$apply();
                                // 3秒更新markers
                                setInterval(function () {
                                    _this5.updateMarkers();
                                }, 3000);

                            case 18:
                            case 'end':
                                return _context7.stop();
                        }
                    }
                }, _callee7, this);
            }));

            function onLoad() {
                return _ref11.apply(this, arguments);
            }

            return onLoad;
        }()
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/map/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfSUNPTl9QQVRIIiwiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsIm1hcEN0eCIsImxvbmdpdHVkZSIsImxhdGl0dWRlIiwiYm91bmRhcnkiLCJzY2FsZSIsInNob3dNYXAiLCJtYXJrZXJzIiwiaWNvblBhdGgiLCJpZCIsIndpZHRoIiwiaGVpZ2h0IiwiY292ZXIiLCJzaG93IiwidXJsIiwidGltZSIsIm5hbWUiLCJsaXN0TWFwIiwiTWFwIiwibWV0aG9kcyIsInN0YXJ0IiwidGhhdCIsIndlcHkiLCJnZXRTZXR0aW5nIiwic3VjY2VzcyIsInJlcyIsImF1dGhTZXR0aW5nIiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50IiwiY2FuY2VsIiwiY29uc29sZSIsImluZm8iLCJjb25maXJtIiwic2hvd0dldExvY2F0aW9uIiwiZ29JZGVudGlmeVBhZ2UiLCJiaW5kdXBkYXRlZCIsImUiLCJiaW5kdGFwIiwiZ2V0UG9zaXRpb25BbmRVcGRhdGVNYXJrZXRzIiwiY2xvc2VDb3ZlciIsInNlYXJjaCIsIm5hdmlnYXRlVG8iLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIm9wZW5TZXR0aW5nIiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwiZ2V0Qm91bmRhcnlBbmRDZW50ZXJMYXRpdHVkZUFkbkxvbmdpdHVkZSIsImdldExpc3QiLCJ1cGRhdGVNYXJrZXJzIiwiUHJvbWlzZSIsImdldFJlZ2lvbiIsInJlc29sdmUiLCJnZXRTY2FsZSIsImdldExvY2F0aW9uIiwidHlwZSIsImRvd25sb2FkRmlsZSIsInN0YXR1c0NvZGUiLCJ0ZW1wRmlsZVBhdGgiLCJub0FqYXgiLCIkYXBwbHkiLCJtYXAiLCJpbWdVcmwiLCJ0aGVuIiwiY3VycmVudERhdGEiLCJnZXQiLCJpdGVtIiwibG9jYWxJbWFnZVVybCIsInNldCIsImlkeCIsInBsYW50IiwibWFya2VySWQiLCJKU09OIiwicGFyc2UiLCJyZXN1bHQiLCJBcnJheSIsImlzQXJyYXkiLCJjcmVhdGVkX2F0IiwiZnJvbSIsInZhbHVlcyIsInJlZHVjZSIsImFyciIsInB1c2giLCJsb2ciLCJjb250cm9sSWQiLCJzb3V0aHdlc3QiLCJub3J0aGVhc3QiLCJjcmVhdGVNYXBDb250ZXh0IiwibG9jYXRpb25SZXMiLCJzZXRJbnRlcnZhbCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLG9CQUFvQixpQ0FBMUI7O0lBQ3FCQyxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQUdUQyxJLEdBQU87QUFDSEMsb0JBQVEsRUFETDtBQUVIQyx1QkFBVyxFQUZSO0FBR0hDLHNCQUFVLEVBSFA7QUFJSEMsc0JBQVUsTUFKUDtBQUtIQyxtQkFBTyxJQUxKO0FBTUhDLHFCQUFTLElBTk47QUFPSEMscUJBQVMsQ0FBQztBQUNOQywwQkFBVVosaUJBREo7QUFFTmEsb0JBQUksQ0FGRTtBQUdOTiwwQkFBVSxTQUhKO0FBSU5ELDJCQUFXLFVBSkw7QUFLTlEsdUJBQU8sRUFMRDtBQU1OQyx3QkFBUTtBQU5GLGFBQUQsQ0FQTjtBQWVIQyxtQkFBTztBQUNIQyxzQkFBTSxLQURIO0FBRUhDLHFCQUFLbEIsaUJBRkY7QUFHSG1CLHNCQUFNLGFBSEg7QUFJSEMsc0JBQU07QUFKSCxhQWZKO0FBcUJIQyxxQkFBUyxJQUFJQyxHQUFKO0FBckJOLFMsUUF1QlBDLE8sR0FBVTtBQUNOQyxpQkFETSxtQkFDRztBQUNMLG9CQUFNQyxPQUFPLElBQWI7QUFDQUMsK0JBQUtDLFVBQUwsQ0FBZ0I7QUFDWkMsMkJBRFksbUJBQ0hDLEdBREcsRUFDRTtBQUNWLDRCQUFJLENBQUNBLElBQUlDLFdBQUosQ0FBZ0Isb0JBQWhCLENBQUwsRUFBNEM7QUFDeENKLDJDQUFLSyxTQUFMLENBQWU7QUFDWEMsdUNBQU8sVUFESTtBQUVYQyx5Q0FB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O0FBQ0EscUNBQUtnRCxhQUFMOzt1Q0FDZ0QsS0FBS0Ysd0NBQUwsRTs7OztBQUF4Qy9DLHlDLFVBQUFBLFM7QUFBV0Msd0MsVUFBQUEsUTtBQUFVQyx3QyxVQUFBQSxROzt1Q0FDdkIsS0FBSzhDLE9BQUwsQ0FBYSxFQUFFaEQsV0FBV0EsU0FBYixFQUF3QkMsVUFBVUEsUUFBbEMsRUFBNENDLFVBQVVBLFlBQVksS0FBS0EsUUFBdkUsRUFBYixDOzs7QUFDTixxQ0FBSytDLGFBQUw7QUFDQSxxQ0FBS1csTUFBTDtBQUNBO0FBQ0E2Qiw0Q0FBWSxZQUFNO0FBQ2QsMkNBQUt4QyxhQUFMO0FBQ0gsaUNBRkQsRUFFRyxJQUZIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBak8yQjdCLGVBQUtzRSxJOztrQkFBbkIvRixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgeyBnZXRGZXRjaCB9IGZyb20gJ0AvbW9kdWxlcy9jb21tb24vZmV0Y2gnXG4gICAgaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnXG5cbiAgICBjb25zdCBERUZBVUxUX0lDT05fUEFUSCA9ICcuLi8uLi9tb2R1bGVzL2ltYWdlcy9mbG93ZXIucG5nJ1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iKseeToydcbiAgICAgICAgfVxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgbWFwQ3R4OiAnJyxcbiAgICAgICAgICAgIGxvbmdpdHVkZTogJycsXG4gICAgICAgICAgICBsYXRpdHVkZTogJycsXG4gICAgICAgICAgICBib3VuZGFyeTogJzAuMDUnLFxuICAgICAgICAgICAgc2NhbGU6ICcxNicsXG4gICAgICAgICAgICBzaG93TWFwOiB0cnVlLFxuICAgICAgICAgICAgbWFya2VyczogW3tcbiAgICAgICAgICAgICAgICBpY29uUGF0aDogREVGQVVMVF9JQ09OX1BBVEgsXG4gICAgICAgICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgICAgICAgbGF0aXR1ZGU6IDIzLjA5OTk5NCxcbiAgICAgICAgICAgICAgICBsb25naXR1ZGU6IDExMy4zMjQ1MjAsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgICAgICAgICAgIGhlaWdodDogMzBcbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgY292ZXI6IHtcbiAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgICB1cmw6IERFRkFVTFRfSUNPTl9QQVRILFxuICAgICAgICAgICAgICAgIHRpbWU6ICcwNi0xOCAyMDoyMCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ+mdnuakjeeJqSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaXN0TWFwOiBuZXcgTWFwKClcbiAgICAgICAgfVxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgc3RhcnQgKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzXG4gICAgICAgICAgICAgICAgd2VweS5nZXRTZXR0aW5nKHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckxvY2F0aW9uJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5piv5ZCm5o6I5p2D5b2T5YmN5L2N572uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+mcgOimgeiOt+WPluaCqOeahOWcsOeQhuS9jee9ru+8jOivt+ehruiupOaOiOadg++8jOWQpuWImeWcsOWbvuWKn+iDveWwhuaXoOazleS9v+eUqCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jYW5jZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oJ+aOiOadg+Wksei0pScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5zaG93R2V0TG9jYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuZ29JZGVudGlmeVBhZ2UoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kdXBkYXRlZCAoZSkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdiaW5kdXBkYXRlZCcpXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jb3Zlci5zaG93ID0gZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kdGFwIChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRQb3NpdGlvbkFuZFVwZGF0ZU1hcmtldHMoZSlcbiAgICAgICAgICAgICAgICB0aGlzLmNvdmVyLnNob3cgPSBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsb3NlQ292ZXIgKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY292ZXIuc2hvdyA9IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VhcmNoIChlKSB7XG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgLi4vcHVibGlzaC9kZXRhaWw/bmFtZT0ke2UuY3VycmVudFRhcmdldC5kYXRhc2V0Lm5hbWV9YFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2hvd0dldExvY2F0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzXG4gICAgICAgICAgICB3ZXB5Lm9wZW5TZXR0aW5nKHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5hdXRoU2V0dGluZ1snc2NvcGUudXNlckxvY2F0aW9uJ10gPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aOiOadg+aIkOWKnycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5YaN5qyh5o6I5p2D77yM6LCD55SoZ2V0TG9jYXRpb25055qEQVBJXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmdvSWRlbnRpZnlQYWdlKHRoYXQpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmjojmnYPlpLHotKUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwMFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBnb0lkZW50aWZ5UGFnZSAoKSB7XG4gICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgIHVybDogYC4uL3B1Ymxpc2gvaW5kZXhgXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGFzeW5jIGdldFBvc2l0aW9uQW5kVXBkYXRlTWFya2V0cyAoZSkge1xuICAgICAgICAgICAgLy8gNS0xOCBzY2FsZee8qeaUvuiMg+WbtFxuICAgICAgICAgICAgY29uc3QgeyBsYXRpdHVkZSwgbG9uZ2l0dWRlLCBib3VuZGFyeSB9ID0gYXdhaXQgdGhpcy5nZXRCb3VuZGFyeUFuZENlbnRlckxhdGl0dWRlQWRuTG9uZ2l0dWRlKClcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZ2V0TGlzdCh7IGxhdGl0dWRlLCBsb25naXR1ZGUsIGJvdW5kYXJ5IH0pXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU1hcmtlcnMoKVxuICAgICAgICB9XG4gICAgICAgIGdldFJlZ2lvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXBDdHguZ2V0UmVnaW9uKHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgZ2V0U2NhbGUgKCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubWFwQ3R4LmdldFNjYWxlKHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShlLnNjYWxlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgZ2V0TG9jYXRpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgd2VweS5nZXRMb2NhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdnY2owMicsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBhc3luYyBkb3dubG9hZEZpbGUgKHVybCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHdlcHkuZG93bmxvYWRGaWxlKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWPquimgeacjeWKoeWZqOacieWTjeW6lOaVsOaNru+8jOWwseS8muaKiuWTjeW6lOWGheWuueWGmeWFpeaWh+S7tuW5tui/m+WFpSBzdWNjZXNzIOWbnuiwg++8jOS4muWKoemcgOimgeiHquihjOWIpOaWreaYr+WQpuS4i+i9veWIsOS6huaDs+imgeeahOWGheWuuVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXNDb2RlID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZXNvbHZlKCcuLi8uLi9tb2R1bGVzL2ltYWdlcy9mbG93ZXIucG5nJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcy50ZW1wRmlsZVBhdGgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCcnKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgZ2V0TGlzdCAoeyBsb25naXR1ZGUsIGxhdGl0dWRlLCBib3VuZGFyeSB9ID0ge30pIHtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdldEZldGNoKGAvbWFwTGlzdD9sb249JHtsb25naXR1ZGUgfHwgdGhpcy5sb25naXR1ZGV9JmxhdD0ke2xhdGl0dWRlIHx8IHRoaXMubGF0aXR1ZGV9JmJvdW5kYXJ5PSR7Ym91bmRhcnkgfHwgdGhpcy5ib3VuZGFyeX1gLCB7XG4gICAgICAgICAgICAgICAgbm9BamF4OiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgICAgcmVzLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAvLyBwcm9taXNlQXJyLnB1c2goUHJvbWlzZS5yZXNvbHZlKCcuLi8uLi9tb2R1bGVzL2ltYWdlcy9mbG93ZXIucG5nJykpXG4gICAgICAgICAgICAgICAgLy8gcHJvbWlzZUFyci5wdXNoKHRoaXMuZG93bmxvYWRGaWxlKGl0ZW0uaW1nVXJsKSlcbiAgICAgICAgICAgICAgICAoKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb3dubG9hZEZpbGUoZGF0YS5pbWdVcmwpLnRoZW4odXJsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnREYXRhID0gdGhpcy5saXN0TWFwLmdldChpdGVtLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoY3VycmVudERhdGEuaWQgJiYgY3VycmVudERhdGEubG9jYWxJbWFnZVVybCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmxvY2FsSW1hZ2VVcmwgPSB1cmxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RNYXAuc2V0KGRhdGEuaWQsIGRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSkoaXRlbSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4gcmVzLm1hcCgoaXRlbSwgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gaXRlbS5sb2NhbEltYWdlVXJsID0gcmVzdWx0W2lkeF1cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMubGlzdE1hcC5nZXQoaXRlbS5pZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0TWFwLnNldChpdGVtLmlkLCBpdGVtKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgcmVnaW9uY2hhbmdlKGUpIHtcbiAgICAgICAgICAgIGlmIChlLnR5cGUgPT09ICdlbmQnKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5nZXRQb3NpdGlvbkFuZFVwZGF0ZU1hcmtldHMoKVxuICAgICAgICAgICAgICAgIHRoaXMuY292ZXIuc2hvdyA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbWFya2VydGFwKGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHBsYW50ID0gdGhpcy5saXN0TWFwLmdldChlLm1hcmtlcklkKVxuICAgICAgICAgICAgY29uc3QgcmVzID0gSlNPTi5wYXJzZShwbGFudC5yZXMpXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBBcnJheS5pc0FycmF5KHJlcy5yZXN1bHQpID8gcmVzLnJlc3VsdCA6IHJlcy5yZXN1bHQgPyBbcmVzLnJlc3VsdF0gOiBbXVxuICAgICAgICAgICAgdGhpcy5jb3ZlciA9IHtcbiAgICAgICAgICAgICAgICBpZDogcGxhbnQuaWQsXG4gICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICB1cmw6IHBsYW50LmxvY2FsSW1hZ2VVcmwgfHwgcGxhbnQuaW1nVXJsLFxuICAgICAgICAgICAgICAgIHRpbWU6IGZvcm1hdChwbGFudC5jcmVhdGVkX2F0LCAnTU0tREQgbW06c3MnKSxcbiAgICAgICAgICAgICAgICBuYW1lOiByZXN1bHRbMF0ubmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZU1hcmtlcnMgKCkge1xuICAgICAgICAgICAgdGhpcy5tYXJrZXJzID0gQXJyYXkuZnJvbSh0aGlzLmxpc3RNYXAudmFsdWVzKCkpLnJlZHVjZSgoYXJyLCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0ubG9jYWxJbWFnZVVybCkge1xuICAgICAgICAgICAgICAgICAgICBhcnIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uUGF0aDogaXRlbS5sb2NhbEltYWdlVXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXRpdHVkZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvbmdpdHVkZTogaXRlbS5sb25naXR1ZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBhcnJcbiAgICAgICAgICAgIH0sIFtdKVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9XG4gICAgICAgIGFzeW5jIGNvbnRyb2x0YXAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZS5jb250cm9sSWQpXG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgZ2V0Qm91bmRhcnlBbmRDZW50ZXJMYXRpdHVkZUFkbkxvbmdpdHVkZSAoKSB7XG4gICAgICAgICAgICBjb25zdCB7IHNvdXRod2VzdCwgbm9ydGhlYXN0IH0gPSBhd2FpdCB0aGlzLmdldFJlZ2lvbigpXG4gICAgICAgICAgICBjb25zdCBib3VuZGFyeSA9IChub3J0aGVhc3QubG9uZ2l0dWRlIC0gc291dGh3ZXN0LmxvbmdpdHVkZSkgLyAyXG4gICAgICAgICAgICBjb25zdCBsYXRpdHVkZSA9IChub3J0aGVhc3QubGF0aXR1ZGUgKyBzb3V0aHdlc3QubGF0aXR1ZGUpIC8gMlxuICAgICAgICAgICAgY29uc3QgbG9uZ2l0dWRlID0gKG5vcnRoZWFzdC5sb25naXR1ZGUgKyBzb3V0aHdlc3QubG9uZ2l0dWRlKSAvIDJcbiAgICAgICAgICAgIHJldHVybiB7IGJvdW5kYXJ5LCBsYXRpdHVkZSwgbG9uZ2l0dWRlIH1cbiAgICAgICAgfVxuICAgICAgICBhc3luYyBvbkxvYWQgKCkge1xuICAgICAgICAgICAgLy8g5L2/55SoIHd4LmNyZWF0ZU1hcENvbnRleHQg6I635Y+WIG1hcCDkuIrkuIvmlodcbiAgICAgICAgICAgIHRoaXMubWFwQ3R4ID0gd2VweS5jcmVhdGVNYXBDb250ZXh0KCdtYXAnKVxuICAgICAgICAgICAgY29uc3QgbG9jYXRpb25SZXMgPSBhd2FpdCB0aGlzLmdldExvY2F0aW9uKClcbiAgICAgICAgICAgIHRoaXMubG9uZ2l0dWRlID0gbG9jYXRpb25SZXMubG9uZ2l0dWRlXG4gICAgICAgICAgICB0aGlzLmxhdGl0dWRlID0gbG9jYXRpb25SZXMubGF0aXR1ZGVcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTWFya2VycygpXG4gICAgICAgICAgICBjb25zdCB7IGxvbmdpdHVkZSwgbGF0aXR1ZGUsIGJvdW5kYXJ5IH0gPSBhd2FpdCB0aGlzLmdldEJvdW5kYXJ5QW5kQ2VudGVyTGF0aXR1ZGVBZG5Mb25naXR1ZGUoKVxuICAgICAgICAgICAgYXdhaXQgdGhpcy5nZXRMaXN0KHsgbG9uZ2l0dWRlOiBsb25naXR1ZGUsIGxhdGl0dWRlOiBsYXRpdHVkZSwgYm91bmRhcnk6IGJvdW5kYXJ5IHx8IHRoaXMuYm91bmRhcnkgfSlcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTWFya2VycygpXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgICAvLyAz56eS5pu05pawbWFya2Vyc1xuICAgICAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTWFya2VycygpXG4gICAgICAgICAgICB9LCAzMDAwKVxuICAgICAgICB9XG4gICAgfVxuIl19