'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _fetch = require('./../../modules/common/fetch.js');

var _utils = require('./../../modules/common/utils.js');

var _baseTitle = require('./../../components/baseTitle.js');

var _baseTitle2 = _interopRequireDefault(_baseTitle);

var _course = require('./../../components/course.js');

var _course2 = _interopRequireDefault(_course);

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
            navigationBarTitleText: '热门话题'
        }, _this.$repeat = {}, _this.$props = { "v-base-title": { "class": "title", "xmlns:v-bind": "", "v-bind:leftText.sync": "title" }, "v-course": { "class": "list", "v-bind:list.sync": "adapterPosts", "xmlns:v-on": "" } }, _this.$events = { "v-course": { "v-on:click": "selectList" } }, _this.components = {
            'v-base-title': _baseTitle2.default,
            'v-course': _course2.default
        }, _this.data = {
            title: '',
            posts: []
        }, _this.computed = {
            adapterPosts: function adapterPosts() {
                return this.posts.map(function (i) {
                    return {
                        id: i.id,
                        tag: i.topics.reduce(function (value, t) {
                            return value + ' #' + t.name + '#';
                        }, ''),
                        title: i.title,
                        cover: i.imgUrl,
                        description: (0, _utils.maxLength)(i.description)
                    };
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'fetchData',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
                var rsp;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return (0, _fetch.getFetch)('/topic/index/' + (14 || id));

                            case 2:
                                rsp = _context.sent;

                                this.posts = rsp.posts;

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function fetchData(_x) {
                return _ref2.apply(this, arguments);
            }

            return fetchData;
        }()
    }, {
        key: 'onLoad',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(options) {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                this.title = options.text ? '\u70ED\u95E8\u8BDD\u9898: #' + options.text + '#' : '#更多热门话题#';
                                _context2.next = 3;
                                return this.fetchData(options.id);

                            case 3:
                                this.$apply();

                            case 4:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function onLoad(_x2) {
                return _ref3.apply(this, arguments);
            }

            return onLoad;
        }()
    }, {
        key: 'selectList',
        value: function selectList(e) {
            _wepy2.default.navigateTo({
                url: '../../pages/recommend/index?id=' + e.currentTarget.dataset.id
            });
        }
    }]);

    return Index;
}(_wepy2.default.page);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImRhdGEiLCJ0aXRsZSIsInBvc3RzIiwiY29tcHV0ZWQiLCJhZGFwdGVyUG9zdHMiLCJtYXAiLCJpZCIsImkiLCJ0YWciLCJ0b3BpY3MiLCJyZWR1Y2UiLCJ2YWx1ZSIsInQiLCJuYW1lIiwiY292ZXIiLCJpbWdVcmwiLCJkZXNjcmlwdGlvbiIsInJzcCIsIm9wdGlvbnMiLCJ0ZXh0IiwiZmV0Y2hEYXRhIiwiJGFwcGx5IiwiZSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QjtBQURuQixTLFFBSVZDLE8sR0FBVSxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxnQkFBZSxFQUFDLFNBQVEsT0FBVCxFQUFpQixnQkFBZSxFQUFoQyxFQUFtQyx3QkFBdUIsT0FBMUQsRUFBaEIsRUFBbUYsWUFBVyxFQUFDLFNBQVEsTUFBVCxFQUFnQixvQkFBbUIsY0FBbkMsRUFBa0QsY0FBYSxFQUEvRCxFQUE5RixFLFFBQ1RDLE8sR0FBVSxFQUFDLFlBQVcsRUFBQyxjQUFhLFlBQWQsRUFBWixFLFFBQ1RDLFUsR0FBYTtBQUNGLCtDQURFO0FBRUY7QUFGRSxTLFFBS05DLEksR0FBTztBQUNIQyxtQkFBTyxFQURKO0FBRUhDLG1CQUFPO0FBRkosUyxRQUtQQyxRLEdBQVc7QUFDUEMsd0JBRE8sMEJBQ1M7QUFDWix1QkFBTyxLQUFLRixLQUFMLENBQVdHLEdBQVgsQ0FBZSxhQUFLO0FBQ3ZCLDJCQUFPO0FBQ0hDLDRCQUFJQyxFQUFFRCxFQURIO0FBRUhFLDZCQUFLRCxFQUFFRSxNQUFGLENBQVNDLE1BQVQsQ0FBZ0IsVUFBQ0MsS0FBRCxFQUFRQyxDQUFSLEVBQWM7QUFDL0IsbUNBQVVELEtBQVYsVUFBb0JDLEVBQUVDLElBQXRCO0FBQ0gseUJBRkksRUFFRixFQUZFLENBRkY7QUFLSFosK0JBQU9NLEVBQUVOLEtBTE47QUFNSGEsK0JBQU9QLEVBQUVRLE1BTk47QUFPSEMscUNBQWEsc0JBQVVULEVBQUVTLFdBQVo7QUFQVixxQkFBUDtBQVNILGlCQVZNLENBQVA7QUFXSDtBQWJNLFM7Ozs7OztpR0FlTVYsRTs7Ozs7Ozt1Q0FDSyx3Q0FBeUIsTUFBTUEsRUFBL0IsRTs7O0FBQVpXLG1DOztBQUNOLHFDQUFLZixLQUFMLEdBQWFlLElBQUlmLEtBQWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQUVTZ0IsTzs7Ozs7QUFDVCxxQ0FBS2pCLEtBQUwsR0FBYWlCLFFBQVFDLElBQVIsbUNBQXlCRCxRQUFRQyxJQUFqQyxTQUEyQyxVQUF4RDs7dUNBQ00sS0FBS0MsU0FBTCxDQUFlRixRQUFRWixFQUF2QixDOzs7QUFDTixxQ0FBS2UsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQUVRQyxDLEVBQUc7QUFDWCwyQkFBS0MsVUFBTCxDQUFnQjtBQUNaQyx5REFBdUNGLEVBQUVHLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCcEI7QUFEbkQsYUFBaEI7QUFHSDs7OztFQTlDOEIsZUFBS3FCLEk7O2tCQUFuQmxDLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCB7IGdldEZldGNoIH0gZnJvbSAnQC9tb2R1bGVzL2NvbW1vbi9mZXRjaCdcbiAgICBpbXBvcnQgeyBtYXhMZW5ndGggfSBmcm9tICdAL21vZHVsZXMvY29tbW9uL3V0aWxzJ1xuICAgIGltcG9ydCBiYXNlVGl0bGVDb21wb25lbnQgZnJvbSAnQC9jb21wb25lbnRzL2Jhc2VUaXRsZSdcbiAgICBpbXBvcnQgY291cnNlQ29tcG9uZW50IGZyb20gJ0AvY29tcG9uZW50cy9jb3Vyc2UnXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfng63pl6jor53popgnXG4gICAgICAgIH1cblxuICAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1widi1iYXNlLXRpdGxlXCI6e1wiY2xhc3NcIjpcInRpdGxlXCIsXCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmxlZnRUZXh0LnN5bmNcIjpcInRpdGxlXCJ9LFwidi1jb3Vyc2VcIjp7XCJjbGFzc1wiOlwibGlzdFwiLFwidi1iaW5kOmxpc3Quc3luY1wiOlwiYWRhcHRlclBvc3RzXCIsXCJ4bWxuczp2LW9uXCI6XCJcIn19O1xyXG4kZXZlbnRzID0ge1widi1jb3Vyc2VcIjp7XCJ2LW9uOmNsaWNrXCI6XCJzZWxlY3RMaXN0XCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICAndi1iYXNlLXRpdGxlJzogYmFzZVRpdGxlQ29tcG9uZW50LFxuICAgICAgICAgICAgJ3YtY291cnNlJzogY291cnNlQ29tcG9uZW50XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgcG9zdHM6IFtdXG4gICAgICAgIH1cblxuICAgICAgICBjb21wdXRlZCA9IHtcbiAgICAgICAgICAgIGFkYXB0ZXJQb3N0cyAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9zdHMubWFwKGkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGkuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWc6IGkudG9waWNzLnJlZHVjZSgodmFsdWUsIHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYCR7dmFsdWV9ICMke3QubmFtZX0jYFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgJycpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGkudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3ZlcjogaS5pbWdVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogbWF4TGVuZ3RoKGkuZGVzY3JpcHRpb24pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFzeW5jIGZldGNoRGF0YSAoaWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJzcCA9IGF3YWl0IGdldEZldGNoKGAvdG9waWMvaW5kZXgvJHsxNCB8fCBpZH1gKVxuICAgICAgICAgICAgdGhpcy5wb3N0cyA9IHJzcC5wb3N0c1xuICAgICAgICB9XG4gICAgICAgIGFzeW5jIG9uTG9hZChvcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gb3B0aW9ucy50ZXh0ID8gYOeDremXqOivnemimDogIyR7b3B0aW9ucy50ZXh0fSNgIDogJyPmm7TlpJrng63pl6jor53popgjJ1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaERhdGEob3B0aW9ucy5pZClcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgfVxuICAgICAgICBzZWxlY3RMaXN0IChlKSB7XG4gICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgIHVybDogYC4uLy4uL3BhZ2VzL3JlY29tbWVuZC9pbmRleD9pZD0ke2UuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkfWBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4iXX0=