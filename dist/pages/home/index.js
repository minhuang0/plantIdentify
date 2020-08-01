'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _navbar = require('./../../components/navbar.js');

var _navbar2 = _interopRequireDefault(_navbar);

var _fetch = require('./../../modules/common/fetch.js');

var _recommend = require('./recommend.js');

var _recommend2 = _interopRequireDefault(_recommend);

var _activity = require('./activity.js');

var _activity2 = _interopRequireDefault(_activity);

var _forgen = require('./forgen.js');

var _forgen2 = _interopRequireDefault(_forgen);

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
            navigationBarTitleText: '森林风'
        }, _this.$repeat = {}, _this.$props = { "v-navbar": { "xmlns:v-bind": "", "v-bind:alldata.once": "tabs", "v-bind:activeIndex.sync": "activeIndex", "v-bind:sliderWidth.once": "sliderWidth", "xmlns:v-on": "" }, "v-recommend": { "v-bind:class.once": "{ hidden: activeIndex !== 0}", "v-bind:homeData.sync": "homeData" }, "v-activities": { "v-bind:class.once": "{ hidden: activeIndex !== 2}", "v-bind:activityData.sync": "activityData" }, "v-forgen": { "v-bind:class.once": "{ hidden: activeIndex !== 1}", "v-bind:forgenData.sync": "forgenData" } }, _this.$events = { "v-navbar": { "v-on:changeActiveIndex": "changeActiveIndex" } }, _this.components = {
            'v-navbar': _navbar2.default,
            'v-recommend': _recommend2.default,
            'v-activities': _activity2.default,
            'v-forgen': _forgen2.default
        }, _this.data = {
            /* 顶部分类 */
            tabs: [{
                title: '推荐'
            }, {
                title: '森究堂'
            }, {
                title: '活动'
            }],
            activeIndex: 0,
            sliderWidth: 93.75,
            userInfo: {},
            homeData: {
                posts: {
                    data: []
                },
                banners: {
                    posts: []
                },
                recommends: {
                    children: []
                }
            },
            forgenData: [],
            activityData: []
        }, _this.methods = {
            changeActiveIndex: function changeActiveIndex(activeIndex) {
                this.activeIndex = parseInt(activeIndex);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'changeActiveIndex',
        value: function changeActiveIndex(activeIndex) {
            this.activeIndex = parseInt(activeIndex);
        }
    }, {
        key: 'updateSenJiuTang',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var response;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return (0, _fetch.getFetch)('/posts/senJiuTang', { noAjax: true });

                            case 2:
                                response = _context.sent;

                                this.forgenData = response.topics || [];

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function updateSenJiuTang() {
                return _ref2.apply(this, arguments);
            }

            return updateSenJiuTang;
        }()
    }, {
        key: 'updateHomeData',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return (0, _fetch.getFetch)('/posts');

                            case 2:
                                this.homeData = _context2.sent;

                            case 3:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function updateHomeData() {
                return _ref3.apply(this, arguments);
            }

            return updateHomeData;
        }()
    }, {
        key: 'updateActivity',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var response;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return (0, _fetch.getFetch)('/posts/activity');

                            case 2:
                                response = _context3.sent;

                                this.activityData = response.topics && response.topics.posts;

                            case 4:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function updateActivity() {
                return _ref4.apply(this, arguments);
            }

            return updateActivity;
        }()
    }, {
        key: 'onShow',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return this.$parent.getUserInfo();

                            case 2:
                                _context4.next = 4;
                                return this.updateHomeData();

                            case 4:
                                _context4.next = 6;
                                return this.updateActivity();

                            case 6:
                                _context4.next = 8;
                                return this.updateSenJiuTang();

                            case 8:
                                this.$apply();

                            case 9:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function onShow() {
                return _ref5.apply(this, arguments);
            }

            return onShow;
        }()
    }]);

    return Index;
}(_wepy2.default.page);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIm5hdmJhckNvbXBvbmVudCIsInJlY29tbWVuZENvbXBvbmVudCIsImFjdGl2aXRpZXNDb21wb25lbnQiLCJmb3JnZW5Db21wb25lbnQiLCJkYXRhIiwidGFicyIsInRpdGxlIiwiYWN0aXZlSW5kZXgiLCJzbGlkZXJXaWR0aCIsInVzZXJJbmZvIiwiaG9tZURhdGEiLCJwb3N0cyIsImJhbm5lcnMiLCJyZWNvbW1lbmRzIiwiY2hpbGRyZW4iLCJmb3JnZW5EYXRhIiwiYWN0aXZpdHlEYXRhIiwibWV0aG9kcyIsImNoYW5nZUFjdGl2ZUluZGV4IiwicGFyc2VJbnQiLCJub0FqYXgiLCJyZXNwb25zZSIsInRvcGljcyIsIiRwYXJlbnQiLCJnZXRVc2VySW5mbyIsInVwZGF0ZUhvbWVEYXRhIiwidXBkYXRlQWN0aXZpdHkiLCJ1cGRhdGVTZW5KaXVUYW5nIiwiJGFwcGx5Iiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQUlWQyxPLEdBQVUsRSxRQUNqQkMsTSxHQUFTLEVBQUMsWUFBVyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHVCQUFzQixNQUF6QyxFQUFnRCwyQkFBMEIsYUFBMUUsRUFBd0YsMkJBQTBCLGFBQWxILEVBQWdJLGNBQWEsRUFBN0ksRUFBWixFQUE2SixlQUFjLEVBQUMscUJBQW9CLDhCQUFyQixFQUFvRCx3QkFBdUIsVUFBM0UsRUFBM0ssRUFBa1EsZ0JBQWUsRUFBQyxxQkFBb0IsOEJBQXJCLEVBQW9ELDRCQUEyQixjQUEvRSxFQUFqUixFQUFnWCxZQUFXLEVBQUMscUJBQW9CLDhCQUFyQixFQUFvRCwwQkFBeUIsWUFBN0UsRUFBM1gsRSxRQUNUQyxPLEdBQVUsRUFBQyxZQUFXLEVBQUMsMEJBQXlCLG1CQUExQixFQUFaLEUsUUFDVEMsVSxHQUFhO0FBQ0Ysd0JBQVlDLGdCQURWO0FBRUYsMkJBQWVDLG1CQUZiO0FBR0YsNEJBQWdCQyxrQkFIZDtBQUlGLHdCQUFZQztBQUpWLFMsUUFPTkMsSSxHQUFPO0FBQ0g7QUFDQUMsa0JBQU0sQ0FBQztBQUNIQyx1QkFBTztBQURKLGFBQUQsRUFFSDtBQUNDQSx1QkFBTztBQURSLGFBRkcsRUFJSDtBQUNDQSx1QkFBTztBQURSLGFBSkcsQ0FGSDtBQVNIQyx5QkFBYSxDQVRWO0FBVUhDLHlCQUFhLEtBVlY7QUFXSEMsc0JBQVUsRUFYUDtBQVlIQyxzQkFBVTtBQUNOQyx1QkFBTztBQUNIUCwwQkFBTTtBQURILGlCQUREO0FBSU5RLHlCQUFTO0FBQ0xELDJCQUFPO0FBREYsaUJBSkg7QUFPTkUsNEJBQVk7QUFDUkMsOEJBQVU7QUFERjtBQVBOLGFBWlA7QUF1QkhDLHdCQUFZLEVBdkJUO0FBd0JIQywwQkFBYztBQXhCWCxTLFFBMENQQyxPLEdBQVU7QUFDTkMsNkJBRE0sNkJBQ1lYLFdBRFosRUFDeUI7QUFDM0IscUJBQUtBLFdBQUwsR0FBbUJZLFNBQVNaLFdBQVQsQ0FBbkI7QUFDSDtBQUhLLFM7Ozs7OzBDQWZRQSxXLEVBQWE7QUFDM0IsaUJBQUtBLFdBQUwsR0FBbUJZLFNBQVNaLFdBQVQsQ0FBbkI7QUFDSDs7Ozs7Ozs7Ozs7dUNBRTBCLHFCQUFTLG1CQUFULEVBQThCLEVBQUVhLFFBQVEsSUFBVixFQUE5QixDOzs7QUFBakJDLHdDOztBQUNOLHFDQUFLTixVQUFMLEdBQWtCTSxTQUFTQyxNQUFULElBQW1CLEVBQXJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VDQUdzQixxQkFBUyxRQUFULEM7OztBQUF0QixxQ0FBS1osUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUNBR2tCLHFCQUFTLGlCQUFULEM7OztBQUFqQlcsd0M7O0FBQ04scUNBQUtMLFlBQUwsR0FBb0JLLFNBQVNDLE1BQVQsSUFBbUJELFNBQVNDLE1BQVQsQ0FBZ0JYLEtBQXZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VDQVVNLEtBQUtZLE9BQUwsQ0FBYUMsV0FBYixFOzs7O3VDQUNBLEtBQUtDLGNBQUwsRTs7Ozt1Q0FDQSxLQUFLQyxjQUFMLEU7Ozs7dUNBQ0EsS0FBS0MsZ0JBQUwsRTs7O0FBQ04scUNBQUtDLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFwRTJCQyxlQUFLQyxJOztrQkFBbkJyQyxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgbmF2YmFyQ29tcG9uZW50IGZyb20gJ0AvY29tcG9uZW50cy9uYXZiYXInXG4gICAgaW1wb3J0IHsgZ2V0RmV0Y2ggfSBmcm9tICdAL21vZHVsZXMvY29tbW9uL2ZldGNoJ1xuICAgIGltcG9ydCByZWNvbW1lbmRDb21wb25lbnQgZnJvbSAnLi9yZWNvbW1lbmQnXG4gICAgaW1wb3J0IGFjdGl2aXRpZXNDb21wb25lbnQgZnJvbSAnLi9hY3Rpdml0eSdcbiAgICBpbXBvcnQgZm9yZ2VuQ29tcG9uZW50IGZyb20gJy4vZm9yZ2VuJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5qOu5p6X6aOOJ1xuICAgICAgICB9XG5cbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInYtbmF2YmFyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDphbGxkYXRhLm9uY2VcIjpcInRhYnNcIixcInYtYmluZDphY3RpdmVJbmRleC5zeW5jXCI6XCJhY3RpdmVJbmRleFwiLFwidi1iaW5kOnNsaWRlcldpZHRoLm9uY2VcIjpcInNsaWRlcldpZHRoXCIsXCJ4bWxuczp2LW9uXCI6XCJcIn0sXCJ2LXJlY29tbWVuZFwiOntcInYtYmluZDpjbGFzcy5vbmNlXCI6XCJ7IGhpZGRlbjogYWN0aXZlSW5kZXggIT09IDB9XCIsXCJ2LWJpbmQ6aG9tZURhdGEuc3luY1wiOlwiaG9tZURhdGFcIn0sXCJ2LWFjdGl2aXRpZXNcIjp7XCJ2LWJpbmQ6Y2xhc3Mub25jZVwiOlwieyBoaWRkZW46IGFjdGl2ZUluZGV4ICE9PSAyfVwiLFwidi1iaW5kOmFjdGl2aXR5RGF0YS5zeW5jXCI6XCJhY3Rpdml0eURhdGFcIn0sXCJ2LWZvcmdlblwiOntcInYtYmluZDpjbGFzcy5vbmNlXCI6XCJ7IGhpZGRlbjogYWN0aXZlSW5kZXggIT09IDF9XCIsXCJ2LWJpbmQ6Zm9yZ2VuRGF0YS5zeW5jXCI6XCJmb3JnZW5EYXRhXCJ9fTtcclxuJGV2ZW50cyA9IHtcInYtbmF2YmFyXCI6e1widi1vbjpjaGFuZ2VBY3RpdmVJbmRleFwiOlwiY2hhbmdlQWN0aXZlSW5kZXhcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgICd2LW5hdmJhcic6IG5hdmJhckNvbXBvbmVudCxcbiAgICAgICAgICAgICd2LXJlY29tbWVuZCc6IHJlY29tbWVuZENvbXBvbmVudCxcbiAgICAgICAgICAgICd2LWFjdGl2aXRpZXMnOiBhY3Rpdml0aWVzQ29tcG9uZW50LFxuICAgICAgICAgICAgJ3YtZm9yZ2VuJzogZm9yZ2VuQ29tcG9uZW50XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgLyog6aG26YOo5YiG57G7ICovXG4gICAgICAgICAgICB0YWJzOiBbe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5o6o6I2QJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5qOu56m25aCCJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5rS75YqoJ1xuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBhY3RpdmVJbmRleDogMCxcbiAgICAgICAgICAgIHNsaWRlcldpZHRoOiA5My43NSxcbiAgICAgICAgICAgIHVzZXJJbmZvOiB7fSxcbiAgICAgICAgICAgIGhvbWVEYXRhOiB7XG4gICAgICAgICAgICAgICAgcG9zdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogW11cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJhbm5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zdHM6IFtdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByZWNvbW1lbmRzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb3JnZW5EYXRhOiBbXSxcbiAgICAgICAgICAgIGFjdGl2aXR5RGF0YTogW11cbiAgICAgICAgfVxuXG4gICAgICAgIGNoYW5nZUFjdGl2ZUluZGV4KGFjdGl2ZUluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gcGFyc2VJbnQoYWN0aXZlSW5kZXgpXG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgdXBkYXRlU2VuSml1VGFuZyAoKSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldEZldGNoKCcvcG9zdHMvc2VuSml1VGFuZycsIHsgbm9BamF4OiB0cnVlIH0pXG4gICAgICAgICAgICB0aGlzLmZvcmdlbkRhdGEgPSByZXNwb25zZS50b3BpY3MgfHwgW11cbiAgICAgICAgfVxuICAgICAgICBhc3luYyB1cGRhdGVIb21lRGF0YSAoKSB7XG4gICAgICAgICAgICB0aGlzLmhvbWVEYXRhID0gYXdhaXQgZ2V0RmV0Y2goJy9wb3N0cycpXG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgdXBkYXRlQWN0aXZpdHkgKCkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRGZXRjaCgnL3Bvc3RzL2FjdGl2aXR5JylcbiAgICAgICAgICAgIHRoaXMuYWN0aXZpdHlEYXRhID0gcmVzcG9uc2UudG9waWNzICYmIHJlc3BvbnNlLnRvcGljcy5wb3N0c1xuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIGNoYW5nZUFjdGl2ZUluZGV4KGFjdGl2ZUluZGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IHBhcnNlSW50KGFjdGl2ZUluZGV4KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYXN5bmMgb25TaG93KCkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy4kcGFyZW50LmdldFVzZXJJbmZvKClcbiAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlSG9tZURhdGEoKVxuICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVBY3Rpdml0eSgpXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVNlbkppdVRhbmcoKVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9XG4gICAgfVxuIl19