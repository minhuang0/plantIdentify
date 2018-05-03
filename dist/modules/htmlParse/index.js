'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wxParse = require('./../../libs/wxParse/wxParse.js');

var _wxParse2 = _interopRequireDefault(_wxParse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HTMLParser = function (_wepy$component) {
    _inherits(HTMLParser, _wepy$component);

    function HTMLParser() {
        var _ref;

        var _temp, _this, _ret;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        _classCallCheck(this, HTMLParser);

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HTMLParser.__proto__ || Object.getPrototypeOf(HTMLParser)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            parserName: {
                type: String,
                default: 'htmlParserName'
            },
            parserContent: {
                type: String,
                default: "<p style='font-size: 32rpx; padding: 30rpx 0; text-align: center;'>没有任何内容</p>"
            },
            parserType: {
                type: String,
                default: 'html'
            },
            parserPadding: {
                type: Number,
                default: 0
            }
        }, _this.data = {
            htmlParserTpl: {}
        }, _this.events = {
            'htmlParser-broadcast': function htmlParserBroadcast($event) {}
        }, _this.methods = {
            htmlParserNotice: function htmlParserNotice() {
                this.htmlParse();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(HTMLParser, [{
        key: 'onLoad',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                this.htmlParse();

                            case 1:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function onLoad() {
                return _ref2.apply(this, arguments);
            }

            return onLoad;
        }()

        /**
        wxParseImgLoad(image) {
            let imgInfo = image.detail
        }
        **/

    }, {
        key: 'htmlParse',
        value: function htmlParse() {
            var _this2 = this;

            /**
                * WxParse.wxParse(bindName , type, data, target,imagePadding)
                * 1.bindName绑定的数据名(必填)
                * 2.type可以为html或者md(必填)
                * 3.data为传入的具体数据(必填)
                * 4.target为Page对象,一般为this(必填)
                * 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
                */
            try {
                _wxParse2.default.wxParse(this.parserName, this.parserType, this.parserContent || this.props.parserContent.default, this, this.parserPadding);
                setTimeout(function () {
                    _this2.htmlParserTpl = _this2.data[_this2.parserName];
                }, 5000);
            } catch (e) {
                console.warn('kinerHtmlParser:', '没有任何内容需要转换', e);
            }
        }
    }]);

    return HTMLParser;
}(_wepy2.default.component);

exports.default = HTMLParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkhUTUxQYXJzZXIiLCJwcm9wcyIsInBhcnNlck5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwiZGVmYXVsdCIsInBhcnNlckNvbnRlbnQiLCJwYXJzZXJUeXBlIiwicGFyc2VyUGFkZGluZyIsIk51bWJlciIsImRhdGEiLCJodG1sUGFyc2VyVHBsIiwiZXZlbnRzIiwiJGV2ZW50IiwibWV0aG9kcyIsImh0bWxQYXJzZXJOb3RpY2UiLCJodG1sUGFyc2UiLCJ3eFBhcnNlIiwic2V0VGltZW91dCIsImUiLCJjb25zb2xlIiwid2FybiIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFU7Ozs7Ozs7Ozs7Ozs7O2tNQUNqQkMsSyxHQUFRO0FBQ0pDLHdCQUFZO0FBQ1JDLHNCQUFNQyxNQURFO0FBRVJDLHlCQUFTO0FBRkQsYUFEUjtBQUtKQywyQkFBZTtBQUNYSCxzQkFBTUMsTUFESztBQUVYQyx5QkFBUztBQUZFLGFBTFg7QUFTSkUsd0JBQVk7QUFDUkosc0JBQU1DLE1BREU7QUFFUkMseUJBQVM7QUFGRCxhQVRSO0FBYUpHLDJCQUFlO0FBQ1hMLHNCQUFNTSxNQURLO0FBRVhKLHlCQUFTO0FBRkU7QUFiWCxTLFFBbUJSSyxJLEdBQU87QUFDSEMsMkJBQWU7QUFEWixTLFFBSVBDLE0sR0FBUztBQUNMLG9DQUF3Qiw2QkFBQ0MsTUFBRCxFQUFxQixDQUFHO0FBRDNDLFMsUUFHVEMsTyxHQUFVO0FBQ05DLDRCQURNLDhCQUNhO0FBQ2YscUJBQUtDLFNBQUw7QUFDSDtBQUhLLFM7Ozs7Ozs7Ozs7O0FBTU4scUNBQUtBLFNBQUw7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0o7Ozs7Ozs7O29DQU1ZO0FBQUE7O0FBQ1I7Ozs7Ozs7O0FBUUEsZ0JBQUk7QUFDQSxrQ0FBUUMsT0FBUixDQUNJLEtBQUtmLFVBRFQsRUFFSSxLQUFLSyxVQUZULEVBR0ksS0FBS0QsYUFBTCxJQUFzQixLQUFLTCxLQUFMLENBQVdLLGFBQVgsQ0FBeUJELE9BSG5ELEVBSUksSUFKSixFQUtJLEtBQUtHLGFBTFQ7QUFPQVUsMkJBQVcsWUFBTTtBQUNiLDJCQUFLUCxhQUFMLEdBQXFCLE9BQUtELElBQUwsQ0FBVSxPQUFLUixVQUFmLENBQXJCO0FBQ0gsaUJBRkQsRUFFRyxJQUZIO0FBR0gsYUFYRCxDQVdFLE9BQU9pQixDQUFQLEVBQVU7QUFDUkMsd0JBQVFDLElBQVIsQ0FBYSxrQkFBYixFQUFpQyxZQUFqQyxFQUErQ0YsQ0FBL0M7QUFDSDtBQUNKOzs7O0VBakVtQyxlQUFLRyxTOztrQkFBeEJ0QixVIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgV3hQYXJzZSBmcm9tICcuLi8uLi9saWJzL3d4UGFyc2Uvd3hQYXJzZSdcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEhUTUxQYXJzZXIgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgcGFyc2VyTmFtZToge1xuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnaHRtbFBhcnNlck5hbWUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFyc2VyQ29udGVudDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBcIjxwIHN0eWxlPSdmb250LXNpemU6IDMycnB4OyBwYWRkaW5nOiAzMHJweCAwOyB0ZXh0LWFsaWduOiBjZW50ZXI7Jz7msqHmnInku7vkvZXlhoXlrrk8L3A+XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXJzZXJUeXBlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICdodG1sJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhcnNlclBhZGRpbmc6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogMFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGh0bWxQYXJzZXJUcGw6IHt9XG4gICAgICAgIH1cblxuICAgICAgICBldmVudHMgPSB7XG4gICAgICAgICAgICAnaHRtbFBhcnNlci1icm9hZGNhc3QnOiAoJGV2ZW50LCAuLi5hcmdzKSA9PiB7IH1cbiAgICAgICAgfVxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgaHRtbFBhcnNlck5vdGljZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmh0bWxQYXJzZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgb25Mb2FkKCkge1xuICAgICAgICAgICAgdGhpcy5odG1sUGFyc2UoKVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgIHd4UGFyc2VJbWdMb2FkKGltYWdlKSB7XG4gICAgICAgICAgICBsZXQgaW1nSW5mbyA9IGltYWdlLmRldGFpbFxuICAgICAgICB9XG4gICAgICAgICoqL1xuXG4gICAgICAgIGh0bWxQYXJzZSgpIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICogV3hQYXJzZS53eFBhcnNlKGJpbmROYW1lICwgdHlwZSwgZGF0YSwgdGFyZ2V0LGltYWdlUGFkZGluZylcbiAgICAgICAgICAgICAgICAqIDEuYmluZE5hbWXnu5HlrprnmoTmlbDmja7lkI0o5b+F5aGrKVxuICAgICAgICAgICAgICAgICogMi50eXBl5Y+v5Lul5Li6aHRtbOaIluiAhW1kKOW/heWhqylcbiAgICAgICAgICAgICAgICAqIDMuZGF0YeS4uuS8oOWFpeeahOWFt+S9k+aVsOaNrijlv4XloaspXG4gICAgICAgICAgICAgICAgKiA0LnRhcmdldOS4ulBhZ2Xlr7nosaEs5LiA6Iis5Li6dGhpcyjlv4XloaspXG4gICAgICAgICAgICAgICAgKiA1LmltYWdlUGFkZGluZ+S4uuW9k+WbvueJh+iHqumAguW6lOaYr+W3puWPs+eahOWNleS4gHBhZGRpbmco6buY6K6k5Li6MCzlj6/pgIkpXG4gICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgV3hQYXJzZS53eFBhcnNlKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnNlck5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyc2VyVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJzZXJDb250ZW50IHx8IHRoaXMucHJvcHMucGFyc2VyQ29udGVudC5kZWZhdWx0LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnNlclBhZGRpbmdcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaHRtbFBhcnNlclRwbCA9IHRoaXMuZGF0YVt0aGlzLnBhcnNlck5hbWVdXG4gICAgICAgICAgICAgICAgfSwgNTAwMClcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ2tpbmVySHRtbFBhcnNlcjonLCAn5rKh5pyJ5Lu75L2V5YaF5a656ZyA6KaB6L2s5o2iJywgZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiJdfQ==