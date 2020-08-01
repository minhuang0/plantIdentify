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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29tbWVuZC5qcyJdLCJuYW1lcyI6WyJjYXRlZ29yeUNvdmVycyIsIkluZGV4IiwicHJvcHMiLCJob21lRGF0YSIsIk9iamVjdCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInN3cGVyQ29tcG9uZW50IiwidGl0bGVDb21wb25lbnQiLCJoU2Nyb2xsQ29tcG9uZW50IiwibGlzdENvbXBvbmVudCIsImNvbXB1dGVkIiwiYmFubmVycyIsInBvc3RzIiwiY2F0ZWdvcmllcyIsInJlY29tbWVuZHMiLCJjaGlsZHJlbiIsIm1hcCIsIml0ZW0iLCJpZHgiLCJpZCIsInRpdGxlIiwibmFtZSIsImNvdmVyIiwiaW1nVXJsIiwiZGF0YSIsInRhZyIsInRvcGljcyIsIm1ldGhvZHMiLCJzZWxlY3RTd2lwZXIiLCJlIiwid2VweSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInNlbGVjdExpc3QiLCJzZWxlY3RDYXRlZ29yeSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGlCQUFpQixDQUNuQixpRUFEbUIsRUFFbkIsa0VBRm1CLEVBR25CLGlFQUhtQixFQUluQixpRUFKbUIsQ0FBdkI7O0lBT3FCQyxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLEssR0FBUTtBQUNKQyxzQkFBVUM7QUFETixTLFFBR1RDLE8sR0FBVSxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxXQUFVLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsdUJBQXNCLFNBQXpDLEVBQW1ELGNBQWEsRUFBaEUsRUFBWCxFQUErRSxZQUFXLEVBQUMsU0FBUSxNQUFULEVBQTFGLEVBQTJHLFlBQVcsRUFBQyxTQUFRLE1BQVQsRUFBdEgsRUFBdUksY0FBYSxFQUFDLFNBQVEsWUFBVCxFQUFzQix1QkFBc0IsWUFBNUMsRUFBcEosRUFBOE0sVUFBUyxFQUFDLFNBQVEsTUFBVCxFQUFnQixvQkFBbUIsT0FBbkMsRUFBdk4sRSxRQUNUQyxPLEdBQVUsRUFBQyxXQUFVLEVBQUMsY0FBYSxjQUFkLEVBQVgsRUFBeUMsY0FBYSxFQUFDLGNBQWEsZ0JBQWQsRUFBdEQsRUFBc0YsVUFBUyxFQUFDLGtCQUFpQixZQUFsQixFQUEvRixFLFFBQ1RDLFUsR0FBYTtBQUNGLHVCQUFXQyxlQURUO0FBRUYsd0JBQVlDLGVBRlY7QUFHRix3QkFBWUEsZUFIVjtBQUlGLDBCQUFjQywwQkFKWjtBQUtGLHNCQUFVQztBQUxSLFMsUUFPTkMsUSxHQUFXO0FBQ1BDLG1CQURPLHFCQUNJO0FBQ1AsdUJBQU8sS0FBS1gsUUFBTCxDQUFjVyxPQUFkLENBQXNCQyxLQUE3QjtBQUNILGFBSE07QUFJUEMsc0JBSk8sd0JBSU87QUFDVix1QkFBTyxLQUFLYixRQUFMLENBQWNjLFVBQWQsQ0FBeUJDLFFBQXpCLENBQWtDQyxHQUFsQyxDQUFzQyxVQUFDQyxJQUFELEVBQU9DLEdBQVAsRUFBZTtBQUN4RCwyQkFBTztBQUNIQyw0QkFBSUYsS0FBS0UsRUFETjtBQUVIQywrQkFBT0gsS0FBS0ksSUFGVDtBQUdIQywrQkFBT0wsS0FBS00sTUFBTCxJQUFlMUIsZUFBZXFCLEdBQWY7QUFIbkIscUJBQVA7QUFLSCxpQkFOTSxDQUFQO0FBT0gsYUFaTTtBQWFQTixpQkFiTyxtQkFhRTtBQUNMLHVCQUFPLEtBQUtaLFFBQUwsQ0FBY1ksS0FBZCxDQUFvQlksSUFBcEIsQ0FBeUJSLEdBQXpCLENBQTZCLGdCQUFRO0FBQ3hDLHdCQUFNUyxNQUFPUixLQUFLUyxNQUFMLElBQWVULEtBQUtTLE1BQUwsQ0FBWSxDQUFaLENBQWYsSUFBaUNULEtBQUtTLE1BQUwsQ0FBWSxDQUFaLEVBQWVMLElBQWpELElBQTBELEVBQXRFO0FBQ0EsMkJBQU87QUFDSEYsNEJBQUlGLEtBQUtFLEVBRE47QUFFSE0sNkJBQUtBLEdBRkY7QUFHSEgsK0JBQU9MLEtBQUtNLE1BSFQ7QUFJSEgsK0JBQU9ILEtBQUtHO0FBSlQscUJBQVA7QUFNSCxpQkFSTSxDQUFQO0FBU0g7QUF2Qk0sUyxRQTBCWE8sTyxHQUFVO0FBQ05DLHdCQURNLHdCQUNPQyxDQURQLEVBQ1U7QUFDWkMsK0JBQUtDLFVBQUwsQ0FBZ0I7QUFDWkMsNkRBQXVDSCxFQUFFSSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QmY7QUFEbkQsaUJBQWhCO0FBR0gsYUFMSztBQU1OZ0Isc0JBTk0sc0JBTUtOLENBTkwsRUFNUTtBQUNWQywrQkFBS0MsVUFBTCxDQUFnQjtBQUNaQyw2REFBdUNILEVBQUVJLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCZjtBQURuRCxpQkFBaEI7QUFHSCxhQVZLO0FBV05pQiwwQkFYTSwwQkFXU1AsQ0FYVCxFQVdZO0FBQ2RDLCtCQUFLQyxVQUFMLENBQWdCO0FBQ1pDLHdEQUFrQ0gsRUFBRUksYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JmO0FBRDlDLGlCQUFoQjtBQUdIO0FBZkssUzs7OztFQXhDcUJXLGVBQUtPLFM7O2tCQUFuQnZDLEsiLCJmaWxlIjoicmVjb21tZW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgc3dwZXJDb21wb25lbnQgZnJvbSAnQC9jb21wb25lbnRzL3N3cGVyJ1xuICAgIGltcG9ydCB0aXRsZUNvbXBvbmVudCBmcm9tICdAL2NvbXBvbmVudHMvdGl0bGUnXG4gICAgaW1wb3J0IGhTY3JvbGxDb21wb25lbnQgZnJvbSAnQC9jb21wb25lbnRzL2hvcml6b250YWwtc2Nyb2xsJ1xuICAgIGltcG9ydCBsaXN0Q29tcG9uZW50IGZyb20gJ0AvY29tcG9uZW50cy9saXN0J1xuXG4gICAgY29uc3QgY2F0ZWdvcnlDb3ZlcnMgPSBbXG4gICAgICAgICdodHRwczovL21vZGFvLmNjL3VwbG9hZHMzL2ltYWdlcy85OTIvOTkyNjI2MS9yYXdfMTQ5NjI4MjM2OC5wbmcnLFxuICAgICAgICAnaHR0cHM6Ly9tb2Rhby5jYy91cGxvYWRzMy9pbWFnZXMvOTkyLzk5MjYyNjMvcmF3XzE0OTYyODIzNjguanBlZycsXG4gICAgICAgICdodHRwczovL21vZGFvLmNjL3VwbG9hZHMzL2ltYWdlcy85OTIvOTkyNjI2NS9yYXdfMTQ5NjI4MjM2OS5wbmcnLFxuICAgICAgICAnaHR0cHM6Ly9tb2Rhby5jYy91cGxvYWRzMy9pbWFnZXMvOTkyLzk5MjYyNjcvcmF3XzE0OTYyODIzNjkucG5nJ1xuICAgIF1cblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIGhvbWVEYXRhOiBPYmplY3RcbiAgICAgICAgfVxuICAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1widi1zd3BlclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6YWxsZGF0YS5zeW5jXCI6XCJiYW5uZXJzXCIsXCJ4bWxuczp2LW9uXCI6XCJcIn0sXCJ2LXRpdGxlMVwiOntcInRpdGxlXCI6XCLkuJPpopjliIbnsbtcIn0sXCJ2LXRpdGxlMlwiOntcInRpdGxlXCI6XCLku4rml6XmjqjojZBcIn0sXCJ2LWgtc2Nyb2xsXCI6e1wiY2xhc3NcIjpcImNhdGVnb3JpZXNcIixcInYtYmluZDphbGxkYXRhLnN5bmNcIjpcImNhdGVnb3JpZXNcIn0sXCJ2LWxpc3RcIjp7XCJjbGFzc1wiOlwibGlzdFwiLFwidi1iaW5kOmxpc3Quc3luY1wiOlwicG9zdHNcIn19O1xyXG4kZXZlbnRzID0ge1widi1zd3BlclwiOntcInYtb246Y2xpY2tcIjpcInNlbGVjdFN3aXBlclwifSxcInYtaC1zY3JvbGxcIjp7XCJ2LW9uOmNsaWNrXCI6XCJzZWxlY3RDYXRlZ29yeVwifSxcInYtbGlzdFwiOntcInYtb246aXRlbUNsaWNrXCI6XCJzZWxlY3RMaXN0XCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICAndi1zd3Blcic6IHN3cGVyQ29tcG9uZW50LFxuICAgICAgICAgICAgJ3YtdGl0bGUxJzogdGl0bGVDb21wb25lbnQsXG4gICAgICAgICAgICAndi10aXRsZTInOiB0aXRsZUNvbXBvbmVudCxcbiAgICAgICAgICAgICd2LWgtc2Nyb2xsJzogaFNjcm9sbENvbXBvbmVudCxcbiAgICAgICAgICAgICd2LWxpc3QnOiBsaXN0Q29tcG9uZW50XG4gICAgICAgIH1cbiAgICAgICAgY29tcHV0ZWQgPSB7XG4gICAgICAgICAgICBiYW5uZXJzICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ob21lRGF0YS5iYW5uZXJzLnBvc3RzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2F0ZWdvcmllcyAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaG9tZURhdGEucmVjb21tZW5kcy5jaGlsZHJlbi5tYXAoKGl0ZW0sIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgY292ZXI6IGl0ZW0uaW1nVXJsIHx8IGNhdGVnb3J5Q292ZXJzW2lkeF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcG9zdHMgKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhvbWVEYXRhLnBvc3RzLmRhdGEubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YWcgPSAoaXRlbS50b3BpY3MgJiYgaXRlbS50b3BpY3NbMF0gJiYgaXRlbS50b3BpY3NbMF0ubmFtZSkgfHwgJydcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiB0YWcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3ZlcjogaXRlbS5pbWdVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogaXRlbS50aXRsZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBzZWxlY3RTd2lwZXIoZSkge1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogYC4uLy4uL3BhZ2VzL3JlY29tbWVuZC9pbmRleD9pZD0ke2UuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkfWBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlbGVjdExpc3QoZSkge1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogYC4uLy4uL3BhZ2VzL3JlY29tbWVuZC9pbmRleD9pZD0ke2UuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkfWBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlbGVjdENhdGVnb3J5KGUpIHtcbiAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IGAuLi8uLi9wYWdlcy9saXN0L2luZGV4P2lkPSR7ZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWR9YFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4iXX0=