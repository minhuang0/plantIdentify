'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '花瓣'
        }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'getLocation',
        value: function getLocation() {
            return new Promise(function (resolve) {
                _wepy2.default.getLocation({
                    type: 'wgs84',
                    success: function success(res) {
                        resolve(res);
                    }
                });
            });
        }
    }, {
        key: 'openLocation',
        value: function openLocation(res) {
            var latitude = res.latitude,
                longitude = res.longitude;

            _wepy2.default.openLocation({
                latitude: latitude,
                longitude: longitude
            });
        }
    }, {
        key: 'onLoad',
        value: function onLoad() {
            var _this2 = this;

            this.getLocation().then(function (res) {
                return _this2.openLocation;
            });
        }
    }]);

    return Index;
}(_wepy2.default.page);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJtZXRob2RzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ3ZXB5IiwiZ2V0TG9jYXRpb24iLCJ0eXBlIiwic3VjY2VzcyIsInJlcyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwib3BlbkxvY2F0aW9uIiwidGhlbiIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QjtBQURuQixTLFFBR1RDLE8sR0FBVSxFOzs7OztzQ0FFSztBQUNYLG1CQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQWE7QUFDNUJDLCtCQUFLQyxXQUFMLENBQWlCO0FBQ2JDLDBCQUFNLE9BRE87QUFFYkMsNkJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNuQkwsZ0NBQVFLLEdBQVI7QUFDSDtBQUpZLGlCQUFqQjtBQU1ILGFBUE0sQ0FBUDtBQVFIOzs7cUNBQ2FBLEcsRUFBSztBQUFBLGdCQUNQQyxRQURPLEdBQ2lCRCxHQURqQixDQUNQQyxRQURPO0FBQUEsZ0JBQ0dDLFNBREgsR0FDaUJGLEdBRGpCLENBQ0dFLFNBREg7O0FBRWZOLDJCQUFLTyxZQUFMLENBQWtCO0FBQ2RGLGtDQURjO0FBRWRDO0FBRmMsYUFBbEI7QUFJSDs7O2lDQUNTO0FBQUE7O0FBQ04saUJBQUtMLFdBQUwsR0FBbUJPLElBQW5CLENBQXdCLFVBQUNKLEdBQUQ7QUFBQSx1QkFBUyxPQUFLRyxZQUFkO0FBQUEsYUFBeEI7QUFDSDs7OztFQXpCOEJQLGVBQUtTLEk7O2tCQUFuQmYsSyIsImZpbGUiOiJtYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6Iqx55OjJ1xuICAgICAgICB9XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0TG9jYXRpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgd2VweS5nZXRMb2NhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICd3Z3M4NCcsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBvcGVuTG9jYXRpb24gKHJlcykge1xuICAgICAgICAgICAgY29uc3QgeyBsYXRpdHVkZSwgbG9uZ2l0dWRlIH0gPSByZXNcbiAgICAgICAgICAgIHdlcHkub3BlbkxvY2F0aW9uKHtcbiAgICAgICAgICAgICAgICBsYXRpdHVkZSxcbiAgICAgICAgICAgICAgICBsb25naXR1ZGVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgb25Mb2FkICgpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0TG9jYXRpb24oKS50aGVuKChyZXMpID0+IHRoaXMub3BlbkxvY2F0aW9uKVxuICAgICAgICB9XG4gICAgfVxuIl19