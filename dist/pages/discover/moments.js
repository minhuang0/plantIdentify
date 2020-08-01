'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _moment = require('./../../components/moment.js');

var _moment2 = _interopRequireDefault(_moment);

var _utils = require('./../../modules/common/utils.js');

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
            momentsData: Array
        }, _this.$repeat = { "moments": { "com": "v-moment", "props": "moment.sync" } }, _this.$props = { "v-moment": { "xmlns:v-bind": { "value": "", "for": "moments", "item": "item", "index": "index", "key": "index" }, "v-bind:moment.sync": { "value": "item", "type": "item", "for": "moments", "item": "item", "index": "index", "key": "index" }, "v-bind:id.once": { "value": "index", "type": "index", "for": "moments", "item": "item", "index": "index", "key": "index" } } }, _this.$events = {}, _this.components = {
            'v-moment': _moment2.default
        }, _this.computed = {
            moments: function moments() {
                return this.momentsData.map(function (m) {
                    var user = m.user || {};
                    return {
                        id: m.id,
                        user_id: m.user_id,
                        avatar: user.avatarUrl,
                        name: user.nickName,
                        content: m.content || '',
                        images: (0, _utils.paddingImg)(m.circle_imgs.map(function (i) {
                            return i.imgUrl;
                        })),
                        createTime: (0, _utils.timeTransform)(m.created_at),
                        upvoteNum: m.targets_count,
                        commentsNum: m.comments_count
                    };
                });
            }
        }, _this.data = {
            /* 顶部分类 */
            // tabs: [{
            //     title: '最新'
            // }, {
            //     title: '花艺'
            // }, {
            //     title: '园艺'
            // }, {
            //     title: '家居'
            // }, {
            //     title: '婚嫁'
            // }, {
            //     title: '生活'
            // }, {
            //     title: '杂物'
            // }],
            // activeIndex: 0
        }, _this.methods = {
            // changeActiveIndex(e) {
            //     this.activeIndex = parseInt(e.currentTarget.dataset.id)
            // }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbWVudHMuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsIm1vbWVudHNEYXRhIiwiQXJyYXkiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJtb21lbnRDb21wb25lbnQiLCJjb21wdXRlZCIsIm1vbWVudHMiLCJtYXAiLCJ1c2VyIiwibSIsImlkIiwidXNlcl9pZCIsImF2YXRhciIsImF2YXRhclVybCIsIm5hbWUiLCJuaWNrTmFtZSIsImNvbnRlbnQiLCJpbWFnZXMiLCJjaXJjbGVfaW1ncyIsImkiLCJpbWdVcmwiLCJjcmVhdGVUaW1lIiwiY3JlYXRlZF9hdCIsInVwdm90ZU51bSIsInRhcmdldHNfY291bnQiLCJjb21tZW50c051bSIsImNvbW1lbnRzX2NvdW50IiwiZGF0YSIsIm1ldGhvZHMiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLEssR0FBUTtBQUNKQyx5QkFBYUM7QUFEVCxTLFFBR1RDLE8sR0FBVSxFQUFDLFdBQVUsRUFBQyxPQUFNLFVBQVAsRUFBa0IsU0FBUSxhQUExQixFQUFYLEUsUUFDakJDLE0sR0FBUyxFQUFDLFlBQVcsRUFBQyxnQkFBZSxFQUFDLFNBQVEsRUFBVCxFQUFZLE9BQU0sU0FBbEIsRUFBNEIsUUFBTyxNQUFuQyxFQUEwQyxTQUFRLE9BQWxELEVBQTBELE9BQU0sT0FBaEUsRUFBaEIsRUFBeUYsc0JBQXFCLEVBQUMsU0FBUSxNQUFULEVBQWdCLFFBQU8sTUFBdkIsRUFBOEIsT0FBTSxTQUFwQyxFQUE4QyxRQUFPLE1BQXJELEVBQTRELFNBQVEsT0FBcEUsRUFBNEUsT0FBTSxPQUFsRixFQUE5RyxFQUF5TSxrQkFBaUIsRUFBQyxTQUFRLE9BQVQsRUFBaUIsUUFBTyxPQUF4QixFQUFnQyxPQUFNLFNBQXRDLEVBQWdELFFBQU8sTUFBdkQsRUFBOEQsU0FBUSxPQUF0RSxFQUE4RSxPQUFNLE9BQXBGLEVBQTFOLEVBQVosRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDRix3QkFBWUM7QUFEVixTLFFBSU5DLFEsR0FBVztBQUNQQyxtQkFETyxxQkFDSTtBQUNQLHVCQUFPLEtBQUtSLFdBQUwsQ0FBaUJTLEdBQWpCLENBQXFCLGFBQUs7QUFDN0Isd0JBQU1DLE9BQU9DLEVBQUVELElBQUYsSUFBVSxFQUF2QjtBQUNBLDJCQUFPO0FBQ0hFLDRCQUFJRCxFQUFFQyxFQURIO0FBRUhDLGlDQUFTRixFQUFFRSxPQUZSO0FBR0hDLGdDQUFRSixLQUFLSyxTQUhWO0FBSUhDLDhCQUFNTixLQUFLTyxRQUpSO0FBS0hDLGlDQUFTUCxFQUFFTyxPQUFGLElBQWEsRUFMbkI7QUFNSEMsZ0NBQVEsdUJBQVdSLEVBQUVTLFdBQUYsQ0FBY1gsR0FBZCxDQUFrQjtBQUFBLG1DQUFLWSxFQUFFQyxNQUFQO0FBQUEseUJBQWxCLENBQVgsQ0FOTDtBQU9IQyxvQ0FBWSwwQkFBY1osRUFBRWEsVUFBaEIsQ0FQVDtBQVFIQyxtQ0FBV2QsRUFBRWUsYUFSVjtBQVNIQyxxQ0FBYWhCLEVBQUVpQjtBQVRaLHFCQUFQO0FBV0gsaUJBYk0sQ0FBUDtBQWNIO0FBaEJNLFMsUUFtQlhDLEksR0FBTztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqQkcsUyxRQW9CUEMsTyxHQUFVO0FBQ047QUFDQTtBQUNBO0FBSE0sUzs7OztFQWxEcUJDLGVBQUtDLFM7O2tCQUFuQmxDLEsiLCJmaWxlIjoibW9tZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IG1vbWVudENvbXBvbmVudCBmcm9tICdAL2NvbXBvbmVudHMvbW9tZW50J1xuICAgIGltcG9ydCB7IHRpbWVUcmFuc2Zvcm0sIHBhZGRpbmdJbWcgfSBmcm9tICdAL21vZHVsZXMvY29tbW9uL3V0aWxzJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgbW9tZW50c0RhdGE6IEFycmF5XG4gICAgICAgIH1cbiAgICAgICAkcmVwZWF0ID0ge1wibW9tZW50c1wiOntcImNvbVwiOlwidi1tb21lbnRcIixcInByb3BzXCI6XCJtb21lbnQuc3luY1wifX07XHJcbiRwcm9wcyA9IHtcInYtbW9tZW50XCI6e1wieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJtb21lbnRzXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6bW9tZW50LnN5bmNcIjp7XCJ2YWx1ZVwiOlwiaXRlbVwiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJtb21lbnRzXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6aWQub25jZVwiOntcInZhbHVlXCI6XCJpbmRleFwiLFwidHlwZVwiOlwiaW5kZXhcIixcImZvclwiOlwibW9tZW50c1wiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9fX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICAndi1tb21lbnQnOiBtb21lbnRDb21wb25lbnRcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXB1dGVkID0ge1xuICAgICAgICAgICAgbW9tZW50cyAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9tZW50c0RhdGEubWFwKG0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB1c2VyID0gbS51c2VyIHx8IHt9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfaWQ6IG0udXNlcl9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcjogdXNlci5hdmF0YXJVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB1c2VyLm5pY2tOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogbS5jb250ZW50IHx8ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VzOiBwYWRkaW5nSW1nKG0uY2lyY2xlX2ltZ3MubWFwKGkgPT4gaS5pbWdVcmwpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZVRpbWU6IHRpbWVUcmFuc2Zvcm0obS5jcmVhdGVkX2F0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwdm90ZU51bTogbS50YXJnZXRzX2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudHNOdW06IG0uY29tbWVudHNfY291bnRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgLyog6aG26YOo5YiG57G7ICovXG4gICAgICAgICAgICAvLyB0YWJzOiBbe1xuICAgICAgICAgICAgLy8gICAgIHRpdGxlOiAn5pyA5pawJ1xuICAgICAgICAgICAgLy8gfSwge1xuICAgICAgICAgICAgLy8gICAgIHRpdGxlOiAn6Iqx6Im6J1xuICAgICAgICAgICAgLy8gfSwge1xuICAgICAgICAgICAgLy8gICAgIHRpdGxlOiAn5Zut6Im6J1xuICAgICAgICAgICAgLy8gfSwge1xuICAgICAgICAgICAgLy8gICAgIHRpdGxlOiAn5a625bGFJ1xuICAgICAgICAgICAgLy8gfSwge1xuICAgICAgICAgICAgLy8gICAgIHRpdGxlOiAn5ama5auBJ1xuICAgICAgICAgICAgLy8gfSwge1xuICAgICAgICAgICAgLy8gICAgIHRpdGxlOiAn55Sf5rS7J1xuICAgICAgICAgICAgLy8gfSwge1xuICAgICAgICAgICAgLy8gICAgIHRpdGxlOiAn5p2C54mpJ1xuICAgICAgICAgICAgLy8gfV0sXG4gICAgICAgICAgICAvLyBhY3RpdmVJbmRleDogMFxuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIC8vIGNoYW5nZUFjdGl2ZUluZGV4KGUpIHtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gcGFyc2VJbnQoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQpXG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH1cbiAgICB9XG4iXX0=