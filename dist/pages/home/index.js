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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImRhdGEiLCJ0YWJzIiwidGl0bGUiLCJhY3RpdmVJbmRleCIsInNsaWRlcldpZHRoIiwidXNlckluZm8iLCJob21lRGF0YSIsInBvc3RzIiwiYmFubmVycyIsInJlY29tbWVuZHMiLCJjaGlsZHJlbiIsImZvcmdlbkRhdGEiLCJhY3Rpdml0eURhdGEiLCJtZXRob2RzIiwiY2hhbmdlQWN0aXZlSW5kZXgiLCJwYXJzZUludCIsIm5vQWpheCIsInJlc3BvbnNlIiwidG9waWNzIiwiJHBhcmVudCIsImdldFVzZXJJbmZvIiwidXBkYXRlSG9tZURhdGEiLCJ1cGRhdGVBY3Rpdml0eSIsInVwZGF0ZVNlbkppdVRhbmciLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsUUFJVkMsTyxHQUFVLEUsUUFDakJDLE0sR0FBUyxFQUFDLFlBQVcsRUFBQyxnQkFBZSxFQUFoQixFQUFtQix1QkFBc0IsTUFBekMsRUFBZ0QsMkJBQTBCLGFBQTFFLEVBQXdGLDJCQUEwQixhQUFsSCxFQUFnSSxjQUFhLEVBQTdJLEVBQVosRUFBNkosZUFBYyxFQUFDLHFCQUFvQiw4QkFBckIsRUFBb0Qsd0JBQXVCLFVBQTNFLEVBQTNLLEVBQWtRLGdCQUFlLEVBQUMscUJBQW9CLDhCQUFyQixFQUFvRCw0QkFBMkIsY0FBL0UsRUFBalIsRUFBZ1gsWUFBVyxFQUFDLHFCQUFvQiw4QkFBckIsRUFBb0QsMEJBQXlCLFlBQTdFLEVBQTNYLEUsUUFDVEMsTyxHQUFVLEVBQUMsWUFBVyxFQUFDLDBCQUF5QixtQkFBMUIsRUFBWixFLFFBQ1RDLFUsR0FBYTtBQUNGLHdDQURFO0FBRUYsOENBRkU7QUFHRiw4Q0FIRTtBQUlGO0FBSkUsUyxRQU9OQyxJLEdBQU87QUFDSDtBQUNBQyxrQkFBTSxDQUFDO0FBQ0hDLHVCQUFPO0FBREosYUFBRCxFQUVIO0FBQ0NBLHVCQUFPO0FBRFIsYUFGRyxFQUlIO0FBQ0NBLHVCQUFPO0FBRFIsYUFKRyxDQUZIO0FBU0hDLHlCQUFhLENBVFY7QUFVSEMseUJBQWEsS0FWVjtBQVdIQyxzQkFBVSxFQVhQO0FBWUhDLHNCQUFVO0FBQ05DLHVCQUFPO0FBQ0hQLDBCQUFNO0FBREgsaUJBREQ7QUFJTlEseUJBQVM7QUFDTEQsMkJBQU87QUFERixpQkFKSDtBQU9ORSw0QkFBWTtBQUNSQyw4QkFBVTtBQURGO0FBUE4sYUFaUDtBQXVCSEMsd0JBQVksRUF2QlQ7QUF3QkhDLDBCQUFjO0FBeEJYLFMsUUEwQ1BDLE8sR0FBVTtBQUNOQyw2QkFETSw2QkFDWVgsV0FEWixFQUN5QjtBQUMzQixxQkFBS0EsV0FBTCxHQUFtQlksU0FBU1osV0FBVCxDQUFuQjtBQUNIO0FBSEssUzs7Ozs7MENBZlFBLFcsRUFBYTtBQUMzQixpQkFBS0EsV0FBTCxHQUFtQlksU0FBU1osV0FBVCxDQUFuQjtBQUNIOzs7Ozs7Ozs7Ozt1Q0FFMEIscUJBQVMsbUJBQVQsRUFBOEIsRUFBRWEsUUFBUSxJQUFWLEVBQTlCLEM7OztBQUFqQkMsd0M7O0FBQ04scUNBQUtOLFVBQUwsR0FBa0JNLFNBQVNDLE1BQVQsSUFBbUIsRUFBckM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUNBR3NCLHFCQUFTLFFBQVQsQzs7O0FBQXRCLHFDQUFLWixROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1Q0FHa0IscUJBQVMsaUJBQVQsQzs7O0FBQWpCVyx3Qzs7QUFDTixxQ0FBS0wsWUFBTCxHQUFvQkssU0FBU0MsTUFBVCxJQUFtQkQsU0FBU0MsTUFBVCxDQUFnQlgsS0FBdkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUNBVU0sS0FBS1ksT0FBTCxDQUFhQyxXQUFiLEU7Ozs7dUNBQ0EsS0FBS0MsY0FBTCxFOzs7O3VDQUNBLEtBQUtDLGNBQUwsRTs7Ozt1Q0FDQSxLQUFLQyxnQkFBTCxFOzs7QUFDTixxQ0FBS0MsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXBFMkIsZUFBS0MsSTs7a0JBQW5CaEMsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IG5hdmJhckNvbXBvbmVudCBmcm9tICdAL2NvbXBvbmVudHMvbmF2YmFyJ1xuICAgIGltcG9ydCB7IGdldEZldGNoIH0gZnJvbSAnQC9tb2R1bGVzL2NvbW1vbi9mZXRjaCdcbiAgICBpbXBvcnQgcmVjb21tZW5kQ29tcG9uZW50IGZyb20gJy4vcmVjb21tZW5kJ1xuICAgIGltcG9ydCBhY3Rpdml0aWVzQ29tcG9uZW50IGZyb20gJy4vYWN0aXZpdHknXG4gICAgaW1wb3J0IGZvcmdlbkNvbXBvbmVudCBmcm9tICcuL2ZvcmdlbidcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+ajruael+mjjidcbiAgICAgICAgfVxuXG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJ2LW5hdmJhclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6YWxsZGF0YS5vbmNlXCI6XCJ0YWJzXCIsXCJ2LWJpbmQ6YWN0aXZlSW5kZXguc3luY1wiOlwiYWN0aXZlSW5kZXhcIixcInYtYmluZDpzbGlkZXJXaWR0aC5vbmNlXCI6XCJzbGlkZXJXaWR0aFwiLFwieG1sbnM6di1vblwiOlwiXCJ9LFwidi1yZWNvbW1lbmRcIjp7XCJ2LWJpbmQ6Y2xhc3Mub25jZVwiOlwieyBoaWRkZW46IGFjdGl2ZUluZGV4ICE9PSAwfVwiLFwidi1iaW5kOmhvbWVEYXRhLnN5bmNcIjpcImhvbWVEYXRhXCJ9LFwidi1hY3Rpdml0aWVzXCI6e1widi1iaW5kOmNsYXNzLm9uY2VcIjpcInsgaGlkZGVuOiBhY3RpdmVJbmRleCAhPT0gMn1cIixcInYtYmluZDphY3Rpdml0eURhdGEuc3luY1wiOlwiYWN0aXZpdHlEYXRhXCJ9LFwidi1mb3JnZW5cIjp7XCJ2LWJpbmQ6Y2xhc3Mub25jZVwiOlwieyBoaWRkZW46IGFjdGl2ZUluZGV4ICE9PSAxfVwiLFwidi1iaW5kOmZvcmdlbkRhdGEuc3luY1wiOlwiZm9yZ2VuRGF0YVwifX07XHJcbiRldmVudHMgPSB7XCJ2LW5hdmJhclwiOntcInYtb246Y2hhbmdlQWN0aXZlSW5kZXhcIjpcImNoYW5nZUFjdGl2ZUluZGV4XCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICAndi1uYXZiYXInOiBuYXZiYXJDb21wb25lbnQsXG4gICAgICAgICAgICAndi1yZWNvbW1lbmQnOiByZWNvbW1lbmRDb21wb25lbnQsXG4gICAgICAgICAgICAndi1hY3Rpdml0aWVzJzogYWN0aXZpdGllc0NvbXBvbmVudCxcbiAgICAgICAgICAgICd2LWZvcmdlbic6IGZvcmdlbkNvbXBvbmVudFxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIC8qIOmhtumDqOWIhuexuyAqL1xuICAgICAgICAgICAgdGFiczogW3tcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+aOqOiNkCdcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+ajrueptuWggidcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+a0u+WKqCdcbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgYWN0aXZlSW5kZXg6IDAsXG4gICAgICAgICAgICBzbGlkZXJXaWR0aDogOTMuNzUsXG4gICAgICAgICAgICB1c2VySW5mbzoge30sXG4gICAgICAgICAgICBob21lRGF0YToge1xuICAgICAgICAgICAgICAgIHBvc3RzOiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFtdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBiYW5uZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHBvc3RzOiBbXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcmVjb21tZW5kczoge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW11cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZm9yZ2VuRGF0YTogW10sXG4gICAgICAgICAgICBhY3Rpdml0eURhdGE6IFtdXG4gICAgICAgIH1cblxuICAgICAgICBjaGFuZ2VBY3RpdmVJbmRleChhY3RpdmVJbmRleCkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IHBhcnNlSW50KGFjdGl2ZUluZGV4KVxuICAgICAgICB9XG4gICAgICAgIGFzeW5jIHVwZGF0ZVNlbkppdVRhbmcgKCkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRGZXRjaCgnL3Bvc3RzL3NlbkppdVRhbmcnLCB7IG5vQWpheDogdHJ1ZSB9KVxuICAgICAgICAgICAgdGhpcy5mb3JnZW5EYXRhID0gcmVzcG9uc2UudG9waWNzIHx8IFtdXG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgdXBkYXRlSG9tZURhdGEgKCkge1xuICAgICAgICAgICAgdGhpcy5ob21lRGF0YSA9IGF3YWl0IGdldEZldGNoKCcvcG9zdHMnKVxuICAgICAgICB9XG4gICAgICAgIGFzeW5jIHVwZGF0ZUFjdGl2aXR5ICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0RmV0Y2goJy9wb3N0cy9hY3Rpdml0eScpXG4gICAgICAgICAgICB0aGlzLmFjdGl2aXR5RGF0YSA9IHJlc3BvbnNlLnRvcGljcyAmJiByZXNwb25zZS50b3BpY3MucG9zdHNcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBjaGFuZ2VBY3RpdmVJbmRleChhY3RpdmVJbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSBwYXJzZUludChhY3RpdmVJbmRleClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGFzeW5jIG9uU2hvdygpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuJHBhcmVudC5nZXRVc2VySW5mbygpXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZUhvbWVEYXRhKClcbiAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlQWN0aXZpdHkoKVxuICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVTZW5KaXVUYW5nKClcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==