'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _fetch = require('./../../modules/common/fetch.js');

var _choice = require('./choice.js');

var _choice2 = _interopRequireDefault(_choice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import navbarComponent from '@/components/navbar'
// import momentsComponent from './moments'


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
            navigationBarTitleText: '发现'
        }, _this.$repeat = {}, _this.$props = { "v-choice": { "xmlns:v-bind": "", "v-bind:choiceData.sync": "choiceData" } }, _this.$events = {}, _this.components = {
            // 'v-navbar': navbarComponent,
            // 'v-moments': momentsComponent,
            'v-choice': _choice2.default
        }, _this.data = {
            /* 顶部分类 */
            // tabs: [{
            //     title: '精选'
            // }, {
            //     title: '圈子'
            // }],
            // activeIndex: 0,
            // sliderWidth: 93.75,
            choiceData: {
                banners: [],
                hotTopic: [],
                circles: []
                // momentsData: []
            } }, _this.methods = {
            changeActiveIndex: function changeActiveIndex(activeIndex) {
                this.activeIndex = parseInt(activeIndex);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'updateDiscoverData',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var response;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return (0, _fetch.getFetch)('/circles', { noAjax: true });

                            case 2:
                                response = _context.sent;

                                this.choiceData = { hotTopic: response.hotTopic, banners: response.banners.posts, circles: response.circles && response.circles.data || []
                                    // this.momentsData = response.circles && response.circles.data
                                };
                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function updateDiscoverData() {
                return _ref2.apply(this, arguments);
            }

            return updateDiscoverData;
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
                                return this.updateDiscoverData();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImRhdGEiLCJjaG9pY2VEYXRhIiwiYmFubmVycyIsImhvdFRvcGljIiwiY2lyY2xlcyIsIm1ldGhvZHMiLCJjaGFuZ2VBY3RpdmVJbmRleCIsImFjdGl2ZUluZGV4IiwicGFyc2VJbnQiLCJub0FqYXgiLCJyZXNwb25zZSIsInBvc3RzIiwidXBkYXRlRGlzY292ZXJEYXRhIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7QUFHQTs7Ozs7Ozs7Ozs7OztBQUZBO0FBQ0E7OztJQUdxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsUUFJVkMsTyxHQUFVLEUsUUFDakJDLE0sR0FBUyxFQUFDLFlBQVcsRUFBQyxnQkFBZSxFQUFoQixFQUFtQiwwQkFBeUIsWUFBNUMsRUFBWixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNGO0FBQ0E7QUFDQTtBQUhFLFMsUUFNTkMsSSxHQUFPO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQyx3QkFBWTtBQUNSQyx5QkFBUyxFQUREO0FBRVJDLDBCQUFVLEVBRkY7QUFHUkMseUJBQVM7QUFFYjtBQUxZLGFBVFQsRSxRQWlCUEMsTyxHQUFVO0FBQ05DLDZCQURNLDZCQUNZQyxXQURaLEVBQ3lCO0FBQzNCLHFCQUFLQSxXQUFMLEdBQW1CQyxTQUFTRCxXQUFULENBQW5CO0FBQ0g7QUFISyxTOzs7Ozs7Ozs7Ozs7O3VDQU9pQixxQkFBUyxVQUFULEVBQXFCLEVBQUVFLFFBQVEsSUFBVixFQUFyQixDOzs7QUFBakJDLHdDOztBQUNOLHFDQUFLVCxVQUFMLEdBQWtCLEVBQUVFLFVBQVVPLFNBQVNQLFFBQXJCLEVBQStCRCxTQUFTUSxTQUFTUixPQUFULENBQWlCUyxLQUF6RCxFQUFnRVAsU0FBVU0sU0FBU04sT0FBVCxJQUFvQk0sU0FBU04sT0FBVCxDQUFpQkosSUFBdEMsSUFBK0M7QUFDMUk7QUFEa0IsaUNBQWxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUNBSU0sS0FBS1ksa0JBQUwsRTs7O0FBQ04scUNBQUtDLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUE1QzJCLGVBQUtDLEk7O2tCQUFuQnJCLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCB7IGdldEZldGNoIH0gZnJvbSAnQC9tb2R1bGVzL2NvbW1vbi9mZXRjaCdcbiAgICAvLyBpbXBvcnQgbmF2YmFyQ29tcG9uZW50IGZyb20gJ0AvY29tcG9uZW50cy9uYXZiYXInXG4gICAgLy8gaW1wb3J0IG1vbWVudHNDb21wb25lbnQgZnJvbSAnLi9tb21lbnRzJ1xuICAgIGltcG9ydCBjaG9pY2VDb21wb25lbnQgZnJvbSAnLi9jaG9pY2UnXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflj5HnjrAnXG4gICAgICAgIH1cblxuICAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1widi1jaG9pY2VcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmNob2ljZURhdGEuc3luY1wiOlwiY2hvaWNlRGF0YVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICAvLyAndi1uYXZiYXInOiBuYXZiYXJDb21wb25lbnQsXG4gICAgICAgICAgICAvLyAndi1tb21lbnRzJzogbW9tZW50c0NvbXBvbmVudCxcbiAgICAgICAgICAgICd2LWNob2ljZSc6IGNob2ljZUNvbXBvbmVudFxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIC8qIOmhtumDqOWIhuexuyAqL1xuICAgICAgICAgICAgLy8gdGFiczogW3tcbiAgICAgICAgICAgIC8vICAgICB0aXRsZTogJ+eyvumAiSdcbiAgICAgICAgICAgIC8vIH0sIHtcbiAgICAgICAgICAgIC8vICAgICB0aXRsZTogJ+WciOWtkCdcbiAgICAgICAgICAgIC8vIH1dLFxuICAgICAgICAgICAgLy8gYWN0aXZlSW5kZXg6IDAsXG4gICAgICAgICAgICAvLyBzbGlkZXJXaWR0aDogOTMuNzUsXG4gICAgICAgICAgICBjaG9pY2VEYXRhOiB7XG4gICAgICAgICAgICAgICAgYmFubmVyczogW10sXG4gICAgICAgICAgICAgICAgaG90VG9waWM6IFtdLFxuICAgICAgICAgICAgICAgIGNpcmNsZXM6IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBtb21lbnRzRGF0YTogW11cbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBjaGFuZ2VBY3RpdmVJbmRleChhY3RpdmVJbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSBwYXJzZUludChhY3RpdmVJbmRleClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGFzeW5jIHVwZGF0ZURpc2NvdmVyRGF0YSAoKSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldEZldGNoKCcvY2lyY2xlcycsIHsgbm9BamF4OiB0cnVlIH0pXG4gICAgICAgICAgICB0aGlzLmNob2ljZURhdGEgPSB7IGhvdFRvcGljOiByZXNwb25zZS5ob3RUb3BpYywgYmFubmVyczogcmVzcG9uc2UuYmFubmVycy5wb3N0cywgY2lyY2xlczogKHJlc3BvbnNlLmNpcmNsZXMgJiYgcmVzcG9uc2UuY2lyY2xlcy5kYXRhKSB8fCBbXSB9XG4gICAgICAgICAgICAvLyB0aGlzLm1vbWVudHNEYXRhID0gcmVzcG9uc2UuY2lyY2xlcyAmJiByZXNwb25zZS5jaXJjbGVzLmRhdGFcbiAgICAgICAgfVxuICAgICAgICBhc3luYyBvblNob3coKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZURpc2NvdmVyRGF0YSgpXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH1cbiAgICB9XG4iXX0=