'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import abc from 'abc'

var Counter = function (_wepy$component) {
    _inherits(Counter, _wepy$component);

    function Counter() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Counter);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Counter.__proto__ || Object.getPrototypeOf(Counter)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Counter;
}(_wepy2.default.component);

var _initialiseProps = function _initialiseProps() {
    this.props = {
        num: {
            type: [Number, String],
            coerce: function coerce(v) {
                return +v;
            },
            default: 50
        }
    };
    this.data = {};
    this.events = {
        'index-broadcast': function indexBroadcast() {
            var _ref2;

            var $event = (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]);
        }
    };
    this.watch = {
        num: function num(curVal, oldVal) {}
    };
    this.methods = {
        plus: function plus() {
            this.num = this.num + 1;

            this.$emit('index-emit', 1, 2, 3);
        },
        minus: function minus() {
            this.num = this.num - 1;
        }
    };
};

exports.default = Counter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50ZXIuanMiXSwibmFtZXMiOlsiQ291bnRlciIsImNvbXBvbmVudCIsInByb3BzIiwibnVtIiwidHlwZSIsIk51bWJlciIsIlN0cmluZyIsImNvZXJjZSIsInYiLCJkZWZhdWx0IiwiZGF0YSIsImV2ZW50cyIsIiRldmVudCIsImxlbmd0aCIsIndhdGNoIiwiY3VyVmFsIiwib2xkVmFsIiwibWV0aG9kcyIsInBsdXMiLCIkZW1pdCIsIm1pbnVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7OztBQUNBOztJQUVxQkEsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQWdCLGVBQUtDLFM7OztTQUN0Q0MsSyxHQUFRO0FBQ0pDLGFBQUs7QUFDREMsa0JBQU0sQ0FBQ0MsTUFBRCxFQUFTQyxNQUFULENBREw7QUFFREMsb0JBQVEsZ0JBQVVDLENBQVYsRUFBYTtBQUNqQix1QkFBTyxDQUFDQSxDQUFSO0FBQ0gsYUFKQTtBQUtEQyxxQkFBUztBQUxSO0FBREQsSztTQVVSQyxJLEdBQU8sRTtTQUVQQyxNLEdBQVM7QUFDTCwyQkFBbUIsMEJBQWE7QUFBQTs7QUFDNUIsZ0JBQUlDLGtCQUFjLFVBQUtDLE1BQUwsR0FBYyxDQUE1QiwyREFBSjtBQUNIO0FBSEksSztTQU1UQyxLLEdBQVE7QUFDSlgsV0FESSxlQUNBWSxNQURBLEVBQ1FDLE1BRFIsRUFDZ0IsQ0FDbkI7QUFGRyxLO1NBS1JDLE8sR0FBVTtBQUNOQyxZQURNLGtCQUNDO0FBQ0gsaUJBQUtmLEdBQUwsR0FBVyxLQUFLQSxHQUFMLEdBQVcsQ0FBdEI7O0FBRUEsaUJBQUtnQixLQUFMLENBQVcsWUFBWCxFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQjtBQUNILFNBTEs7QUFNTkMsYUFOTSxtQkFNRTtBQUNKLGlCQUFLakIsR0FBTCxHQUFXLEtBQUtBLEdBQUwsR0FBVyxDQUF0QjtBQUNIO0FBUkssSzs7O2tCQXhCT0gsTyIsImZpbGUiOiJjb3VudGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICAvLyBpbXBvcnQgYWJjIGZyb20gJ2FiYydcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdW50ZXIgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgbnVtOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgICAgICAgICAgICBjb2VyY2U6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiArdlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogNTBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnRzID0ge1xuICAgICAgICAgICAgJ2luZGV4LWJyb2FkY2FzdCc6ICguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0ICRldmVudCA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2F0Y2ggPSB7XG4gICAgICAgICAgICBudW0oY3VyVmFsLCBvbGRWYWwpIHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBwbHVzKCkge1xuICAgICAgICAgICAgICAgIHRoaXMubnVtID0gdGhpcy5udW0gKyAxXG5cbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdpbmRleC1lbWl0JywgMSwgMiwgMylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtaW51cygpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm51bSA9IHRoaXMubnVtIC0gMVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuIl19