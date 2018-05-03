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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QxLmpzIl0sIm5hbWVzIjpbIkxpc3QiLCJjb21wb25lbnQiLCJkYXRhIiwibGlzdCIsImlkIiwidGl0bGUiLCJldmVudHMiLCIkZXZlbnQiLCJsZW5ndGgiLCJtZXRob2RzIiwidGFwIiwiYWRkIiwibGVuIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0F5QlIsQ0FDUjs7OztFQTFCNkIsZUFBS0MsUzs7O1NBQ25DQyxJLEdBQU87QUFDSEMsY0FBTSxDQUNGO0FBQ0lDLGdCQUFJLEdBRFI7QUFFSUMsbUJBQU87QUFGWCxTQURFO0FBREgsSztTQVNQQyxNLEdBQVM7QUFDTCwyQkFBbUIsMEJBQWE7QUFBQTs7QUFDNUIsZ0JBQUlDLGtCQUFjLFVBQUtDLE1BQUwsR0FBYyxDQUE1QiwyREFBSjtBQUNIO0FBSEksSztTQU1UQyxPLEdBQVU7QUFDTkMsV0FETSxpQkFDQSxDQUNMLENBRks7QUFHTkMsV0FITSxpQkFHQTtBQUNGLGdCQUFJQyxNQUFNLEtBQUtULElBQUwsQ0FBVUssTUFBcEI7QUFDQSxpQkFBS0wsSUFBTCxDQUFVVSxJQUFWLENBQWUsRUFBRVQsSUFBSVEsTUFBTSxDQUFaLEVBQWVQLE9BQU8sV0FBV08sR0FBakMsRUFBZjtBQUNIO0FBTkssSzs7O2tCQWhCT1osSSIsImZpbGUiOiJsaXN0MS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgbGlzdDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICcwJyxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdsb2FkaW5nJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50cyA9IHtcbiAgICAgICAgICAgICdpbmRleC1icm9hZGNhc3QnOiAoLi4uYXJncykgPT4ge1xuICAgICAgICAgICAgICAgIGxldCAkZXZlbnQgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICB0YXAoKSB7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWRkKCkge1xuICAgICAgICAgICAgICAgIGxldCBsZW4gPSB0aGlzLmxpc3QubGVuZ3RoXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0LnB1c2goeyBpZDogbGVuICsgMSwgdGl0bGU6ICd0aXRsZV8nICsgbGVuIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvbkxvYWQoKSB7XG4gICAgICAgIH1cbiAgICB9XG4iXX0=