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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkhUTUxQYXJzZXIiLCJwcm9wcyIsInBhcnNlck5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwiZGVmYXVsdCIsInBhcnNlckNvbnRlbnQiLCJwYXJzZXJUeXBlIiwicGFyc2VyUGFkZGluZyIsIk51bWJlciIsImRhdGEiLCJodG1sUGFyc2VyVHBsIiwiZXZlbnRzIiwiJGV2ZW50IiwibWV0aG9kcyIsImh0bWxQYXJzZXJOb3RpY2UiLCJodG1sUGFyc2UiLCJXeFBhcnNlIiwid3hQYXJzZSIsInNldFRpbWVvdXQiLCJlIiwiY29uc29sZSIsIndhcm4iLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsVTs7Ozs7Ozs7Ozs7Ozs7a01BQ2pCQyxLLEdBQVE7QUFDSkMsd0JBQVk7QUFDUkMsc0JBQU1DLE1BREU7QUFFUkMseUJBQVM7QUFGRCxhQURSO0FBS0pDLDJCQUFlO0FBQ1hILHNCQUFNQyxNQURLO0FBRVhDLHlCQUFTO0FBRkUsYUFMWDtBQVNKRSx3QkFBWTtBQUNSSixzQkFBTUMsTUFERTtBQUVSQyx5QkFBUztBQUZELGFBVFI7QUFhSkcsMkJBQWU7QUFDWEwsc0JBQU1NLE1BREs7QUFFWEoseUJBQVM7QUFGRTtBQWJYLFMsUUFtQlJLLEksR0FBTztBQUNIQywyQkFBZTtBQURaLFMsUUFJUEMsTSxHQUFTO0FBQ0wsb0NBQXdCLDZCQUFDQyxNQUFELEVBQXFCLENBQUc7QUFEM0MsUyxRQUdUQyxPLEdBQVU7QUFDTkMsNEJBRE0sOEJBQ2E7QUFDZixxQkFBS0MsU0FBTDtBQUNIO0FBSEssUzs7Ozs7Ozs7Ozs7QUFNTixxQ0FBS0EsU0FBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHSjs7Ozs7Ozs7b0NBTVk7QUFBQTs7QUFDUjs7Ozs7Ozs7QUFRQSxnQkFBSTtBQUNBQyxrQ0FBUUMsT0FBUixDQUNJLEtBQUtoQixVQURULEVBRUksS0FBS0ssVUFGVCxFQUdJLEtBQUtELGFBQUwsSUFBc0IsS0FBS0wsS0FBTCxDQUFXSyxhQUFYLENBQXlCRCxPQUhuRCxFQUlJLElBSkosRUFLSSxLQUFLRyxhQUxUO0FBT0FXLDJCQUFXLFlBQU07QUFDYiwyQkFBS1IsYUFBTCxHQUFxQixPQUFLRCxJQUFMLENBQVUsT0FBS1IsVUFBZixDQUFyQjtBQUNILGlCQUZELEVBRUcsSUFGSDtBQUdILGFBWEQsQ0FXRSxPQUFPa0IsQ0FBUCxFQUFVO0FBQ1JDLHdCQUFRQyxJQUFSLENBQWEsa0JBQWIsRUFBaUMsWUFBakMsRUFBK0NGLENBQS9DO0FBQ0g7QUFDSjs7OztFQWpFbUNHLGVBQUtDLFM7O2tCQUF4QnhCLFUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCBXeFBhcnNlIGZyb20gJy4uLy4uL2xpYnMvd3hQYXJzZS93eFBhcnNlJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSFRNTFBhcnNlciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICBwYXJzZXJOYW1lOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICdodG1sUGFyc2VyTmFtZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXJzZXJDb250ZW50OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IFwiPHAgc3R5bGU9J2ZvbnQtc2l6ZTogMzJycHg7IHBhZGRpbmc6IDMwcnB4IDA7IHRleHQtYWxpZ246IGNlbnRlcjsnPuayoeacieS7u+S9leWGheWuuTwvcD5cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhcnNlclR5cGU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJ2h0bWwnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFyc2VyUGFkZGluZzoge1xuICAgICAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgaHRtbFBhcnNlclRwbDoge31cbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50cyA9IHtcbiAgICAgICAgICAgICdodG1sUGFyc2VyLWJyb2FkY2FzdCc6ICgkZXZlbnQsIC4uLmFyZ3MpID0+IHsgfVxuICAgICAgICB9XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBodG1sUGFyc2VyTm90aWNlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaHRtbFBhcnNlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhc3luYyBvbkxvYWQoKSB7XG4gICAgICAgICAgICB0aGlzLmh0bWxQYXJzZSgpXG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgd3hQYXJzZUltZ0xvYWQoaW1hZ2UpIHtcbiAgICAgICAgICAgIGxldCBpbWdJbmZvID0gaW1hZ2UuZGV0YWlsXG4gICAgICAgIH1cbiAgICAgICAgKiovXG5cbiAgICAgICAgaHRtbFBhcnNlKCkge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgKiBXeFBhcnNlLnd4UGFyc2UoYmluZE5hbWUgLCB0eXBlLCBkYXRhLCB0YXJnZXQsaW1hZ2VQYWRkaW5nKVxuICAgICAgICAgICAgICAgICogMS5iaW5kTmFtZee7keWumueahOaVsOaNruWQjSjlv4XloaspXG4gICAgICAgICAgICAgICAgKiAyLnR5cGXlj6/ku6XkuLpodG1s5oiW6ICFbWQo5b+F5aGrKVxuICAgICAgICAgICAgICAgICogMy5kYXRh5Li65Lyg5YWl55qE5YW35L2T5pWw5o2uKOW/heWhqylcbiAgICAgICAgICAgICAgICAqIDQudGFyZ2V05Li6UGFnZeWvueixoSzkuIDoiKzkuLp0aGlzKOW/heWhqylcbiAgICAgICAgICAgICAgICAqIDUuaW1hZ2VQYWRkaW5n5Li65b2T5Zu+54mH6Ieq6YCC5bqU5piv5bem5Y+z55qE5Y2V5LiAcGFkZGluZyjpu5jorqTkuLowLOWPr+mAiSlcbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBXeFBhcnNlLnd4UGFyc2UoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyc2VyTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJzZXJUeXBlLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnNlckNvbnRlbnQgfHwgdGhpcy5wcm9wcy5wYXJzZXJDb250ZW50LmRlZmF1bHQsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyc2VyUGFkZGluZ1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5odG1sUGFyc2VyVHBsID0gdGhpcy5kYXRhW3RoaXMucGFyc2VyTmFtZV1cbiAgICAgICAgICAgICAgICB9LCA1MDAwKVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybigna2luZXJIdG1sUGFyc2VyOicsICfmsqHmnInku7vkvZXlhoXlrrnpnIDopoHovazmjaInLCBlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuIl19