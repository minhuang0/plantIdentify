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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwiYWxsZGF0YSIsInNsaWRlcldpZHRoIiwiZGVmYXVsdCIsImFjdGl2ZUluZGV4IiwiZGF0YSIsInNsaWRlck9mZnNldCIsInNsaWRlckxlZnQiLCJtZXRob2RzIiwidGFiQ2xpY2siLCJlIiwiY3VycmVudFRhcmdldCIsIm9mZnNldExlZnQiLCIkZW1pdCIsImlkIiwidGhhdCIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwicmVzIiwid2luZG93V2lkdGgiLCJsZW5ndGgiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsSyxHQUFRO0FBQ0pDLHFCQUFTLEVBREw7QUFFSkMseUJBQWE7QUFDVEMseUJBQVMsS0FEQSxDQUNNO0FBRE4sYUFGVDtBQUtKQyx5QkFBYTtBQUNURCx5QkFBUztBQURBO0FBTFQsUyxRQVVSRSxJLEdBQU87QUFDSEMsMEJBQWMsQ0FEWDtBQUVIQyx3QkFBWTtBQUZULFMsUUFLUEMsTyxHQUFVO0FBQ05DLG9CQURNLG9CQUNHQyxDQURILEVBQ007QUFDUixxQkFBS0osWUFBTCxHQUFvQkksRUFBRUMsYUFBRixDQUFnQkMsVUFBcEM7QUFDQSxxQkFBS0MsS0FBTCxDQUFXLG1CQUFYLEVBQWdDSCxFQUFFQyxhQUFGLENBQWdCRyxFQUFoRDtBQUNIO0FBSkssUzs7Ozs7aUNBT0Q7QUFDTCxnQkFBTUMsT0FBTyxJQUFiO0FBQ0EsMkJBQUtDLGFBQUwsQ0FBbUI7QUFDZkMsdUJBRGUsbUJBQ1BDLEdBRE8sRUFDRjtBQUNUSCx5QkFBS1IsVUFBTCxHQUFrQixDQUFDVyxJQUFJQyxXQUFKLEdBQWtCSixLQUFLZCxPQUFMLENBQWFtQixNQUEvQixHQUF3Q0wsS0FBS2IsV0FBOUMsSUFBNkQsQ0FBL0U7QUFDQWEseUJBQUtULFlBQUwsR0FBb0JZLElBQUlDLFdBQUosR0FBa0JKLEtBQUtkLE9BQUwsQ0FBYW1CLE1BQS9CLEdBQXdDTCxLQUFLWCxXQUFqRTtBQUNIO0FBSmMsYUFBbkI7QUFNSDs7OztFQS9COEIsZUFBS2lCLFM7O2tCQUFuQnRCLEsiLCJmaWxlIjoibmF2YmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIGFsbGRhdGE6IHt9LFxuICAgICAgICAgICAgc2xpZGVyV2lkdGg6IHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiA5My43NSAvLyDpnIDopoHorr7nva5zbGlkZXLnmoTlrr3luqbvvIznlKjkuo7orqHnrpfkuK3pl7TkvY3nva5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhY3RpdmVJbmRleDoge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBzbGlkZXJPZmZzZXQ6IDAsXG4gICAgICAgICAgICBzbGlkZXJMZWZ0OiAwXG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgdGFiQ2xpY2soZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyT2Zmc2V0ID0gZS5jdXJyZW50VGFyZ2V0Lm9mZnNldExlZnRcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2VBY3RpdmVJbmRleCcsIGUuY3VycmVudFRhcmdldC5pZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9uTG9hZCgpIHtcbiAgICAgICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzXG4gICAgICAgICAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuc2xpZGVyTGVmdCA9IChyZXMud2luZG93V2lkdGggLyB0aGF0LmFsbGRhdGEubGVuZ3RoIC0gdGhhdC5zbGlkZXJXaWR0aCkgLyAyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuc2xpZGVyT2Zmc2V0ID0gcmVzLndpbmRvd1dpZHRoIC8gdGhhdC5hbGxkYXRhLmxlbmd0aCAqIHRoYXQuYWN0aXZlSW5kZXhcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuIl19