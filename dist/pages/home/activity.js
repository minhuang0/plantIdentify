'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _activity = require('./../../components/activity.js');

var _activity2 = _interopRequireDefault(_activity);

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
            activityData: Array
        }, _this.$repeat = { "activities": { "com": "v-activity", "props": "item.sync" } }, _this.$props = { "v-activity": { "xmlns:v-bind": { "value": "", "for": "activities", "item": "item", "index": "index", "key": "index" }, "v-bind:item.sync": { "value": "item", "type": "item", "for": "activities", "item": "item", "index": "index", "key": "index" }, "xmlns:v-on": { "value": "", "for": "activities", "item": "item", "index": "index", "key": "index" } } }, _this.$events = { "v-activity": { "v-on:click": "selectActivity" } }, _this.components = {
            'v-activity': _activity2.default
        }, _this.computed = {
            activities: function activities() {
                return this.activityData.map(function (i) {
                    return {
                        id: i.id,
                        cover: i.imgUrl,
                        title: i.title,
                        description: i.description
                    };
                });
            }
        }, _this.methods = {
            selectActivity: function selectActivity(e) {
                _wepy2.default.navigateTo({
                    url: '../../pages/recommend/index?id=' + e.currentTarget.dataset.id
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    // data = {
    //     activities: [{
    //         id: 1,
    //         cover: 'https://modao.cc/uploads3/images/1030/10303683/raw_1497508860.jpeg',
    //         title: '森林蘑菇总动员亲子厨房大赛',
    //         time: '2017-07-18 15:00:00',
    //         address: '北京',
    //         description: '报名时间：2月1日至2月25日\n报名电话：18210237062 88892960\n幼儿年龄：6-12岁'
    //     }, {
    //         id: 2,
    //         cover: 'https://modao.cc/uploads3/images/1030/10303685/raw_1497508861.jpeg',
    //         title: '向自然学习的生活方式',
    //         time: '2017-07-18 15:00:00',
    //         address: '北京',
    //         description: '时间：2017年1月4日 14:00\n内容：向自然学习的生活方式\n讲师：中医文史研究会副会长 王黑特'
    //     }, {
    //         id: 3,
    //         cover: 'https://modao.cc/uploads3/images/1026/10260002/raw_1497399725.jpeg',
    //         title: '“体验自然”森林旅行团开团啦！',
    //         time: '2017-07-18 15:00:00',
    //         address: '北京',
    //         description: '时间：2017年9月26日-10月9日\n旅行地点：河北塞罕坝国家森林公园'
    //     }]
    // }

    return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2aXR5LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJhY3Rpdml0eURhdGEiLCJBcnJheSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNvbXB1dGVkIiwiYWN0aXZpdGllcyIsIm1hcCIsImlkIiwiaSIsImNvdmVyIiwiaW1nVXJsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm1ldGhvZHMiLCJzZWxlY3RBY3Rpdml0eSIsImUiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsSyxHQUFRO0FBQ0pDLDBCQUFjQztBQURWLFMsUUFHVEMsTyxHQUFVLEVBQUMsY0FBYSxFQUFDLE9BQU0sWUFBUCxFQUFvQixTQUFRLFdBQTVCLEVBQWQsRSxRQUNqQkMsTSxHQUFTLEVBQUMsY0FBYSxFQUFDLGdCQUFlLEVBQUMsU0FBUSxFQUFULEVBQVksT0FBTSxZQUFsQixFQUErQixRQUFPLE1BQXRDLEVBQTZDLFNBQVEsT0FBckQsRUFBNkQsT0FBTSxPQUFuRSxFQUFoQixFQUE0RixvQkFBbUIsRUFBQyxTQUFRLE1BQVQsRUFBZ0IsUUFBTyxNQUF2QixFQUE4QixPQUFNLFlBQXBDLEVBQWlELFFBQU8sTUFBeEQsRUFBK0QsU0FBUSxPQUF2RSxFQUErRSxPQUFNLE9BQXJGLEVBQS9HLEVBQTZNLGNBQWEsRUFBQyxTQUFRLEVBQVQsRUFBWSxPQUFNLFlBQWxCLEVBQStCLFFBQU8sTUFBdEMsRUFBNkMsU0FBUSxPQUFyRCxFQUE2RCxPQUFNLE9BQW5FLEVBQTFOLEVBQWQsRSxRQUNUQyxPLEdBQVUsRUFBQyxjQUFhLEVBQUMsY0FBYSxnQkFBZCxFQUFkLEUsUUFDVEMsVSxHQUFhO0FBQ0Y7QUFERSxTLFFBSU5DLFEsR0FBVztBQUNQQyxzQkFETyx3QkFDTztBQUNWLHVCQUFPLEtBQUtQLFlBQUwsQ0FBa0JRLEdBQWxCLENBQXNCLGFBQUs7QUFDOUIsMkJBQU87QUFDSEMsNEJBQUlDLEVBQUVELEVBREg7QUFFSEUsK0JBQU9ELEVBQUVFLE1BRk47QUFHSEMsK0JBQU9ILEVBQUVHLEtBSE47QUFJSEMscUNBQWFKLEVBQUVJO0FBSloscUJBQVA7QUFNSCxpQkFQTSxDQUFQO0FBUUg7QUFWTSxTLFFBc0NYQyxPLEdBQVU7QUFDTkMsMEJBRE0sMEJBQ1NDLENBRFQsRUFDWTtBQUNkLCtCQUFLQyxVQUFMLENBQWdCO0FBQ1pDLDZEQUF1Q0YsRUFBRUcsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JaO0FBRG5ELGlCQUFoQjtBQUdIO0FBTEssUzs7O0FBekJWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0VBL0MrQixlQUFLYSxTOztrQkFBbkJ4QixLIiwiZmlsZSI6ImFjdGl2aXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgYWN0aXZpdHlDb21wb25lbnQgZnJvbSAnQC9jb21wb25lbnRzL2FjdGl2aXR5J1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgYWN0aXZpdHlEYXRhOiBBcnJheVxuICAgICAgICB9XG4gICAgICAgJHJlcGVhdCA9IHtcImFjdGl2aXRpZXNcIjp7XCJjb21cIjpcInYtYWN0aXZpdHlcIixcInByb3BzXCI6XCJpdGVtLnN5bmNcIn19O1xyXG4kcHJvcHMgPSB7XCJ2LWFjdGl2aXR5XCI6e1wieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJhY3Rpdml0aWVzXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6aXRlbS5zeW5jXCI6e1widmFsdWVcIjpcIml0ZW1cIixcInR5cGVcIjpcIml0ZW1cIixcImZvclwiOlwiYWN0aXZpdGllc1wiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwieG1sbnM6di1vblwiOntcInZhbHVlXCI6XCJcIixcImZvclwiOlwiYWN0aXZpdGllc1wiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9fX07XHJcbiRldmVudHMgPSB7XCJ2LWFjdGl2aXR5XCI6e1widi1vbjpjbGlja1wiOlwic2VsZWN0QWN0aXZpdHlcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgICd2LWFjdGl2aXR5JzogYWN0aXZpdHlDb21wb25lbnRcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXB1dGVkID0ge1xuICAgICAgICAgICAgYWN0aXZpdGllcyAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZpdHlEYXRhLm1hcChpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgY292ZXI6IGkuaW1nVXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGkudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogaS5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGRhdGEgPSB7XG4gICAgICAgIC8vICAgICBhY3Rpdml0aWVzOiBbe1xuICAgICAgICAvLyAgICAgICAgIGlkOiAxLFxuICAgICAgICAvLyAgICAgICAgIGNvdmVyOiAnaHR0cHM6Ly9tb2Rhby5jYy91cGxvYWRzMy9pbWFnZXMvMTAzMC8xMDMwMzY4My9yYXdfMTQ5NzUwODg2MC5qcGVnJyxcbiAgICAgICAgLy8gICAgICAgICB0aXRsZTogJ+ajruael+iYkeiPh+aAu+WKqOWRmOS6suWtkOWOqOaIv+Wkp+i1mycsXG4gICAgICAgIC8vICAgICAgICAgdGltZTogJzIwMTctMDctMTggMTU6MDA6MDAnLFxuICAgICAgICAvLyAgICAgICAgIGFkZHJlc3M6ICfljJfkuqwnLFxuICAgICAgICAvLyAgICAgICAgIGRlc2NyaXB0aW9uOiAn5oql5ZCN5pe26Ze077yaMuaciDHml6Xoh7My5pyIMjXml6VcXG7miqXlkI3nlLXor53vvJoxODIxMDIzNzA2MiA4ODg5Mjk2MFxcbuW5vOWEv+W5tOm+hO+8mjYtMTLlsoEnXG4gICAgICAgIC8vICAgICB9LCB7XG4gICAgICAgIC8vICAgICAgICAgaWQ6IDIsXG4gICAgICAgIC8vICAgICAgICAgY292ZXI6ICdodHRwczovL21vZGFvLmNjL3VwbG9hZHMzL2ltYWdlcy8xMDMwLzEwMzAzNjg1L3Jhd18xNDk3NTA4ODYxLmpwZWcnLFxuICAgICAgICAvLyAgICAgICAgIHRpdGxlOiAn5ZCR6Ieq54S25a2m5Lmg55qE55Sf5rS75pa55byPJyxcbiAgICAgICAgLy8gICAgICAgICB0aW1lOiAnMjAxNy0wNy0xOCAxNTowMDowMCcsXG4gICAgICAgIC8vICAgICAgICAgYWRkcmVzczogJ+WMl+S6rCcsXG4gICAgICAgIC8vICAgICAgICAgZGVzY3JpcHRpb246ICfml7bpl7TvvJoyMDE35bm0MeaciDTml6UgMTQ6MDBcXG7lhoXlrrnvvJrlkJHoh6rnhLblrabkuaDnmoTnlJ/mtLvmlrnlvI9cXG7orrLluIjvvJrkuK3ljLvmloflj7LnoJTnqbbkvJrlia/kvJrplb8g546L6buR54m5J1xuICAgICAgICAvLyAgICAgfSwge1xuICAgICAgICAvLyAgICAgICAgIGlkOiAzLFxuICAgICAgICAvLyAgICAgICAgIGNvdmVyOiAnaHR0cHM6Ly9tb2Rhby5jYy91cGxvYWRzMy9pbWFnZXMvMTAyNi8xMDI2MDAwMi9yYXdfMTQ5NzM5OTcyNS5qcGVnJyxcbiAgICAgICAgLy8gICAgICAgICB0aXRsZTogJ+KAnOS9k+mqjOiHqueEtuKAneajruael+aXheihjOWbouW8gOWbouWVpu+8gScsXG4gICAgICAgIC8vICAgICAgICAgdGltZTogJzIwMTctMDctMTggMTU6MDA6MDAnLFxuICAgICAgICAvLyAgICAgICAgIGFkZHJlc3M6ICfljJfkuqwnLFxuICAgICAgICAvLyAgICAgICAgIGRlc2NyaXB0aW9uOiAn5pe26Ze077yaMjAxN+W5tDnmnIgyNuaXpS0xMOaciDnml6VcXG7ml4XooYzlnLDngrnvvJrmsrPljJfloZ7nvZXlnZ3lm73lrrbmo67mnpflhazlm60nXG4gICAgICAgIC8vICAgICB9XVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIHNlbGVjdEFjdGl2aXR5KGUpIHtcbiAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IGAuLi8uLi9wYWdlcy9yZWNvbW1lbmQvaW5kZXg/aWQ9JHtlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZH1gXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiJdfQ==