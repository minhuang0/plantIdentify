'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


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
            gationBarTitleText: '低延时播放',
            backgroundColor: '#000',
            backgroundTextStyle: 'light'
        }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'statechange',
        value: function statechange(e) {
            console.log('live-player code:', e.detail.code);
        }
    }, {
        key: 'error',
        value: function error(e) {
            console.error('live-player error:', e);
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/publish/live'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpdmUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJnYXRpb25CYXJUaXRsZVRleHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kVGV4dFN0eWxlIiwibWV0aG9kcyIsImUiLCJjb25zb2xlIiwibG9nIiwiZGV0YWlsIiwiY29kZSIsImVycm9yIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsTSxHQUFTO0FBQ0xDLGdDQUFvQixPQURmO0FBRUxDLDZCQUFpQixNQUZaO0FBR0xDLGlDQUFxQjtBQUhoQixTLFFBS1RDLE8sR0FBVSxFOzs7OztvQ0FFRUMsQyxFQUFHO0FBQ1hDLG9CQUFRQyxHQUFSLENBQVksbUJBQVosRUFBaUNGLEVBQUVHLE1BQUYsQ0FBU0MsSUFBMUM7QUFDSDs7OzhCQUNLSixDLEVBQUc7QUFDTEMsb0JBQVFJLEtBQVIsQ0FBYyxvQkFBZCxFQUFvQ0wsQ0FBcEM7QUFDSDs7OztFQWI4Qk0sZUFBS0MsSTs7a0JBQW5CYixLIiwiZmlsZSI6ImxpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBnYXRpb25CYXJUaXRsZVRleHQ6ICfkvY7lu7bml7bmkq3mlL4nLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzAwMCcsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnXG4gICAgICAgIH1cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZWNoYW5nZShlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbGl2ZS1wbGF5ZXIgY29kZTonLCBlLmRldGFpbC5jb2RlKVxuICAgICAgICB9XG4gICAgICAgIGVycm9yKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2xpdmUtcGxheWVyIGVycm9yOicsIGUpXG4gICAgICAgIH1cbiAgICB9XG4iXX0=