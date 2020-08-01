'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _swper = require('./../../components/swper.js');

var _swper2 = _interopRequireDefault(_swper);

var _text = require('./../../components/text.js');

var _text2 = _interopRequireDefault(_text);

var _baseTitle = require('./../../components/baseTitle.js');

var _baseTitle2 = _interopRequireDefault(_baseTitle);

var _grid = require('./../../components/grid.js');

var _grid2 = _interopRequireDefault(_grid);

var _title = require('./../../components/title.js');

var _title2 = _interopRequireDefault(_title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
            choiceData: Object
        }, _this.$repeat = { "hotTopic": { "com": "v-text", "props": "" } }, _this.$props = { "v-text": { "v-bind:text.once": { "value": "item.name", "for": "hotTopic", "item": "item", "index": "index", "key": "index" }, "data-id": { "value": "{{item.id}}", "for": "hotTopic", "item": "item", "index": "index", "key": "index" } }, "v-swper": { "xmlns:v-bind": "", "v-bind:alldata.sync": "swiperImgUrls", "xmlns:v-on": "" }, "v-baseTitle": { "leftText": "热门话题", "rightText": "更多热门话题", "data-id": "{{0}}" }, "v-grid": { "v-bind:list.sync": "choiceList" }, "v-title": { "title": "热门精选" } }, _this.$events = { "v-text": { "v-on:click": "selectDiscuss" }, "v-swper": { "v-on:click": "selectSwiper" }, "v-baseTitle": { "v-on:click": "selectDiscuss" }, "v-grid": { "v-on:click": "selectList" } }, _this.components = {
            'v-swper': _swper2.default,
            'v-text': _text2.default,
            'v-baseTitle': _baseTitle2.default,
            'v-grid': _grid2.default,
            'v-title': _title2.default
        }, _this.computed = {
            swiperImgUrls: function swiperImgUrls() {
                return this.choiceData.banners.map(function (item) {
                    return {
                        id: item.id,
                        imgUrl: item.imgUrl
                    };
                });
            },
            hotTopic: function hotTopic() {
                return this.choiceData.hotTopic.map(function (i) {
                    return {
                        id: i.id,
                        name: i.name
                    };
                });
            },
            choiceList: function choiceList() {
                return this.choiceData.circles.reduce(function (arr, i) {
                    if (i.circle_imgs && i.circle_imgs.length > 0) {
                        arr.push({
                            id: i.id,
                            url: i.circle_imgs[0].imgUrl
                        });
                    }
                    return arr;
                }, []);
            }
        }, _this.data = {
            /* 轮播图数据 */
            // choiceList: [{
            //     id: 0,
            //     url: 'http://static.htxq.net/UploadFiles/2017/11/13/1510542719081079365.jpg'
            // }, {
            //     id: 1,
            //     url: 'http://static.htxq.net/UploadFiles/2017/11/13/1510542730649005565.jpg'
            // }, {
            //     id: 2,
            //     url: 'http://static.htxq.net/UploadFiles/2017/11/13/1510541506626011490.jpg'
            // }, {
            //     id: 3,
            //     url: 'http://static.htxq.net/UploadFiles/2017/11/13/1510542214494079384.jpg'
            // }, {
            //     id: 4,
            //     url: 'http://static.htxq.net/UploadFiles/2017/11/13/1510542215017026944.jpg'
            // }, {
            //     id: 5,
            //     url: 'http://static.htxq.net/UploadFiles/2017/11/13/1510542215220092294.jpg'
            // }, {
            //     id: 6,
            //     url: 'http://static.htxq.net/UploadFiles/2017/11/13/1510542628347035674.jpg'
            // }, {
            //     id: 6,
            //     url: 'http://static.htxq.net/UploadFiles/2017/11/13/1510543629362097062.jpg'
            // }, {
            //     id: 6,
            //     url: 'http://static.htxq.net/UploadFiles/2017/11/13/1510543630413080476.jpg'
            // }, {
            //     id: 6,
            //     url: 'http://static.htxq.net/UploadFiles/2017/11/13/1510543630392093541.jpg'
            // }, {
            //     id: 6,
            //     url: 'http://static.htxq.net/UploadFiles/2017/11/13/1510544891901023536.jpg'
            // }]
        }, _this.methods = {
            selectSwiper: function selectSwiper(e) {
                _wepy2.default.navigateTo({
                    url: '../../pages/recommend/index?id=' + e.currentTarget.dataset.id
                });
            },
            selectList: function selectList(e) {
                _wepy2.default.navigateTo({
                    url: '../../pages/detail/moment?id=' + e.currentTarget.dataset.id
                });
            },
            selectDiscuss: function selectDiscuss(e) {
                console.log(e.currentTarget.dataset);
                _wepy2.default.navigateTo({
                    url: '../../pages/discuss/index?id=' + e.currentTarget.dataset.id + '&text=' + (e.currentTarget.dataset.text || '')
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNob2ljZS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwiY2hvaWNlRGF0YSIsIk9iamVjdCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInN3cGVyQ29tcG9uZW50IiwidGV4dENvbXBvbmVudCIsImJhc2VUaXRsZUNvbXBvbmVudCIsImdyaWRDb21wb25lbnQiLCJ0aXRsZUNvbXBvbmVudCIsImNvbXB1dGVkIiwic3dpcGVySW1nVXJscyIsImJhbm5lcnMiLCJtYXAiLCJpZCIsIml0ZW0iLCJpbWdVcmwiLCJob3RUb3BpYyIsImkiLCJuYW1lIiwiY2hvaWNlTGlzdCIsImNpcmNsZXMiLCJyZWR1Y2UiLCJhcnIiLCJjaXJjbGVfaW1ncyIsImxlbmd0aCIsInB1c2giLCJ1cmwiLCJkYXRhIiwibWV0aG9kcyIsInNlbGVjdFN3aXBlciIsImUiLCJ3ZXB5IiwibmF2aWdhdGVUbyIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0Iiwic2VsZWN0TGlzdCIsInNlbGVjdERpc2N1c3MiLCJjb25zb2xlIiwibG9nIiwidGV4dCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLEssR0FBUTtBQUNKQyx3QkFBWUM7QUFEUixTLFFBSVRDLE8sR0FBVSxFQUFDLFlBQVcsRUFBQyxPQUFNLFFBQVAsRUFBZ0IsU0FBUSxFQUF4QixFQUFaLEUsUUFDakJDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxvQkFBbUIsRUFBQyxTQUFRLFdBQVQsRUFBcUIsT0FBTSxVQUEzQixFQUFzQyxRQUFPLE1BQTdDLEVBQW9ELFNBQVEsT0FBNUQsRUFBb0UsT0FBTSxPQUExRSxFQUFwQixFQUF1RyxXQUFVLEVBQUMsU0FBUSxhQUFULEVBQXVCLE9BQU0sVUFBN0IsRUFBd0MsUUFBTyxNQUEvQyxF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LEVBQUVHLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCSyxJQUF4QixJQUFnQyxFQUF4RztBQURZLGlCQUFoQjtBQUdIO0FBaEJLLFM7Ozs7RUFwRnFCUixlQUFLUyxTOztrQkFBbkI1QyxLIiwiZmlsZSI6ImNob2ljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IHN3cGVyQ29tcG9uZW50IGZyb20gJ0AvY29tcG9uZW50cy9zd3BlcidcbiAgICBpbXBvcnQgdGV4dENvbXBvbmVudCBmcm9tICdAL2NvbXBvbmVudHMvdGV4dCdcbiAgICBpbXBvcnQgYmFzZVRpdGxlQ29tcG9uZW50IGZyb20gJ0AvY29tcG9uZW50cy9iYXNlVGl0bGUnXG4gICAgaW1wb3J0IGdyaWRDb21wb25lbnQgZnJvbSAnQC9jb21wb25lbnRzL2dyaWQnXG4gICAgaW1wb3J0IHRpdGxlQ29tcG9uZW50IGZyb20gJ0AvY29tcG9uZW50cy90aXRsZSdcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIGNob2ljZURhdGE6IE9iamVjdFxuICAgICAgICB9XG5cbiAgICAgICAkcmVwZWF0ID0ge1wiaG90VG9waWNcIjp7XCJjb21cIjpcInYtdGV4dFwiLFwicHJvcHNcIjpcIlwifX07XHJcbiRwcm9wcyA9IHtcInYtdGV4dFwiOntcInYtYmluZDp0ZXh0Lm9uY2VcIjp7XCJ2YWx1ZVwiOlwiaXRlbS5uYW1lXCIsXCJmb3JcIjpcImhvdFRvcGljXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJkYXRhLWlkXCI6e1widmFsdWVcIjpcInt7aXRlbS5pZH19XCIsXCJmb3JcIjpcImhvdFRvcGljXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn19LFwidi1zd3BlclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6YWxsZGF0YS5zeW5jXCI6XCJzd2lwZXJJbWdVcmxzXCIsXCJ4bWxuczp2LW9uXCI6XCJcIn0sXCJ2LWJhc2VUaXRsZVwiOntcImxlZnRUZXh0XCI6XCLng63pl6jor53pophcIixcInJpZ2h0VGV4dFwiOlwi5pu05aSa54Ot6Zeo6K+d6aKYXCIsXCJkYXRhLWlkXCI6XCJ7ezB9fVwifSxcInYtZ3JpZFwiOntcInYtYmluZDpsaXN0LnN5bmNcIjpcImNob2ljZUxpc3RcIn0sXCJ2LXRpdGxlXCI6e1widGl0bGVcIjpcIueDremXqOeyvumAiVwifX07XHJcbiRldmVudHMgPSB7XCJ2LXRleHRcIjp7XCJ2LW9uOmNsaWNrXCI6XCJzZWxlY3REaXNjdXNzXCJ9LFwidi1zd3BlclwiOntcInYtb246Y2xpY2tcIjpcInNlbGVjdFN3aXBlclwifSxcInYtYmFzZVRpdGxlXCI6e1widi1vbjpjbGlja1wiOlwic2VsZWN0RGlzY3Vzc1wifSxcInYtZ3JpZFwiOntcInYtb246Y2xpY2tcIjpcInNlbGVjdExpc3RcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgICd2LXN3cGVyJzogc3dwZXJDb21wb25lbnQsXG4gICAgICAgICAgICAndi10ZXh0JzogdGV4dENvbXBvbmVudCxcbiAgICAgICAgICAgICd2LWJhc2VUaXRsZSc6IGJhc2VUaXRsZUNvbXBvbmVudCxcbiAgICAgICAgICAgICd2LWdyaWQnOiBncmlkQ29tcG9uZW50LFxuICAgICAgICAgICAgJ3YtdGl0bGUnOiB0aXRsZUNvbXBvbmVudFxuICAgICAgICB9XG5cbiAgICAgICAgY29tcHV0ZWQgPSB7XG4gICAgICAgICAgICBzd2lwZXJJbWdVcmxzICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaG9pY2VEYXRhLmJhbm5lcnMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWdVcmw6IGl0ZW0uaW1nVXJsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhvdFRvcGljICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaG9pY2VEYXRhLmhvdFRvcGljLm1hcChpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogaS5uYW1lXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNob2ljZUxpc3QgKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNob2ljZURhdGEuY2lyY2xlcy5yZWR1Y2UoKGFyciwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaS5jaXJjbGVfaW1ncyAmJiBpLmNpcmNsZV9pbWdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGkuY2lyY2xlX2ltZ3NbMF0uaW1nVXJsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhcnJcbiAgICAgICAgICAgICAgICB9LCBbXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICAvKiDova7mkq3lm77mlbDmja4gKi9cbiAgICAgICAgICAgIC8vIGNob2ljZUxpc3Q6IFt7XG4gICAgICAgICAgICAvLyAgICAgaWQ6IDAsXG4gICAgICAgICAgICAvLyAgICAgdXJsOiAnaHR0cDovL3N0YXRpYy5odHhxLm5ldC9VcGxvYWRGaWxlcy8yMDE3LzExLzEzLzE1MTA1NDI3MTkwODEwNzkzNjUuanBnJ1xuICAgICAgICAgICAgLy8gfSwge1xuICAgICAgICAgICAgLy8gICAgIGlkOiAxLFxuICAgICAgICAgICAgLy8gICAgIHVybDogJ2h0dHA6Ly9zdGF0aWMuaHR4cS5uZXQvVXBsb2FkRmlsZXMvMjAxNy8xMS8xMy8xNTEwNTQyNzMwNjQ5MDA1NTY1LmpwZydcbiAgICAgICAgICAgIC8vIH0sIHtcbiAgICAgICAgICAgIC8vICAgICBpZDogMixcbiAgICAgICAgICAgIC8vICAgICB1cmw6ICdodHRwOi8vc3RhdGljLmh0eHEubmV0L1VwbG9hZEZpbGVzLzIwMTcvMTEvMTMvMTUxMDU0MTUwNjYyNjAxMTQ5MC5qcGcnXG4gICAgICAgICAgICAvLyB9LCB7XG4gICAgICAgICAgICAvLyAgICAgaWQ6IDMsXG4gICAgICAgICAgICAvLyAgICAgdXJsOiAnaHR0cDovL3N0YXRpYy5odHhxLm5ldC9VcGxvYWRGaWxlcy8yMDE3LzExLzEzLzE1MTA1NDIyMTQ0OTQwNzkzODQuanBnJ1xuICAgICAgICAgICAgLy8gfSwge1xuICAgICAgICAgICAgLy8gICAgIGlkOiA0LFxuICAgICAgICAgICAgLy8gICAgIHVybDogJ2h0dHA6Ly9zdGF0aWMuaHR4cS5uZXQvVXBsb2FkRmlsZXMvMjAxNy8xMS8xMy8xNTEwNTQyMjE1MDE3MDI2OTQ0LmpwZydcbiAgICAgICAgICAgIC8vIH0sIHtcbiAgICAgICAgICAgIC8vICAgICBpZDogNSxcbiAgICAgICAgICAgIC8vICAgICB1cmw6ICdodHRwOi8vc3RhdGljLmh0eHEubmV0L1VwbG9hZEZpbGVzLzIwMTcvMTEvMTMvMTUxMDU0MjIxNTIyMDA5MjI5NC5qcGcnXG4gICAgICAgICAgICAvLyB9LCB7XG4gICAgICAgICAgICAvLyAgICAgaWQ6IDYsXG4gICAgICAgICAgICAvLyAgICAgdXJsOiAnaHR0cDovL3N0YXRpYy5odHhxLm5ldC9VcGxvYWRGaWxlcy8yMDE3LzExLzEzLzE1MTA1NDI2MjgzNDcwMzU2NzQuanBnJ1xuICAgICAgICAgICAgLy8gfSwge1xuICAgICAgICAgICAgLy8gICAgIGlkOiA2LFxuICAgICAgICAgICAgLy8gICAgIHVybDogJ2h0dHA6Ly9zdGF0aWMuaHR4cS5uZXQvVXBsb2FkRmlsZXMvMjAxNy8xMS8xMy8xNTEwNTQzNjI5MzYyMDk3MDYyLmpwZydcbiAgICAgICAgICAgIC8vIH0sIHtcbiAgICAgICAgICAgIC8vICAgICBpZDogNixcbiAgICAgICAgICAgIC8vICAgICB1cmw6ICdodHRwOi8vc3RhdGljLmh0eHEubmV0L1VwbG9hZEZpbGVzLzIwMTcvMTEvMTMvMTUxMDU0MzYzMDQxMzA4MDQ3Ni5qcGcnXG4gICAgICAgICAgICAvLyB9LCB7XG4gICAgICAgICAgICAvLyAgICAgaWQ6IDYsXG4gICAgICAgICAgICAvLyAgICAgdXJsOiAnaHR0cDovL3N0YXRpYy5odHhxLm5ldC9VcGxvYWRGaWxlcy8yMDE3LzExLzEzLzE1MTA1NDM2MzAzOTIwOTM1NDEuanBnJ1xuICAgICAgICAgICAgLy8gfSwge1xuICAgICAgICAgICAgLy8gICAgIGlkOiA2LFxuICAgICAgICAgICAgLy8gICAgIHVybDogJ2h0dHA6Ly9zdGF0aWMuaHR4cS5uZXQvVXBsb2FkRmlsZXMvMjAxNy8xMS8xMy8xNTEwNTQ0ODkxOTAxMDIzNTM2LmpwZydcbiAgICAgICAgICAgIC8vIH1dXG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgc2VsZWN0U3dpcGVyKGUpIHtcbiAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IGAuLi8uLi9wYWdlcy9yZWNvbW1lbmQvaW5kZXg/aWQ9JHtlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZH1gXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZWxlY3RMaXN0KGUpIHtcbiAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IGAuLi8uLi9wYWdlcy9kZXRhaWwvbW9tZW50P2lkPSR7ZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWR9YFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VsZWN0RGlzY3VzcyhlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQpXG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgLi4vLi4vcGFnZXMvZGlzY3Vzcy9pbmRleD9pZD0ke2UuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkfSZ0ZXh0PSR7ZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudGV4dCB8fCAnJ31gXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiJdfQ==