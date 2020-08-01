'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

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
            navigationBarTitleText: '发表朋友圈'
        }, _this.data = {
            tips: {
                show: false,
                text: ''
            },
            content: '',
            files: [],
            images: []
        }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'chooseMomentImage',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
                var _this2 = this;

                var imageFilePath;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!(this.files.length >= 9)) {
                                    _context.next = 4;
                                    break;
                                }

                                this.tips.text = '最大上传9张图片';
                                this.showTopTips();
                                return _context.abrupt('return');

                            case 4:
                                _context.next = 6;
                                return (0, _fetch.chooseImage)().then(function (res) {
                                    return res.tempFilePaths[0];
                                });

                            case 6:
                                imageFilePath = _context.sent;

                                (0, _fetch.uploadFile)('/circles/img/upload', imageFilePath).then(function (imageUrl) {
                                    _this2.files = _this2.files.concat(imageFilePath);
                                    _this2.images = _this2.images.concat(imageUrl);
                                    _this2.$apply();
                                });

                            case 8:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function chooseMomentImage(_x) {
                return _ref2.apply(this, arguments);
            }

            return chooseMomentImage;
        }()
    }, {
        key: 'bindCommentInput',
        value: function bindCommentInput(e) {
            this.content = e.detail.value;
        }
    }, {
        key: 'previewImage',
        value: function previewImage(e) {
            _wepy2.default.previewImage({
                current: e.currentTarget.id, // 当前显示图片的http链接
                urls: this.files // 需要预览的图片http链接列表
            });
        }
    }, {
        key: 'confirmMoment',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var self;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                self = this;

                                if (!this.validateData()) {
                                    _context2.next = 4;
                                    break;
                                }

                                _context2.next = 4;
                                return (0, _fetch.postFetch)('/circles', {
                                    data: {
                                        content: this.content,
                                        circle_imgs: this.images
                                    }
                                }).then(function () {
                                    _wepy2.default.showToast({
                                        title: '发表成功',
                                        icon: 'success',
                                        duration: 1000
                                    });
                                    self.resetData();
                                });

                            case 4:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function confirmMoment() {
                return _ref3.apply(this, arguments);
            }

            return confirmMoment;
        }()
    }, {
        key: 'resetData',
        value: function resetData() {
            this.files = [];
            this.content = '';
            this.images = [];
            this.$apply();
        }
    }, {
        key: 'showTopTips',
        value: function showTopTips() {
            var _this3 = this;

            this.tips.show = true;
            setTimeout(function () {
                _this3.tips.show = false;
                _this3.$apply();
            }, 1000);
        }
    }, {
        key: 'validateData',
        value: function validateData() {
            if (this.content === '' && this.images.length === 0) {
                this.tips.text = '请上传图片和正文';
                this.showTopTips();
                return false;
            }
            return true;
        }
    }, {
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return Index;
}(_wepy2.default.page);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInRpcHMiLCJzaG93IiwidGV4dCIsImNvbnRlbnQiLCJmaWxlcyIsImltYWdlcyIsIm1ldGhvZHMiLCJlIiwibGVuZ3RoIiwic2hvd1RvcFRpcHMiLCJ0aGVuIiwicmVzIiwidGVtcEZpbGVQYXRocyIsImltYWdlRmlsZVBhdGgiLCJjb25jYXQiLCJpbWFnZVVybCIsIiRhcHBseSIsImRldGFpbCIsInZhbHVlIiwid2VweSIsInByZXZpZXdJbWFnZSIsImN1cnJlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJ1cmxzIiwic2VsZiIsInZhbGlkYXRlRGF0YSIsImNpcmNsZV9pbWdzIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJyZXNldERhdGEiLCJzZXRUaW1lb3V0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQUlUQyxJLEdBQU87QUFDSEMsa0JBQU07QUFDRkMsc0JBQU0sS0FESjtBQUVGQyxzQkFBTTtBQUZKLGFBREg7QUFLSEMscUJBQVMsRUFMTjtBQU1IQyxtQkFBTyxFQU5KO0FBT0hDLG9CQUFRO0FBUEwsUyxRQVVQQyxPLEdBQVUsRTs7Ozs7O2lHQUVjQyxDOzs7Ozs7OztzQ0FDaEIsS0FBS0gsS0FBTCxDQUFXSSxNQUFYLElBQXFCLEM7Ozs7O0FBQ3JCLHFDQUFLUixJQUFMLENBQVVFLElBQVYsR0FBaUIsVUFBakI7QUFDQSxxQ0FBS08sV0FBTDs7Ozs7dUNBR3dCLDBCQUFjQyxJQUFkLENBQW1CLGVBQU87QUFDbEQsMkNBQU9DLElBQUlDLGFBQUosQ0FBa0IsQ0FBbEIsQ0FBUDtBQUNILGlDQUYyQixDOzs7QUFBdEJDLDZDOztBQUdOLHVEQUFXLHFCQUFYLEVBQWtDQSxhQUFsQyxFQUFpREgsSUFBakQsQ0FBc0Qsb0JBQVk7QUFDOUQsMkNBQUtOLEtBQUwsR0FBYSxPQUFLQSxLQUFMLENBQVdVLE1BQVgsQ0FBa0JELGFBQWxCLENBQWI7QUFDQSwyQ0FBS1IsTUFBTCxHQUFjLE9BQUtBLE1BQUwsQ0FBWVMsTUFBWixDQUFtQkMsUUFBbkIsQ0FBZDtBQUNBLDJDQUFLQyxNQUFMO0FBQ0gsaUNBSkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5Q0FNY1QsQyxFQUFHO0FBQ2pCLGlCQUFLSixPQUFMLEdBQWVJLEVBQUVVLE1BQUYsQ0FBU0MsS0FBeEI7QUFDSDs7O3FDQUVZWCxDLEVBQUc7QUFDWlksMkJBQUtDLFlBQUwsQ0FBa0I7QUFDZEMseUJBQVNkLEVBQUVlLGFBQUYsQ0FBZ0JDLEVBRFgsRUFDZTtBQUM3QkMsc0JBQU0sS0FBS3BCLEtBRkcsQ0FFRztBQUZILGFBQWxCO0FBSUg7Ozs7Ozs7Ozs7QUFHU3FCLG9DLEdBQU8sSTs7cUNBQ1QsS0FBS0MsWUFBTCxFOzs7Ozs7dUNBQ00sc0JBQVUsVUFBVixFQUFzQjtBQUN4QjNCLDBDQUFNO0FBQ0ZJLGlEQUFTLEtBQUtBLE9BRFo7QUFFRndCLHFEQUFhLEtBQUt0QjtBQUZoQjtBQURrQixpQ0FBdEIsRUFLSEssSUFMRyxDQUtFLFlBQU07QUFDVlMsbURBQUtTLFNBQUwsQ0FBZTtBQUNYQywrQ0FBTyxNQURJO0FBRVhDLDhDQUFNLFNBRks7QUFHWEMsa0RBQVU7QUFIQyxxQ0FBZjtBQUtBTix5Q0FBS08sU0FBTDtBQUNILGlDQVpLLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQ0FnQkQ7QUFDVCxpQkFBSzVCLEtBQUwsR0FBYSxFQUFiO0FBQ0EsaUJBQUtELE9BQUwsR0FBZSxFQUFmO0FBQ0EsaUJBQUtFLE1BQUwsR0FBYyxFQUFkO0FBQ0EsaUJBQUtXLE1BQUw7QUFDSDs7O3NDQUNhO0FBQUE7O0FBQ1YsaUJBQUtoQixJQUFMLENBQVVDLElBQVYsR0FBaUIsSUFBakI7QUFDQWdDLHVCQUFXLFlBQU07QUFDYix1QkFBS2pDLElBQUwsQ0FBVUMsSUFBVixHQUFpQixLQUFqQjtBQUNBLHVCQUFLZSxNQUFMO0FBQ0gsYUFIRCxFQUdHLElBSEg7QUFJSDs7O3VDQUNlO0FBQ1osZ0JBQUksS0FBS2IsT0FBTCxLQUFpQixFQUFqQixJQUF1QixLQUFLRSxNQUFMLENBQVlHLE1BQVosS0FBdUIsQ0FBbEQsRUFBcUQ7QUFDakQscUJBQUtSLElBQUwsQ0FBVUUsSUFBVixHQUFpQixVQUFqQjtBQUNBLHFCQUFLTyxXQUFMO0FBQ0EsdUJBQU8sS0FBUDtBQUNIO0FBQ0QsbUJBQU8sSUFBUDtBQUNIOzs7aUNBQ1EsQ0FDUjs7OztFQXBGOEJVLGVBQUtlLEk7O2tCQUFuQnRDLEsiLCJmaWxlIjoicG9zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IHsgdXBsb2FkRmlsZSwgY2hvb3NlSW1hZ2UsIHBvc3RGZXRjaCB9IGZyb20gJ0AvbW9kdWxlcy9jb21tb24vZmV0Y2gnXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflj5HooajmnIvlj4vlnIgnXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgdGlwczoge1xuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHRleHQ6ICcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29udGVudDogJycsXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICBpbWFnZXM6IFtdXG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICB9XG4gICAgICAgIGFzeW5jIGNob29zZU1vbWVudEltYWdlKGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZpbGVzLmxlbmd0aCA+PSA5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aXBzLnRleHQgPSAn5pyA5aSn5LiK5LygOeW8oOWbvueJhydcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dUb3BUaXBzKClcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGltYWdlRmlsZVBhdGggPSBhd2FpdCBjaG9vc2VJbWFnZSgpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnRlbXBGaWxlUGF0aHNbMF1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB1cGxvYWRGaWxlKCcvY2lyY2xlcy9pbWcvdXBsb2FkJywgaW1hZ2VGaWxlUGF0aCkudGhlbihpbWFnZVVybCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWxlcyA9IHRoaXMuZmlsZXMuY29uY2F0KGltYWdlRmlsZVBhdGgpXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZXMgPSB0aGlzLmltYWdlcy5jb25jYXQoaW1hZ2VVcmwpXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBiaW5kQ29tbWVudElucHV0IChlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQgPSBlLmRldGFpbC52YWx1ZVxuICAgICAgICB9XG5cbiAgICAgICAgcHJldmlld0ltYWdlKGUpIHtcbiAgICAgICAgICAgIHdlcHkucHJldmlld0ltYWdlKHtcbiAgICAgICAgICAgICAgICBjdXJyZW50OiBlLmN1cnJlbnRUYXJnZXQuaWQsIC8vIOW9k+WJjeaYvuekuuWbvueJh+eahGh0dHDpk77mjqVcbiAgICAgICAgICAgICAgICB1cmxzOiB0aGlzLmZpbGVzIC8vIOmcgOimgemihOiniOeahOWbvueJh2h0dHDpk77mjqXliJfooahcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBhc3luYyBjb25maXJtTW9tZW50ICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgICAgICAgICBpZiAodGhpcy52YWxpZGF0ZURhdGEoKSkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHBvc3RGZXRjaCgnL2NpcmNsZXMnLCB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuY29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNpcmNsZV9pbWdzOiB0aGlzLmltYWdlc1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5Y+R6KGo5oiQ5YqfJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHNlbGYucmVzZXREYXRhKClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzZXREYXRhICgpIHtcbiAgICAgICAgICAgIHRoaXMuZmlsZXMgPSBbXVxuICAgICAgICAgICAgdGhpcy5jb250ZW50ID0gJydcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VzID0gW11cbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgfVxuICAgICAgICBzaG93VG9wVGlwcygpIHtcbiAgICAgICAgICAgIHRoaXMudGlwcy5zaG93ID0gdHJ1ZVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy50aXBzLnNob3cgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICAgIH0sIDEwMDApXG4gICAgICAgIH1cbiAgICAgICAgdmFsaWRhdGVEYXRhICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRlbnQgPT09ICcnICYmIHRoaXMuaW1hZ2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGlwcy50ZXh0ID0gJ+ivt+S4iuS8oOWbvueJh+WSjOato+aWhydcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dUb3BUaXBzKClcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgb25Mb2FkKCkge1xuICAgICAgICB9XG4gICAgfVxuIl19