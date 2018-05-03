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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiZGF0YSIsImxpc3QiLCJ0aXRsZSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIm1ldGhvZHMiLCJzZWxlY3RMaXN0IiwiZSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImlkIiwib3B0aW9ucyIsImN1cnJlbnRDYXRlZ29yeSIsImZpbHRlciIsIml0ZW0iLCJwYXJzZUludCIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLEksR0FBTztBQUNIQyx5Q0FERztBQUVIQyxtQkFBTztBQUZKLFMsUUFLUkMsTyxHQUFVLEUsUUFDakJDLE0sR0FBUyxFQUFDLFdBQVUsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixxQkFBb0IsT0FBdkMsRUFBWCxFQUEyRCxVQUFTLEVBQUMsU0FBUSxNQUFULEVBQWdCLG9CQUFtQixNQUFuQyxFQUEwQyxjQUFhLEVBQXZELEVBQXBFLEUsUUFDVEMsTyxHQUFVLEVBQUMsVUFBUyxFQUFDLGtCQUFpQixZQUFsQixFQUFWLEUsUUFDVEMsVSxHQUFhO0FBQ0Ysc0NBREU7QUFFRjtBQUZFLFMsUUFLTkMsTyxHQUFVO0FBQ05DLHNCQURNLHNCQUNLQyxDQURMLEVBQ1E7QUFDViwrQkFBS0MsVUFBTCxDQUFnQjtBQUNaQyw2REFBdUNGLEVBQUVHLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCQztBQURuRCxpQkFBaEI7QUFHSDtBQUxLLFM7Ozs7OytCQU9IQyxPLEVBQVM7QUFDWixnQkFBTUMsa0JBQWtCLG1CQUFTQyxNQUFULENBQWdCLFVBQUNDLElBQUQsRUFBVTtBQUM5Qyx1QkFBT0EsS0FBS0osRUFBTCxLQUFZSyxTQUFTSixRQUFRRCxFQUFqQixDQUFuQjtBQUNILGFBRnVCLENBQXhCO0FBR0EsaUJBQUtaLEtBQUwsR0FBYWMsZ0JBQWdCLENBQWhCLEVBQW1CZCxLQUFoQztBQUNBLDJCQUFLa0IscUJBQUwsQ0FBMkI7QUFDdkJsQix1QkFBTyxLQUFLQTtBQURXLGFBQTNCO0FBR0g7Ozs7RUE3QjhCLGVBQUttQixJOztrQkFBbkJ0QixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgdGl0bGVDb21wb25lbnQgZnJvbSAnQC9jb21wb25lbnRzL3RpdGxlJ1xuICAgIGltcG9ydCBsaXN0Q29tcG9uZW50IGZyb20gJ0AvY29tcG9uZW50cy9saXN0J1xuICAgIGltcG9ydCB7IGNhdGVnb3J5LCByZWNvbW1lbmRMaXN0IH0gZnJvbSAnQC9tb2R1bGVzL21vY2tEYXRhJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgbGlzdDogcmVjb21tZW5kTGlzdCxcbiAgICAgICAgICAgIHRpdGxlOiAnJ1xuICAgICAgICB9XG5cbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInYtdGl0bGVcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRpdGxlLnN5bmNcIjpcInRpdGxlXCJ9LFwidi1saXN0XCI6e1wiY2xhc3NcIjpcImxpc3RcIixcInYtYmluZDpsaXN0Lm9uY2VcIjpcImxpc3RcIixcInhtbG5zOnYtb25cIjpcIlwifX07XHJcbiRldmVudHMgPSB7XCJ2LWxpc3RcIjp7XCJ2LW9uOml0ZW1DbGlja1wiOlwic2VsZWN0TGlzdFwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgJ3YtdGl0bGUnOiB0aXRsZUNvbXBvbmVudCxcbiAgICAgICAgICAgICd2LWxpc3QnOiBsaXN0Q29tcG9uZW50XG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgc2VsZWN0TGlzdChlKSB7XG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgLi4vLi4vcGFnZXMvcmVjb21tZW5kL2luZGV4P2lkPSR7ZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWR9YFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDYXRlZ29yeSA9IGNhdGVnb3J5LmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmlkID09PSBwYXJzZUludChvcHRpb25zLmlkKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSBjdXJyZW50Q2F0ZWdvcnlbMF0udGl0bGVcbiAgICAgICAgICAgIHdlcHkuc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==