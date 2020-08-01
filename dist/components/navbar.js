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
            alldata: {},
            sliderWidth: {
                default: 93.75 // 需要设置slider的宽度，用于计算中间位置
            },
            activeIndex: {
                default: 0
            }
        }, _this.data = {
            sliderOffset: 0,
            sliderLeft: 0
        }, _this.methods = {
            tabClick: function tabClick(e) {
                this.sliderOffset = e.currentTarget.offsetLeft;
                this.$emit('changeActiveIndex', e.currentTarget.id);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad() {
            var that = this;
            _wepy2.default.getSystemInfo({
                success: function success(res) {
                    that.sliderLeft = (res.windowWidth / that.alldata.length - that.sliderWidth) / 2;
                    that.sliderOffset = res.windowWidth / that.alldata.length * that.activeIndex;
                }
            });
        }
    }]);

    return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwiYWxsZGF0YSIsInNsaWRlcldpZHRoIiwiZGVmYXVsdCIsImFjdGl2ZUluZGV4IiwiZGF0YSIsInNsaWRlck9mZnNldCIsInNsaWRlckxlZnQiLCJtZXRob2RzIiwidGFiQ2xpY2siLCJlIiwiY3VycmVudFRhcmdldCIsIm9mZnNldExlZnQiLCIkZW1pdCIsImlkIiwidGhhdCIsIndlcHkiLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsIndpbmRvd1dpZHRoIiwibGVuZ3RoIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLEssR0FBUTtBQUNKQyxxQkFBUyxFQURMO0FBRUpDLHlCQUFhO0FBQ1RDLHlCQUFTLEtBREEsQ0FDTTtBQUROLGFBRlQ7QUFLSkMseUJBQWE7QUFDVEQseUJBQVM7QUFEQTtBQUxULFMsUUFVUkUsSSxHQUFPO0FBQ0hDLDBCQUFjLENBRFg7QUFFSEMsd0JBQVk7QUFGVCxTLFFBS1BDLE8sR0FBVTtBQUNOQyxvQkFETSxvQkFDR0MsQ0FESCxFQUNNO0FBQ1IscUJBQUtKLFlBQUwsR0FBb0JJLEVBQUVDLGFBQUYsQ0FBZ0JDLFVBQXBDO0FBQ0EscUJBQUtDLEtBQUwsQ0FBVyxtQkFBWCxFQUFnQ0gsRUFBRUMsYUFBRixDQUFnQkcsRUFBaEQ7QUFDSDtBQUpLLFM7Ozs7O2lDQU9EO0FBQ0wsZ0JBQU1DLE9BQU8sSUFBYjtBQUNBQywyQkFBS0MsYUFBTCxDQUFtQjtBQUNmQyx1QkFEZSxtQkFDUEMsR0FETyxFQUNGO0FBQ1RKLHlCQUFLUixVQUFMLEdBQWtCLENBQUNZLElBQUlDLFdBQUosR0FBa0JMLEtBQUtkLE9BQUwsQ0FBYW9CLE1BQS9CLEdBQXdDTixLQUFLYixXQUE5QyxJQUE2RCxDQUEvRTtBQUNBYSx5QkFBS1QsWUFBTCxHQUFvQmEsSUFBSUMsV0FBSixHQUFrQkwsS0FBS2QsT0FBTCxDQUFhb0IsTUFBL0IsR0FBd0NOLEtBQUtYLFdBQWpFO0FBQ0g7QUFKYyxhQUFuQjtBQU1IOzs7O0VBL0I4QlksZUFBS00sUzs7a0JBQW5CdkIsSyIsImZpbGUiOiJuYXZiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgYWxsZGF0YToge30sXG4gICAgICAgICAgICBzbGlkZXJXaWR0aDoge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IDkzLjc1IC8vIOmcgOimgeiuvue9rnNsaWRlcueahOWuveW6pu+8jOeUqOS6juiuoeeul+S4remXtOS9jee9rlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFjdGl2ZUluZGV4OiB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogMFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIHNsaWRlck9mZnNldDogMCxcbiAgICAgICAgICAgIHNsaWRlckxlZnQ6IDBcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICB0YWJDbGljayhlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkZXJPZmZzZXQgPSBlLmN1cnJlbnRUYXJnZXQub2Zmc2V0TGVmdFxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZUFjdGl2ZUluZGV4JywgZS5jdXJyZW50VGFyZ2V0LmlkKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgb25Mb2FkKCkge1xuICAgICAgICAgICAgY29uc3QgdGhhdCA9IHRoaXNcbiAgICAgICAgICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5zbGlkZXJMZWZ0ID0gKHJlcy53aW5kb3dXaWR0aCAvIHRoYXQuYWxsZGF0YS5sZW5ndGggLSB0aGF0LnNsaWRlcldpZHRoKSAvIDJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5zbGlkZXJPZmZzZXQgPSByZXMud2luZG93V2lkdGggLyB0aGF0LmFsbGRhdGEubGVuZ3RoICogdGhhdC5hY3RpdmVJbmRleFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4iXX0=