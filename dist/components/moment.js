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
            moment: Object
        }, _this.methods = {
            goMomentDetail: function goMomentDetail() {
                if (this.moment && this.moment.id) {
                    _wepy2.default.navigateTo({
                        url: '../../pages/detail/moment?id=' + this.moment.id
                    });
                }
            },
            toggleMoments: function toggleMoments(e) {
                this.$emit('toggleMoments');
            },
            toggleUpvote: function toggleUpvote() {
                this.$emit('toggleUpvote');
            },
            goUserInfo: function goUserInfo(e) {
                _wepy2.default.navigateTo({
                    url: '../me/user?id=' + e.currentTarget.dataset.userid
                });
            }
        }, _this.data = {
            icons: {
                upvote: '../../modules/images/praise.png',
                upvote_fill: '../../modules/images/praise_fill.png',
                like: '../../modules/images/like.png',
                like_fill: '../../modules/images/like_fill.png',
                message: '../../modules/images/message.png',
                message_fill: '../../modules/images/message_fill.png'
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbWVudC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwibW9tZW50IiwiT2JqZWN0IiwibWV0aG9kcyIsImdvTW9tZW50RGV0YWlsIiwiaWQiLCJ3ZXB5IiwibmF2aWdhdGVUbyIsInVybCIsInRvZ2dsZU1vbWVudHMiLCJlIiwiJGVtaXQiLCJ0b2dnbGVVcHZvdGUiLCJnb1VzZXJJbmZvIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJ1c2VyaWQiLCJkYXRhIiwiaWNvbnMiLCJ1cHZvdGUiLCJ1cHZvdGVfZmlsbCIsImxpa2UiLCJsaWtlX2ZpbGwiLCJtZXNzYWdlIiwibWVzc2FnZV9maWxsIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxLLEdBQVE7QUFDSkMsb0JBQVFDO0FBREosUyxRQUdSQyxPLEdBQVU7QUFDTkMsMEJBRE0sNEJBQ1c7QUFDYixvQkFBSSxLQUFLSCxNQUFMLElBQWUsS0FBS0EsTUFBTCxDQUFZSSxFQUEvQixFQUFtQztBQUMvQkMsbUNBQUtDLFVBQUwsQ0FBZ0I7QUFDWkMsK0RBQXFDLEtBQUtQLE1BQUwsQ0FBWUk7QUFEckMscUJBQWhCO0FBR0g7QUFDSixhQVBLO0FBUU5JLHlCQVJNLHlCQVFTQyxDQVJULEVBUVk7QUFDZCxxQkFBS0MsS0FBTCxDQUFXLGVBQVg7QUFDSCxhQVZLO0FBV05DLHdCQVhNLDBCQVdVO0FBQ1oscUJBQUtELEtBQUwsQ0FBVyxjQUFYO0FBQ0gsYUFiSztBQWNORSxzQkFkTSxzQkFjTUgsQ0FkTixFQWNTO0FBQ1hKLCtCQUFLQyxVQUFMLENBQWdCO0FBQ1pDLDRDQUFzQkUsRUFBRUksYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JDO0FBRGxDLGlCQUFoQjtBQUdIO0FBbEJLLFMsUUFxQlZDLEksR0FBTztBQUNIQyxtQkFBTztBQUNIQyx3QkFBUSxpQ0FETDtBQUVIQyw2QkFBYSxzQ0FGVjtBQUdIQyxzQkFBTSwrQkFISDtBQUlIQywyQkFBVyxvQ0FKUjtBQUtIQyx5QkFBUyxrQ0FMTjtBQU1IQyw4QkFBYztBQU5YO0FBREosUzs7OztFQXpCd0JsQixlQUFLbUIsUzs7a0JBQW5CMUIsSyIsImZpbGUiOiJtb21lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgbW9tZW50OiBPYmplY3RcbiAgICAgICAgfVxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgZ29Nb21lbnREZXRhaWwoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubW9tZW50ICYmIHRoaXMubW9tZW50LmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGAuLi8uLi9wYWdlcy9kZXRhaWwvbW9tZW50P2lkPSR7dGhpcy5tb21lbnQuaWR9YFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b2dnbGVNb21lbnRzIChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgndG9nZ2xlTW9tZW50cycpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9nZ2xlVXB2b3RlICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCd0b2dnbGVVcHZvdGUnKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdvVXNlckluZm8gKGUpIHtcbiAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IGAuLi9tZS91c2VyP2lkPSR7ZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudXNlcmlkfWBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGljb25zOiB7XG4gICAgICAgICAgICAgICAgdXB2b3RlOiAnLi4vLi4vbW9kdWxlcy9pbWFnZXMvcHJhaXNlLnBuZycsXG4gICAgICAgICAgICAgICAgdXB2b3RlX2ZpbGw6ICcuLi8uLi9tb2R1bGVzL2ltYWdlcy9wcmFpc2VfZmlsbC5wbmcnLFxuICAgICAgICAgICAgICAgIGxpa2U6ICcuLi8uLi9tb2R1bGVzL2ltYWdlcy9saWtlLnBuZycsXG4gICAgICAgICAgICAgICAgbGlrZV9maWxsOiAnLi4vLi4vbW9kdWxlcy9pbWFnZXMvbGlrZV9maWxsLnBuZycsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJy4uLy4uL21vZHVsZXMvaW1hZ2VzL21lc3NhZ2UucG5nJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlX2ZpbGw6ICcuLi8uLi9tb2R1bGVzL2ltYWdlcy9tZXNzYWdlX2ZpbGwucG5nJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuIl19