'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _moment = require('./../../components/moment.js');

var _moment2 = _interopRequireDefault(_moment);

var _fetch = require('./../../modules/common/fetch.js');

var _utils = require('./../../modules/common/utils.js');

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
            navigationBarTitleText: '我的'
        }, _this.$repeat = { "adapterMoments": { "com": "v-moment", "props": "moment" } }, _this.$props = { "v-moment": { "xmlns:v-bind": { "value": "", "for": "adapterMoments", "item": "item", "index": "index", "key": "index" }, "v-bind:moment.once": { "value": "item", "type": "item", "for": "adapterMoments", "item": "item", "index": "index", "key": "index" } } }, _this.$events = {}, _this.components = {
            'v-moment': _moment2.default
        }, _this.computed = {
            adapterMoments: function adapterMoments() {
                var user = this.user;
                return this.moments.map(function (m) {
                    return {
                        id: m.id,
                        avatar: user.avatarUrl,
                        name: user.nickName,
                        content: m.content,
                        images: (0, _utils.paddingImg)(m.circle_imgs.map(function (i) {
                            return i.imgUrl;
                        })),
                        createTime: (0, _utils.timeTransform)(m.created_at),
                        upvoteNum: m.targets_count,
                        commentsNum: m.comments_count
                    };
                });
            }
        }, _this.data = {
            moments: [],
            user: {}
        }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'fetchData',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var userInfo, response;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.$parent.getUserInfo();

                            case 2:
                                userInfo = _context.sent;
                                _context.next = 5;
                                return (0, _fetch.getFetch)('/user/' + userInfo.id);

                            case 5:
                                response = _context.sent;

                                this.moments = response.circles;
                                this.user = response.user;

                            case 8:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function fetchData() {
                return _ref2.apply(this, arguments);
            }

            return fetchData;
        }()
    }, {
        key: 'onShow',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return this.fetchData();

                            case 2:
                                this.$apply();

                            case 3:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function onShow() {
                return _ref3.apply(this, arguments);
            }

            return onShow;
        }()
    }]);

    return Index;
}(_wepy2.default.page);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIm1vbWVudENvbXBvbmVudCIsImNvbXB1dGVkIiwiYWRhcHRlck1vbWVudHMiLCJ1c2VyIiwibW9tZW50cyIsIm1hcCIsImlkIiwibSIsImF2YXRhciIsImF2YXRhclVybCIsIm5hbWUiLCJuaWNrTmFtZSIsImNvbnRlbnQiLCJpbWFnZXMiLCJjaXJjbGVfaW1ncyIsImkiLCJpbWdVcmwiLCJjcmVhdGVUaW1lIiwiY3JlYXRlZF9hdCIsInVwdm90ZU51bSIsInRhcmdldHNfY291bnQiLCJjb21tZW50c051bSIsImNvbW1lbnRzX2NvdW50IiwiZGF0YSIsIm1ldGhvZHMiLCIkcGFyZW50IiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsInJlc3BvbnNlIiwiY2lyY2xlcyIsImZldGNoRGF0YSIsIiRhcHBseSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsUUFJVkMsTyxHQUFVLEVBQUMsa0JBQWlCLEVBQUMsT0FBTSxVQUFQLEVBQWtCLFNBQVEsUUFBMUIsRUFBbEIsRSxRQUNqQkMsTSxHQUFTLEVBQUMsWUFBVyxFQUFDLGdCQUFlLEVBQUMsU0FBUSxFQUFULEVBQVksT0FBTSxnQkFBbEIsRUFBbUMsUUFBTyxNQUExQyxFQUFpRCxTQUFRLE9BQXpELEVBQWlFLE9BQU0sT0FBdkUsRUFBaEIsRUFBZ0csc0JBQXFCLEVBQUMsU0FBUSxNQUFULEVBQWdCLFFBQU8sTUFBdkIsRUFBOEIsT0FBTSxnQkFBcEMsRUFBcUQsUUFBTyxNQUE1RCxFQUFtRSxTQUFRLE9BQTNFLEVBQW1GLE9BQU0sT0FBekYsRUFBckgsRUFBWixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNGLHdCQUFZQztBQURWLFMsUUFJTkMsUSxHQUFXO0FBQ1BDLDBCQURPLDRCQUNXO0FBQ2Qsb0JBQU1DLE9BQU8sS0FBS0EsSUFBbEI7QUFDQSx1QkFBTyxLQUFLQyxPQUFMLENBQWFDLEdBQWIsQ0FBaUIsYUFBSztBQUN6QiwyQkFBTztBQUNIQyw0QkFBSUMsRUFBRUQsRUFESDtBQUVIRSxnQ0FBUUwsS0FBS00sU0FGVjtBQUdIQyw4QkFBTVAsS0FBS1EsUUFIUjtBQUlIQyxpQ0FBU0wsRUFBRUssT0FKUjtBQUtIQyxnQ0FBUSx1QkFBV04sRUFBRU8sV0FBRixDQUFjVCxHQUFkLENBQWtCO0FBQUEsbUNBQUtVLEVBQUVDLE1BQVA7QUFBQSx5QkFBbEIsQ0FBWCxDQUxMO0FBTUhDLG9DQUFZLDBCQUFjVixFQUFFVyxVQUFoQixDQU5UO0FBT0hDLG1DQUFXWixFQUFFYSxhQVBWO0FBUUhDLHFDQUFhZCxFQUFFZTtBQVJaLHFCQUFQO0FBVUgsaUJBWE0sQ0FBUDtBQVlIO0FBZk0sUyxRQWtCWEMsSSxHQUFPO0FBQ0huQixxQkFBUyxFQUROO0FBRUhELGtCQUFNO0FBRkgsUyxRQUlQcUIsTyxHQUFVLEU7Ozs7Ozs7Ozs7Ozs7dUNBR2lCLEtBQUtDLE9BQUwsQ0FBYUMsV0FBYixFOzs7QUFBakJDLHdDOzt1Q0FDaUIsZ0NBQWtCQSxTQUFTckIsRUFBM0IsQzs7O0FBQWpCc0Isd0M7O0FBQ04scUNBQUt4QixPQUFMLEdBQWV3QixTQUFTQyxPQUF4QjtBQUNBLHFDQUFLMUIsSUFBTCxHQUFZeUIsU0FBU3pCLElBQXJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VDQUdNLEtBQUsyQixTQUFMLEU7OztBQUNOLHFDQUFLQyxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBNUMyQkMsZUFBS0MsSTs7a0JBQW5CeEMsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IG1vbWVudENvbXBvbmVudCBmcm9tICdAL2NvbXBvbmVudHMvbW9tZW50J1xuICAgIGltcG9ydCB7IGdldEZldGNoIH0gZnJvbSAnQC9tb2R1bGVzL2NvbW1vbi9mZXRjaCdcbiAgICBpbXBvcnQgeyBwYWRkaW5nSW1nLCB0aW1lVHJhbnNmb3JtIH0gZnJvbSAnQC9tb2R1bGVzL2NvbW1vbi91dGlscydcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahCdcbiAgICAgICAgfVxuXG4gICAgICAgJHJlcGVhdCA9IHtcImFkYXB0ZXJNb21lbnRzXCI6e1wiY29tXCI6XCJ2LW1vbWVudFwiLFwicHJvcHNcIjpcIm1vbWVudFwifX07XHJcbiRwcm9wcyA9IHtcInYtbW9tZW50XCI6e1wieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJhZGFwdGVyTW9tZW50c1wiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwidi1iaW5kOm1vbWVudC5vbmNlXCI6e1widmFsdWVcIjpcIml0ZW1cIixcInR5cGVcIjpcIml0ZW1cIixcImZvclwiOlwiYWRhcHRlck1vbWVudHNcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifX19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgJ3YtbW9tZW50JzogbW9tZW50Q29tcG9uZW50XG4gICAgICAgIH1cblxuICAgICAgICBjb21wdXRlZCA9IHtcbiAgICAgICAgICAgIGFkYXB0ZXJNb21lbnRzICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyID0gdGhpcy51c2VyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9tZW50cy5tYXAobSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcjogdXNlci5hdmF0YXJVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB1c2VyLm5pY2tOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogbS5jb250ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VzOiBwYWRkaW5nSW1nKG0uY2lyY2xlX2ltZ3MubWFwKGkgPT4gaS5pbWdVcmwpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZVRpbWU6IHRpbWVUcmFuc2Zvcm0obS5jcmVhdGVkX2F0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwdm90ZU51bTogbS50YXJnZXRzX2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudHNOdW06IG0uY29tbWVudHNfY291bnRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgbW9tZW50czogW10sXG4gICAgICAgICAgICB1c2VyOiB7fVxuICAgICAgICB9XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgZmV0Y2hEYXRhICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJJbmZvID0gYXdhaXQgdGhpcy4kcGFyZW50LmdldFVzZXJJbmZvKClcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0RmV0Y2goYC91c2VyLyR7dXNlckluZm8uaWR9YClcbiAgICAgICAgICAgIHRoaXMubW9tZW50cyA9IHJlc3BvbnNlLmNpcmNsZXNcbiAgICAgICAgICAgIHRoaXMudXNlciA9IHJlc3BvbnNlLnVzZXJcbiAgICAgICAgfVxuICAgICAgICBhc3luYyBvblNob3cgKCkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaERhdGEoKVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9XG4gICAgfVxuIl19