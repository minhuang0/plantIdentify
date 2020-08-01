'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _title = require('./../../components/title.js');

var _title2 = _interopRequireDefault(_title);

var _course = require('./../../components/course.js');

var _course2 = _interopRequireDefault(_course);

var _utils = require('./../../modules/common/utils.js');

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
            forgenData: Array
        }, _this.$repeat = { "lists": { "com": "v-course", "props": "" } }, _this.$props = { "v-title": { "xmlns:v-bind": { "value": "", "for": "lists", "item": "item", "index": "index", "key": "index" }, "v-bind:title.sync": { "value": "item.categoryName", "for": "lists", "item": "item", "index": "index", "key": "index" } }, "v-course": { "class": { "value": "list", "for": "lists", "item": "item", "index": "index", "key": "index" }, "v-bind:type.sync": { "value": "item.type", "for": "lists", "item": "item", "index": "index", "key": "index" }, "v-bind:list.sync": { "value": "item.list", "for": "lists", "item": "item", "index": "index", "key": "index" }, "xmlns:v-on": { "value": "", "for": "lists", "item": "item", "index": "index", "key": "index" } } }, _this.$events = { "v-course": { "v-on:click": "selectList" } }, _this.components = {
            'v-title': _title2.default,
            'v-course': _course2.default
        }, _this.computed = {
            lists: function lists() {
                return this.forgenData.map(function (item) {
                    return {
                        id: item.id,
                        categoryName: item.name,
                        list: item.posts.map(function (i) {
                            return {
                                id: i.id,
                                tag: i.topics.reduce(function (value, t) {
                                    return value + ' #' + t.name + '#';
                                }, ''),
                                title: i.title,
                                cover: i.imgUrl,
                                description: (0, _utils.maxLength)(i.description)
                            };
                        })
                    };
                });
            }
        }, _this.methods = {
            selectList: function selectList(e) {
                _wepy2.default.navigateTo({
                    url: '../../pages/recommend/index?id=' + e.currentTarget.dataset.id
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdlbi5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwiZm9yZ2VuRGF0YSIsIkFycmF5IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwidGl0bGVDb21wb25lbnQiLCJjb3Vyc2VDb21wb25lbnQiLCJjb21wdXRlZCIsImxpc3RzIiwibWFwIiwiaWQiLCJpdGVtIiwiY2F0ZWdvcnlOYW1lIiwibmFtZSIsImxpc3QiLCJwb3N0cyIsImkiLCJ0YWciLCJ0b3BpY3MiLCJyZWR1Y2UiLCJ2YWx1ZSIsInQiLCJ0aXRsZSIsImNvdmVyIiwiaW1nVXJsIiwiZGVzY3JpcHRpb24iLCJtZXRob2RzIiwic2VsZWN0TGlzdCIsImUiLCJ3ZXB5IiwibmF2aWdhdGVUbyIsInVybCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsSyxHQUFRO0FBQ0pDLHdCQUFZQztBQURSLFMsUUFJVEMsTyxHQUFVLEVBQUMsU0FBUSxFQUFDLE9BQU0sVUFBUCxFQUFrQixTQUFRLEVBQTFCLEVBQVQsRSxRQUNqQkMsTSxHQUFTLEVBQUMsV0FBVSxFQUFDLGdCQUFlLEVBQUMsU0FBUSxFQUFULEVBQVksT0FBTSxPQUFsQixFQUEwQixRQUFPLE1BQWpDLEVBQXdDLFNBQVEsT0FBaEQsRUFBd0QsT0FBTSxPQUE5RCxFQUFoQixFQUF1RixxQkFBb0IsRUFBQyxTQUFRLG1CQUFULEVBQTZCLE9BQU0sT0FBbkMsRUFBMkMsUUFBTyxNQUFsRCxFQUF5RCxTQUFRLE9BQWpFLEVBQXlFLE9BQU0sT0FBL0UsRUFBM0csRUFBWCxFQUErTSxZQUFXLEVBQUMsU0FBUSxFQUFDLFNBQVEsTUFBVCxFQUFnQixPQUFNLE9BQXRCLEVBQThCLFFBQU8sTUFBckMsRUFBNEMsU0FBUSxPQUFwRCxFQUE0RCxPQUFNLE9BQWxFLEVBQVQsRUFBb0Ysb0JBQW1CLEVBQUMsU0FBUSxXQUFULEVBQXFCLE9BQU0sT0FBM0IsRUFBbUMsUUFBTyxNQUExQyxFQUFpRCxTQUFRLE9BQXpELEVBQWlFLE9BQU0sT0FBdkUsRUFBdkcsRUFBdUwsb0JBQW1CLEVBQUMsU0FBUSxXQUFULEVBQXFCLE9BQU0sT0FBM0IsRUFBbUMsUUFBTyxNQUExQyxFQUFpRCxTQUFRLE9BQXpELEVBQWlFLE9BQU0sT0FBdkUsRUFBMU0sRUFBMFIsY0FBYSxFQUFDLFNBQVEsRUFBVCxFQUFZLE9BQU0sT0FBbEIsRUFBMEIsUUFBTyxNQUFqQyxFQUF3QyxTQUFRLE9BQWhELEVBQXdELE9BQU0sT0FBOUQsRUFBdlMsRUFBMU4sRSxRQUNUQyxPLEdBQVUsRUFBQyxZQUFXLEVBQUMsY0FBYSxZQUFkLEVBQVosRSxRQUNUQyxVLEdBQWE7QUFDRix1QkFBV0MsZUFEVDtBQUVGLHdCQUFZQztBQUZWLFMsUUFLTkMsUSxHQUFXO0FBQ1BDLGlCQURPLG1CQUNFO0FBQ0wsdUJBQU8sS0FBS1QsVUFBTCxDQUFnQlUsR0FBaEIsQ0FBb0IsZ0JBQVE7QUFDL0IsMkJBQU87QUFDSEMsNEJBQUlDLEtBQUtELEVBRE47QUFFSEUsc0NBQWNELEtBQUtFLElBRmhCO0FBR0hDLDhCQUFNSCxLQUFLSSxLQUFMLENBQVdOLEdBQVgsQ0FBZSxhQUFLO0FBQ3RCLG1DQUFPO0FBQ0hDLG9DQUFJTSxFQUFFTixFQURIO0FBRUhPLHFDQUFLRCxFQUFFRSxNQUFGLENBQVNDLE1BQVQsQ0FBZ0IsVUFBQ0MsS0FBRCxFQUFRQyxDQUFSLEVBQWM7QUFDL0IsMkNBQVVELEtBQVYsVUFBb0JDLEVBQUVSLElBQXRCO0FBQ0gsaUNBRkksRUFFRixFQUZFLENBRkY7QUFLSFMsdUNBQU9OLEVBQUVNLEtBTE47QUFNSEMsdUNBQU9QLEVBQUVRLE1BTk47QUFPSEMsNkNBQWEsc0JBQVVULEVBQUVTLFdBQVo7QUFQViw2QkFBUDtBQVNILHlCQVZLO0FBSEgscUJBQVA7QUFlSCxpQkFoQk0sQ0FBUDtBQWlCSDtBQW5CTSxTLFFBc0JYQyxPLEdBQVU7QUFDTkMsc0JBRE0sc0JBQ0tDLENBREwsRUFDUTtBQUNWQywrQkFBS0MsVUFBTCxDQUFnQjtBQUNaQyw2REFBdUNILEVBQUVJLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCdkI7QUFEbkQsaUJBQWhCO0FBR0g7QUFMSyxTOzs7O0VBbkNxQm1CLGVBQUtLLFM7O2tCQUFuQnJDLEsiLCJmaWxlIjoiZm9yZ2VuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgdGl0bGVDb21wb25lbnQgZnJvbSAnQC9jb21wb25lbnRzL3RpdGxlJ1xuICAgIGltcG9ydCBjb3Vyc2VDb21wb25lbnQgZnJvbSAnQC9jb21wb25lbnRzL2NvdXJzZSdcbiAgICBpbXBvcnQgeyBtYXhMZW5ndGggfSBmcm9tICdAL21vZHVsZXMvY29tbW9uL3V0aWxzJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgZm9yZ2VuRGF0YTogQXJyYXlcbiAgICAgICAgfVxuXG4gICAgICAgJHJlcGVhdCA9IHtcImxpc3RzXCI6e1wiY29tXCI6XCJ2LWNvdXJzZVwiLFwicHJvcHNcIjpcIlwifX07XHJcbiRwcm9wcyA9IHtcInYtdGl0bGVcIjp7XCJ4bWxuczp2LWJpbmRcIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcImxpc3RzXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6dGl0bGUuc3luY1wiOntcInZhbHVlXCI6XCJpdGVtLmNhdGVnb3J5TmFtZVwiLFwiZm9yXCI6XCJsaXN0c1wiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9fSxcInYtY291cnNlXCI6e1wiY2xhc3NcIjp7XCJ2YWx1ZVwiOlwibGlzdFwiLFwiZm9yXCI6XCJsaXN0c1wiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwidi1iaW5kOnR5cGUuc3luY1wiOntcInZhbHVlXCI6XCJpdGVtLnR5cGVcIixcImZvclwiOlwibGlzdHNcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInYtYmluZDpsaXN0LnN5bmNcIjp7XCJ2YWx1ZVwiOlwiaXRlbS5saXN0XCIsXCJmb3JcIjpcImxpc3RzXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ4bWxuczp2LW9uXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJsaXN0c1wiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9fX07XHJcbiRldmVudHMgPSB7XCJ2LWNvdXJzZVwiOntcInYtb246Y2xpY2tcIjpcInNlbGVjdExpc3RcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgICd2LXRpdGxlJzogdGl0bGVDb21wb25lbnQsXG4gICAgICAgICAgICAndi1jb3Vyc2UnOiBjb3Vyc2VDb21wb25lbnRcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXB1dGVkID0ge1xuICAgICAgICAgICAgbGlzdHMgKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZvcmdlbkRhdGEubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeU5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Q6IGl0ZW0ucG9zdHMubWFwKGkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6IGkudG9waWNzLnJlZHVjZSgodmFsdWUsIHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgJHt2YWx1ZX0gIyR7dC5uYW1lfSNgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sICcnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGkudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdmVyOiBpLmltZ1VybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IG1heExlbmd0aChpLmRlc2NyaXB0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIHNlbGVjdExpc3QoZSkge1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogYC4uLy4uL3BhZ2VzL3JlY29tbWVuZC9pbmRleD9pZD0ke2UuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkfWBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuIl19