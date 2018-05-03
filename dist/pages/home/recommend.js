'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _swper = require('./../../components/swper.js');

var _swper2 = _interopRequireDefault(_swper);

var _title = require('./../../components/title.js');

var _title2 = _interopRequireDefault(_title);

var _horizontalScroll = require('./../../components/horizontal-scroll.js');

var _horizontalScroll2 = _interopRequireDefault(_horizontalScroll);

var _list = require('./../../components/list.js');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var categoryCovers = ['https://modao.cc/uploads3/images/992/9926261/raw_1496282368.png', 'https://modao.cc/uploads3/images/992/9926263/raw_1496282368.jpeg', 'https://modao.cc/uploads3/images/992/9926265/raw_1496282369.png', 'https://modao.cc/uploads3/images/992/9926267/raw_1496282369.png'];

var Index = function (_wepy$component) {
    _inherits(Index, _wepy$component);

    function Index() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Index);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            homeData: Object
        }, _this.$repeat = {}, _this.$props = { "v-swper": { "xmlns:v-bind": "", "v-bind:alldata.sync": "banners", "xmlns:v-on": "" }, "v-title1": { "title": "专题分类" }, "v-title2": { "title": "今日推荐" }, "v-h-scroll": { "class": "categories", "v-bind:alldata.sync": "categories" }, "v-list": { "class": "list", "v-bind:list.sync": "posts" } }, _this.$events = { "v-swper": { "v-on:click": "selectSwiper" }, "v-h-scroll": { "v-on:click": "selectCategory" }, "v-list": { "v-on:itemClick": "selectList" } }, _this.components = {
            'v-swper': _swper2.default,
            'v-title1': _title2.default,
            'v-title2': _title2.default,
            'v-h-scroll': _horizontalScroll2.default,
            'v-list': _list2.default
        }, _this.computed = {
            banners: function banners() {
                return this.homeData.banners.posts;
            },
            categories: function categories() {
                return this.homeData.recommends.children.map(function (item, idx) {
                    return {
                        id: item.id,
                        title: item.name,
                        cover: item.imgUrl || categoryCovers[idx]
                    };
                });
            },
            posts: function posts() {
                return this.homeData.posts.data.map(function (item) {
                    var tag = item.topics && item.topics[0] && item.topics[0].name || '';
                    return {
                        id: item.id,
                        tag: tag,
                        cover: item.imgUrl,
                        title: item.title
                    };
                });
            }
        }, _this.methods = {
            selectSwiper: function selectSwiper(e) {
                _wepy2.default.navigateTo({
                    url: '../../pages/recommend/index?id=' + e.currentTarget.dataset.id
                });
            },
            selectList: function selectList(e) {
                _wepy2.default.navigateTo({
                    url: '../../pages/recommend/index?id=' + e.currentTarget.dataset.id
                });
            },
            selectCategory: function selectCategory(e) {
                _wepy2.default.navigateTo({
                    url: '../../pages/list/index?id=' + e.currentTarget.dataset.id
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29tbWVuZC5qcyJdLCJuYW1lcyI6WyJjYXRlZ29yeUNvdmVycyIsIkluZGV4IiwicHJvcHMiLCJob21lRGF0YSIsIk9iamVjdCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNvbXB1dGVkIiwiYmFubmVycyIsInBvc3RzIiwiY2F0ZWdvcmllcyIsInJlY29tbWVuZHMiLCJjaGlsZHJlbiIsIm1hcCIsIml0ZW0iLCJpZHgiLCJpZCIsInRpdGxlIiwibmFtZSIsImNvdmVyIiwiaW1nVXJsIiwiZGF0YSIsInRhZyIsInRvcGljcyIsIm1ldGhvZHMiLCJzZWxlY3RTd2lwZXIiLCJlIiwibmF2aWdhdGVUbyIsInVybCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0Iiwic2VsZWN0TGlzdCIsInNlbGVjdENhdGVnb3J5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCLENBQ25CLGlFQURtQixFQUVuQixrRUFGbUIsRUFHbkIsaUVBSG1CLEVBSW5CLGlFQUptQixDQUF2Qjs7SUFPcUJDLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsSyxHQUFRO0FBQ0pDLHNCQUFVQztBQUROLFMsUUFHVEMsTyxHQUFVLEUsUUFDakJDLE0sR0FBUyxFQUFDLFdBQVUsRUFBQyxnQkFBZSxFQUFoQixFQUFtQix1QkFBc0IsU0FBekMsRUFBbUQsY0FBYSxFQUFoRSxFQUFYLEVBQStFLFlBQVcsRUFBQyxTQUFRLE1BQVQsRUFBMUYsRUFBMkcsWUFBVyxFQUFDLFNBQVEsTUFBVCxFQUF0SCxFQUF1SSxjQUFhLEVBQUMsU0FBUSxZQUFULEVBQXNCLHVCQUFzQixZQUE1QyxFQUFwSixFQUE4TSxVQUFTLEVBQUMsU0FBUSxNQUFULEVBQWdCLG9CQUFtQixPQUFuQyxFQUF2TixFLFFBQ1RDLE8sR0FBVSxFQUFDLFdBQVUsRUFBQyxjQUFhLGNBQWQsRUFBWCxFQUF5QyxjQUFhLEVBQUMsY0FBYSxnQkFBZCxFQUF0RCxFQUFzRixVQUFTLEVBQUMsa0JBQWlCLFlBQWxCLEVBQS9GLEUsUUFDVEMsVSxHQUFhO0FBQ0Ysc0NBREU7QUFFRix1Q0FGRTtBQUdGLHVDQUhFO0FBSUYsb0RBSkU7QUFLRjtBQUxFLFMsUUFPTkMsUSxHQUFXO0FBQ1BDLG1CQURPLHFCQUNJO0FBQ1AsdUJBQU8sS0FBS1AsUUFBTCxDQUFjTyxPQUFkLENBQXNCQyxLQUE3QjtBQUNILGFBSE07QUFJUEMsc0JBSk8sd0JBSU87QUFDVix1QkFBTyxLQUFLVCxRQUFMLENBQWNVLFVBQWQsQ0FBeUJDLFFBQXpCLENBQWtDQyxHQUFsQyxDQUFzQyxVQUFDQyxJQUFELEVBQU9DLEdBQVAsRUFBZTtBQUN4RCwyQkFBTztBQUNIQyw0QkFBSUYsS0FBS0UsRUFETjtBQUVIQywrQkFBT0gsS0FBS0ksSUFGVDtBQUdIQywrQkFBT0wsS0FBS00sTUFBTCxJQUFldEIsZUFBZWlCLEdBQWY7QUFIbkIscUJBQVA7QUFLSCxpQkFOTSxDQUFQO0FBT0gsYUFaTTtBQWFQTixpQkFiTyxtQkFhRTtBQUNMLHVCQUFPLEtBQUtSLFFBQUwsQ0FBY1EsS0FBZCxDQUFvQlksSUFBcEIsQ0FBeUJSLEdBQXpCLENBQTZCLGdCQUFRO0FBQ3hDLHdCQUFNUyxNQUFPUixLQUFLUyxNQUFMLElBQWVULEtBQUtTLE1BQUwsQ0FBWSxDQUFaLENBQWYsSUFBaUNULEtBQUtTLE1BQUwsQ0FBWSxDQUFaLEVBQWVMLElBQWpELElBQTBELEVBQXRFO0FBQ0EsMkJBQU87QUFDSEYsNEJBQUlGLEtBQUtFLEVBRE47QUFFSE0sNkJBQUtBLEdBRkY7QUFHSEgsK0JBQU9MLEtBQUtNLE1BSFQ7QUFJSEgsK0JBQU9ILEtBQUtHO0FBSlQscUJBQVA7QUFNSCxpQkFSTSxDQUFQO0FBU0g7QUF2Qk0sUyxRQTBCWE8sTyxHQUFVO0FBQ05DLHdCQURNLHdCQUNPQyxDQURQLEVBQ1U7QUFDWiwrQkFBS0MsVUFBTCxDQUFnQjtBQUNaQyw2REFBdUNGLEVBQUVHLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCZDtBQURuRCxpQkFBaEI7QUFHSCxhQUxLO0FBTU5lLHNCQU5NLHNCQU1LTCxDQU5MLEVBTVE7QUFDViwrQkFBS0MsVUFBTCxDQUFnQjtBQUNaQyw2REFBdUNGLEVBQUVHLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCZDtBQURuRCxpQkFBaEI7QUFHSCxhQVZLO0FBV05nQiwwQkFYTSwwQkFXU04sQ0FYVCxFQVdZO0FBQ2QsK0JBQUtDLFVBQUwsQ0FBZ0I7QUFDWkMsd0RBQWtDRixFQUFFRyxhQUFGLENBQWdCQyxPQUFoQixDQUF3QmQ7QUFEOUMsaUJBQWhCO0FBR0g7QUFmSyxTOzs7O0VBeENxQixlQUFLaUIsUzs7a0JBQW5CbEMsSyIsImZpbGUiOiJyZWNvbW1lbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCBzd3BlckNvbXBvbmVudCBmcm9tICdAL2NvbXBvbmVudHMvc3dwZXInXG4gICAgaW1wb3J0IHRpdGxlQ29tcG9uZW50IGZyb20gJ0AvY29tcG9uZW50cy90aXRsZSdcbiAgICBpbXBvcnQgaFNjcm9sbENvbXBvbmVudCBmcm9tICdAL2NvbXBvbmVudHMvaG9yaXpvbnRhbC1zY3JvbGwnXG4gICAgaW1wb3J0IGxpc3RDb21wb25lbnQgZnJvbSAnQC9jb21wb25lbnRzL2xpc3QnXG5cbiAgICBjb25zdCBjYXRlZ29yeUNvdmVycyA9IFtcbiAgICAgICAgJ2h0dHBzOi8vbW9kYW8uY2MvdXBsb2FkczMvaW1hZ2VzLzk5Mi85OTI2MjYxL3Jhd18xNDk2MjgyMzY4LnBuZycsXG4gICAgICAgICdodHRwczovL21vZGFvLmNjL3VwbG9hZHMzL2ltYWdlcy85OTIvOTkyNjI2My9yYXdfMTQ5NjI4MjM2OC5qcGVnJyxcbiAgICAgICAgJ2h0dHBzOi8vbW9kYW8uY2MvdXBsb2FkczMvaW1hZ2VzLzk5Mi85OTI2MjY1L3Jhd18xNDk2MjgyMzY5LnBuZycsXG4gICAgICAgICdodHRwczovL21vZGFvLmNjL3VwbG9hZHMzL2ltYWdlcy85OTIvOTkyNjI2Ny9yYXdfMTQ5NjI4MjM2OS5wbmcnXG4gICAgXVxuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgaG9tZURhdGE6IE9iamVjdFxuICAgICAgICB9XG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJ2LXN3cGVyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDphbGxkYXRhLnN5bmNcIjpcImJhbm5lcnNcIixcInhtbG5zOnYtb25cIjpcIlwifSxcInYtdGl0bGUxXCI6e1widGl0bGVcIjpcIuS4k+mimOWIhuexu1wifSxcInYtdGl0bGUyXCI6e1widGl0bGVcIjpcIuS7iuaXpeaOqOiNkFwifSxcInYtaC1zY3JvbGxcIjp7XCJjbGFzc1wiOlwiY2F0ZWdvcmllc1wiLFwidi1iaW5kOmFsbGRhdGEuc3luY1wiOlwiY2F0ZWdvcmllc1wifSxcInYtbGlzdFwiOntcImNsYXNzXCI6XCJsaXN0XCIsXCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJwb3N0c1wifX07XHJcbiRldmVudHMgPSB7XCJ2LXN3cGVyXCI6e1widi1vbjpjbGlja1wiOlwic2VsZWN0U3dpcGVyXCJ9LFwidi1oLXNjcm9sbFwiOntcInYtb246Y2xpY2tcIjpcInNlbGVjdENhdGVnb3J5XCJ9LFwidi1saXN0XCI6e1widi1vbjppdGVtQ2xpY2tcIjpcInNlbGVjdExpc3RcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgICd2LXN3cGVyJzogc3dwZXJDb21wb25lbnQsXG4gICAgICAgICAgICAndi10aXRsZTEnOiB0aXRsZUNvbXBvbmVudCxcbiAgICAgICAgICAgICd2LXRpdGxlMic6IHRpdGxlQ29tcG9uZW50LFxuICAgICAgICAgICAgJ3YtaC1zY3JvbGwnOiBoU2Nyb2xsQ29tcG9uZW50LFxuICAgICAgICAgICAgJ3YtbGlzdCc6IGxpc3RDb21wb25lbnRcbiAgICAgICAgfVxuICAgICAgICBjb21wdXRlZCA9IHtcbiAgICAgICAgICAgIGJhbm5lcnMgKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhvbWVEYXRhLmJhbm5lcnMucG9zdHNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYXRlZ29yaWVzICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ob21lRGF0YS5yZWNvbW1lbmRzLmNoaWxkcmVuLm1hcCgoaXRlbSwgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3ZlcjogaXRlbS5pbWdVcmwgfHwgY2F0ZWdvcnlDb3ZlcnNbaWR4XVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwb3N0cyAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaG9tZURhdGEucG9zdHMuZGF0YS5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhZyA9IChpdGVtLnRvcGljcyAmJiBpdGVtLnRvcGljc1swXSAmJiBpdGVtLnRvcGljc1swXS5uYW1lKSB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWc6IHRhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdmVyOiBpdGVtLmltZ1VybCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIHNlbGVjdFN3aXBlcihlKSB7XG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgLi4vLi4vcGFnZXMvcmVjb21tZW5kL2luZGV4P2lkPSR7ZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWR9YFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VsZWN0TGlzdChlKSB7XG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgLi4vLi4vcGFnZXMvcmVjb21tZW5kL2luZGV4P2lkPSR7ZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWR9YFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VsZWN0Q2F0ZWdvcnkoZSkge1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogYC4uLy4uL3BhZ2VzL2xpc3QvaW5kZXg/aWQ9JHtlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZH1gXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiJdfQ==