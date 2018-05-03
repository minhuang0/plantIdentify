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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbWVudC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwibW9tZW50IiwiT2JqZWN0IiwibWV0aG9kcyIsImdvTW9tZW50RGV0YWlsIiwiaWQiLCJuYXZpZ2F0ZVRvIiwidXJsIiwidG9nZ2xlTW9tZW50cyIsImUiLCIkZW1pdCIsInRvZ2dsZVVwdm90ZSIsImdvVXNlckluZm8iLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInVzZXJpZCIsImRhdGEiLCJpY29ucyIsInVwdm90ZSIsInVwdm90ZV9maWxsIiwibGlrZSIsImxpa2VfZmlsbCIsIm1lc3NhZ2UiLCJtZXNzYWdlX2ZpbGwiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLEssR0FBUTtBQUNKQyxvQkFBUUM7QUFESixTLFFBR1JDLE8sR0FBVTtBQUNOQywwQkFETSw0QkFDVztBQUNiLG9CQUFJLEtBQUtILE1BQUwsSUFBZSxLQUFLQSxNQUFMLENBQVlJLEVBQS9CLEVBQW1DO0FBQy9CLG1DQUFLQyxVQUFMLENBQWdCO0FBQ1pDLCtEQUFxQyxLQUFLTixNQUFMLENBQVlJO0FBRHJDLHFCQUFoQjtBQUdIO0FBQ0osYUFQSztBQVFORyx5QkFSTSx5QkFRU0MsQ0FSVCxFQVFZO0FBQ2QscUJBQUtDLEtBQUwsQ0FBVyxlQUFYO0FBQ0gsYUFWSztBQVdOQyx3QkFYTSwwQkFXVTtBQUNaLHFCQUFLRCxLQUFMLENBQVcsY0FBWDtBQUNILGFBYks7QUFjTkUsc0JBZE0sc0JBY01ILENBZE4sRUFjUztBQUNYLCtCQUFLSCxVQUFMLENBQWdCO0FBQ1pDLDRDQUFzQkUsRUFBRUksYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JDO0FBRGxDLGlCQUFoQjtBQUdIO0FBbEJLLFMsUUFxQlZDLEksR0FBTztBQUNIQyxtQkFBTztBQUNIQyx3QkFBUSxpQ0FETDtBQUVIQyw2QkFBYSxzQ0FGVjtBQUdIQyxzQkFBTSwrQkFISDtBQUlIQywyQkFBVyxvQ0FKUjtBQUtIQyx5QkFBUyxrQ0FMTjtBQU1IQyw4QkFBYztBQU5YO0FBREosUzs7OztFQXpCd0IsZUFBS0MsUzs7a0JBQW5CekIsSyIsImZpbGUiOiJtb21lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgbW9tZW50OiBPYmplY3RcbiAgICAgICAgfVxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgZ29Nb21lbnREZXRhaWwoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubW9tZW50ICYmIHRoaXMubW9tZW50LmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGAuLi8uLi9wYWdlcy9kZXRhaWwvbW9tZW50P2lkPSR7dGhpcy5tb21lbnQuaWR9YFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b2dnbGVNb21lbnRzIChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgndG9nZ2xlTW9tZW50cycpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9nZ2xlVXB2b3RlICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCd0b2dnbGVVcHZvdGUnKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdvVXNlckluZm8gKGUpIHtcbiAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IGAuLi9tZS91c2VyP2lkPSR7ZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudXNlcmlkfWBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGljb25zOiB7XG4gICAgICAgICAgICAgICAgdXB2b3RlOiAnLi4vLi4vbW9kdWxlcy9pbWFnZXMvcHJhaXNlLnBuZycsXG4gICAgICAgICAgICAgICAgdXB2b3RlX2ZpbGw6ICcuLi8uLi9tb2R1bGVzL2ltYWdlcy9wcmFpc2VfZmlsbC5wbmcnLFxuICAgICAgICAgICAgICAgIGxpa2U6ICcuLi8uLi9tb2R1bGVzL2ltYWdlcy9saWtlLnBuZycsXG4gICAgICAgICAgICAgICAgbGlrZV9maWxsOiAnLi4vLi4vbW9kdWxlcy9pbWFnZXMvbGlrZV9maWxsLnBuZycsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJy4uLy4uL21vZHVsZXMvaW1hZ2VzL21lc3NhZ2UucG5nJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlX2ZpbGw6ICcuLi8uLi9tb2R1bGVzL2ltYWdlcy9tZXNzYWdlX2ZpbGwucG5nJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuIl19