'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_wepy$component) {
    _inherits(List, _wepy$component);

    function List() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, List);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = List.__proto__ || Object.getPrototypeOf(List)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(List, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return List;
}(_wepy2.default.component);

var _initialiseProps = function _initialiseProps() {
    this.data = {
        list: [{
            id: '0',
            title: 'loading'
        }]
    };
    this.events = {
        'index-broadcast': function indexBroadcast() {
            var _ref2;

            var $event = (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]);
        }
    };
    this.methods = {
        tap: function tap() {},
        add: function add() {
            var len = this.list.length;
            this.list.push({ id: len + 1, title: 'title_' + len });
        }
    };
};

exports.default = List;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QxLmpzIl0sIm5hbWVzIjpbIkxpc3QiLCJ3ZXB5IiwiY29tcG9uZW50IiwiZGF0YSIsImxpc3QiLCJpZCIsInRpdGxlIiwiZXZlbnRzIiwiJGV2ZW50IiwibGVuZ3RoIiwibWV0aG9kcyIsInRhcCIsImFkZCIsImxlbiIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFFcUJBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBeUJSLENBQ1I7Ozs7RUExQjZCQyxlQUFLQyxTOzs7U0FDbkNDLEksR0FBTztBQUNIQyxjQUFNLENBQ0Y7QUFDSUMsZ0JBQUksR0FEUjtBQUVJQyxtQkFBTztBQUZYLFNBREU7QUFESCxLO1NBU1BDLE0sR0FBUztBQUNMLDJCQUFtQiwwQkFBYTtBQUFBOztBQUM1QixnQkFBSUMsa0JBQWMsVUFBS0MsTUFBTCxHQUFjLENBQTVCLDJEQUFKO0FBQ0g7QUFISSxLO1NBTVRDLE8sR0FBVTtBQUNOQyxXQURNLGlCQUNBLENBQ0wsQ0FGSztBQUdOQyxXQUhNLGlCQUdBO0FBQ0YsZ0JBQUlDLE1BQU0sS0FBS1QsSUFBTCxDQUFVSyxNQUFwQjtBQUNBLGlCQUFLTCxJQUFMLENBQVVVLElBQVYsQ0FBZSxFQUFFVCxJQUFJUSxNQUFNLENBQVosRUFBZVAsT0FBTyxXQUFXTyxHQUFqQyxFQUFmO0FBQ0g7QUFOSyxLOzs7a0JBaEJPYixJIiwiZmlsZSI6Imxpc3QxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBsaXN0OiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogJzAnLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ2xvYWRpbmcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnRzID0ge1xuICAgICAgICAgICAgJ2luZGV4LWJyb2FkY2FzdCc6ICguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0ICRldmVudCA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIHRhcCgpIHtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhZGQoKSB7XG4gICAgICAgICAgICAgICAgbGV0IGxlbiA9IHRoaXMubGlzdC5sZW5ndGhcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3QucHVzaCh7IGlkOiBsZW4gKyAxLCB0aXRsZTogJ3RpdGxlXycgKyBsZW4gfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9uTG9hZCgpIHtcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==