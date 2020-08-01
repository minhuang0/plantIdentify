'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _title = require('./../../components/title.js');

var _title2 = _interopRequireDefault(_title);

var _list = require('./../../components/list.js');

var _list2 = _interopRequireDefault(_list);

var _mockData = require('./../../modules/mockData.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            list: _mockData.recommendList,
            title: ''
        }, _this.$repeat = {}, _this.$props = { "v-title": { "xmlns:v-bind": "", "v-bind:title.sync": "title" }, "v-list": { "class": "list", "v-bind:list.once": "list", "xmlns:v-on": "" } }, _this.$events = { "v-list": { "v-on:itemClick": "selectList" } }, _this.components = {
            'v-title': _title2.default,
            'v-list': _list2.default
        }, _this.methods = {
            selectList: function selectList(e) {
                _wepy2.default.navigateTo({
                    url: '../../pages/recommend/index?id=' + e.currentTarget.dataset.id
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad(options) {
            var currentCategory = _mockData.category.filter(function (item) {
                return item.id === parseInt(options.id);
            });
            this.title = currentCategory[0].title;
            _wepy2.default.setNavigationBarTitle({
                title: this.title
            });
        }
    }]);

    return Index;
}(_wepy2.default.page);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiZGF0YSIsImxpc3QiLCJyZWNvbW1lbmRMaXN0IiwidGl0bGUiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJ0aXRsZUNvbXBvbmVudCIsImxpc3RDb21wb25lbnQiLCJtZXRob2RzIiwic2VsZWN0TGlzdCIsImUiLCJ3ZXB5IiwibmF2aWdhdGVUbyIsInVybCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaWQiLCJvcHRpb25zIiwiY3VycmVudENhdGVnb3J5IiwiY2F0ZWdvcnkiLCJmaWx0ZXIiLCJpdGVtIiwicGFyc2VJbnQiLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxJLEdBQU87QUFDSEMsa0JBQU1DLHVCQURIO0FBRUhDLG1CQUFPO0FBRkosUyxRQUtSQyxPLEdBQVUsRSxRQUNqQkMsTSxHQUFTLEVBQUMsV0FBVSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHFCQUFvQixPQUF2QyxFQUFYLEVBQTJELFVBQVMsRUFBQyxTQUFRLE1BQVQsRUFBZ0Isb0JBQW1CLE1BQW5DLEVBQTBDLGNBQWEsRUFBdkQsRUFBcEUsRSxRQUNUQyxPLEdBQVUsRUFBQyxVQUFTLEVBQUMsa0JBQWlCLFlBQWxCLEVBQVYsRSxRQUNUQyxVLEdBQWE7QUFDRix1QkFBV0MsZUFEVDtBQUVGLHNCQUFVQztBQUZSLFMsUUFLTkMsTyxHQUFVO0FBQ05DLHNCQURNLHNCQUNLQyxDQURMLEVBQ1E7QUFDVkMsK0JBQUtDLFVBQUwsQ0FBZ0I7QUFDWkMsNkRBQXVDSCxFQUFFSSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkM7QUFEbkQsaUJBQWhCO0FBR0g7QUFMSyxTOzs7OzsrQkFPSEMsTyxFQUFTO0FBQ1osZ0JBQU1DLGtCQUFrQkMsbUJBQVNDLE1BQVQsQ0FBZ0IsVUFBQ0MsSUFBRCxFQUFVO0FBQzlDLHVCQUFPQSxLQUFLTCxFQUFMLEtBQVlNLFNBQVNMLFFBQVFELEVBQWpCLENBQW5CO0FBQ0gsYUFGdUIsQ0FBeEI7QUFHQSxpQkFBS2YsS0FBTCxHQUFhaUIsZ0JBQWdCLENBQWhCLEVBQW1CakIsS0FBaEM7QUFDQVUsMkJBQUtZLHFCQUFMLENBQTJCO0FBQ3ZCdEIsdUJBQU8sS0FBS0E7QUFEVyxhQUEzQjtBQUdIOzs7O0VBN0I4QlUsZUFBS2EsSTs7a0JBQW5CM0IsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IHRpdGxlQ29tcG9uZW50IGZyb20gJ0AvY29tcG9uZW50cy90aXRsZSdcbiAgICBpbXBvcnQgbGlzdENvbXBvbmVudCBmcm9tICdAL2NvbXBvbmVudHMvbGlzdCdcbiAgICBpbXBvcnQgeyBjYXRlZ29yeSwgcmVjb21tZW5kTGlzdCB9IGZyb20gJ0AvbW9kdWxlcy9tb2NrRGF0YSdcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGxpc3Q6IHJlY29tbWVuZExpc3QsXG4gICAgICAgICAgICB0aXRsZTogJydcbiAgICAgICAgfVxuXG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJ2LXRpdGxlXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0aXRsZS5zeW5jXCI6XCJ0aXRsZVwifSxcInYtbGlzdFwiOntcImNsYXNzXCI6XCJsaXN0XCIsXCJ2LWJpbmQ6bGlzdC5vbmNlXCI6XCJsaXN0XCIsXCJ4bWxuczp2LW9uXCI6XCJcIn19O1xyXG4kZXZlbnRzID0ge1widi1saXN0XCI6e1widi1vbjppdGVtQ2xpY2tcIjpcInNlbGVjdExpc3RcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgICd2LXRpdGxlJzogdGl0bGVDb21wb25lbnQsXG4gICAgICAgICAgICAndi1saXN0JzogbGlzdENvbXBvbmVudFxuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIHNlbGVjdExpc3QoZSkge1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogYC4uLy4uL3BhZ2VzL3JlY29tbWVuZC9pbmRleD9pZD0ke2UuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkfWBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG9uTG9hZChvcHRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Q2F0ZWdvcnkgPSBjYXRlZ29yeS5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5pZCA9PT0gcGFyc2VJbnQob3B0aW9ucy5pZClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gY3VycmVudENhdGVnb3J5WzBdLnRpdGxlXG4gICAgICAgICAgICB3ZXB5LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4iXX0=