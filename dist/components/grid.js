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
            list: {}
        }, _this.data = {
            imgHeight: 0
        }, _this.computed = {
            imgStyle: function imgStyle() {
                return 'height: ' + this.imgHeight + 'px; width: ' + this.imgHeight + 'px;';
            }
        }, _this.methods = {
            tap: function tap(e) {
                this.$emit('click', e);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad() {
            var that = this;
            _wepy2.default.getSystemInfo({
                success: function success(res) {
                    that.imgHeight = (res.windowWidth - 30) / 2;
                }
            });
        }
    }]);

    return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyaWQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsImxpc3QiLCJkYXRhIiwiaW1nSGVpZ2h0IiwiY29tcHV0ZWQiLCJpbWdTdHlsZSIsIm1ldGhvZHMiLCJ0YXAiLCJlIiwiJGVtaXQiLCJ0aGF0IiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJ3aW5kb3dXaWR0aCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxLLEdBQVE7QUFDSkMsa0JBQU07QUFERixTLFFBR1JDLEksR0FBTztBQUNIQyx1QkFBVztBQURSLFMsUUFJUEMsUSxHQUFXO0FBQ1BDLG9CQURPLHNCQUNLO0FBQ1Isb0NBQWtCLEtBQUtGLFNBQXZCLG1CQUE4QyxLQUFLQSxTQUFuRDtBQUNIO0FBSE0sUyxRQU1YRyxPLEdBQVU7QUFDTkMsZUFETSxlQUNEQyxDQURDLEVBQ0U7QUFDSixxQkFBS0MsS0FBTCxDQUFXLE9BQVgsRUFBb0JELENBQXBCO0FBQ0g7QUFISyxTOzs7OztpQ0FNRDtBQUNMLGdCQUFNRSxPQUFPLElBQWI7QUFDQSwyQkFBS0MsYUFBTCxDQUFtQjtBQUNmQyx1QkFEZSxtQkFDUEMsR0FETyxFQUNGO0FBQ1RILHlCQUFLUCxTQUFMLEdBQWlCLENBQUNVLElBQUlDLFdBQUosR0FBa0IsRUFBbkIsSUFBeUIsQ0FBMUM7QUFDSDtBQUhjLGFBQW5CO0FBS0g7Ozs7RUEzQjhCLGVBQUtDLFM7O2tCQUFuQmhCLEsiLCJmaWxlIjoiZ3JpZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICBsaXN0OiB7fVxuICAgICAgICB9XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBpbWdIZWlnaHQ6IDBcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXB1dGVkID0ge1xuICAgICAgICAgICAgaW1nU3R5bGUgKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgaGVpZ2h0OiAke3RoaXMuaW1nSGVpZ2h0fXB4OyB3aWR0aDogJHt0aGlzLmltZ0hlaWdodH1weDtgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgdGFwIChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgb25Mb2FkKCkge1xuICAgICAgICAgICAgY29uc3QgdGhhdCA9IHRoaXNcbiAgICAgICAgICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5pbWdIZWlnaHQgPSAocmVzLndpbmRvd1dpZHRoIC0gMzApIC8gMlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4iXX0=