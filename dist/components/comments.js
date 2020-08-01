'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _utils = require('./../modules/common/utils.js');

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
            comments: Array
        }, _this.computed = {
            newComments: function newComments() {
                return this.comments.map(function (i) {
                    var user = i.user || {};
                    i.created_at = (0, _utils.timeTransform)(i.created_at);
                    i.avator = user.avatarUrl;
                    i.nickName = user.nickName;
                    return i;
                });
            }
        }, _this.methods = {
            goUserInfo: function goUserInfo(e) {
                _wepy2.default.navigateTo({
                    url: '../me/user?id=' + e.currentTarget.dataset.userid
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnRzLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJjb21tZW50cyIsIkFycmF5IiwiY29tcHV0ZWQiLCJuZXdDb21tZW50cyIsIm1hcCIsInVzZXIiLCJpIiwiY3JlYXRlZF9hdCIsImF2YXRvciIsImF2YXRhclVybCIsIm5pY2tOYW1lIiwibWV0aG9kcyIsImdvVXNlckluZm8iLCJlIiwid2VweSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInVzZXJpZCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsSyxHQUFRO0FBQ0pDLHNCQUFVQztBQUROLFMsUUFHUkMsUSxHQUFXO0FBQ1BDLHVCQURPLHlCQUNRO0FBQ1gsdUJBQU8sS0FBS0gsUUFBTCxDQUFjSSxHQUFkLENBQWtCLGFBQUs7QUFDMUIsd0JBQU1DLE9BQU9DLEVBQUVELElBQUYsSUFBVSxFQUF2QjtBQUNBQyxzQkFBRUMsVUFBRixHQUFlLDBCQUFjRCxFQUFFQyxVQUFoQixDQUFmO0FBQ0FELHNCQUFFRSxNQUFGLEdBQVdILEtBQUtJLFNBQWhCO0FBQ0FILHNCQUFFSSxRQUFGLEdBQWFMLEtBQUtLLFFBQWxCO0FBQ0EsMkJBQU9KLENBQVA7QUFDSCxpQkFOTSxDQUFQO0FBT0g7QUFUTSxTLFFBV1hLLE8sR0FBVTtBQUNOQyxzQkFETSxzQkFDTUMsQ0FETixFQUNTO0FBQ1hDLCtCQUFLQyxVQUFMLENBQWdCO0FBQ1pDLDRDQUFzQkgsRUFBRUksYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JDO0FBRGxDLGlCQUFoQjtBQUdIO0FBTEssUzs7OztFQWZxQkwsZUFBS00sUzs7a0JBQW5CdEIsSyIsImZpbGUiOiJjb21tZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IHsgdGltZVRyYW5zZm9ybSB9IGZyb20gJ0AvbW9kdWxlcy9jb21tb24vdXRpbHMnXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICBjb21tZW50czogQXJyYXlcbiAgICAgICAgfVxuICAgICAgICBjb21wdXRlZCA9IHtcbiAgICAgICAgICAgIG5ld0NvbW1lbnRzICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb21tZW50cy5tYXAoaSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBpLnVzZXIgfHwge31cbiAgICAgICAgICAgICAgICAgICAgaS5jcmVhdGVkX2F0ID0gdGltZVRyYW5zZm9ybShpLmNyZWF0ZWRfYXQpXG4gICAgICAgICAgICAgICAgICAgIGkuYXZhdG9yID0gdXNlci5hdmF0YXJVcmxcbiAgICAgICAgICAgICAgICAgICAgaS5uaWNrTmFtZSA9IHVzZXIubmlja05hbWVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBnb1VzZXJJbmZvIChlKSB7XG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgLi4vbWUvdXNlcj9pZD0ke2UuY3VycmVudFRhcmdldC5kYXRhc2V0LnVzZXJpZH1gXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiJdfQ==