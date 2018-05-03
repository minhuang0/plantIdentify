'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _fetch = require('./../../modules/common/fetch.js');

var _moment = require('./../../components/moment.js');

var _moment2 = _interopRequireDefault(_moment);

var _comments = require('./../../components/comments.js');

var _comments2 = _interopRequireDefault(_comments);

var _editor = require('./../../components/editor.js');

var _editor2 = _interopRequireDefault(_editor);

var _utils = require('./../../modules/common/utils.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
            navigationBarTitleText: '我的'
        }, _this.$repeat = {}, _this.$props = { "v-editor": { "v-bind:inputValue.sync": "inputValue" }, "v-moment": { "xmlns:v-bind": "", "v-bind:moment.sync": "momentData", "xmlns:v-on": "" }, "v-comments": { "v-bind:comments.sync": "comments" } }, _this.$events = { "v-editor": { "v-on:click": "comment" }, "v-moment": { "v-on:toggleUpvote": "toggleUpvote", "v-on:toggleMoments": "toggleMoments" } }, _this.components = {
            'v-editor': _editor2.default,
            'v-moment': _moment2.default,
            'v-comments': _comments2.default
        }, _this.computed = {
            momentData: function momentData() {
                var user = this.moment.user || {};
                this.comments = this.moment.comments;
                return {
                    avatar: user.avatarUrl,
                    user_id: this.moment.user_id,
                    name: user.nickName,
                    content: this.moment.content,
                    images: (0, _utils.paddingImg)(this.moment.circle_imgs.map(function (i) {
                        return i.imgUrl;
                    })),
                    createTime: this.moment.created_at || '无返回时间',
                    upvoteNum: this.moment.upvoteNum,
                    commentsNum: this.moment.commentsNum
                };
            }
        }, _this.data = {
            inputValue: '',
            moment: {
                circle_imgs: [],
                targets: [],
                comments: [],
                user: {}
            },
            comments: []
        }, _this.methods = {
            toggleUpvote: function toggleUpvote() {
                if (this.moment.hasZan) {
                    return this.requestUpvote(false);
                }
                return this.requestUpvote(true);
            },
            toggleMoments: function toggleMoments() {
                console.log('toggleMoments');
            },
            comment: function comment(data) {
                this.addComment(data);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'addComment',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(content) {
                var _this2 = this;

                var userInfo;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.$parent.getUserInfo();

                            case 2:
                                userInfo = _context.sent;
                                _context.next = 5;
                                return (0, _fetch.postFetch)('/circles/comment', {
                                    data: {
                                        content: content,
                                        circle_id: this.moment.id
                                    },
                                    noAjax: true
                                }).then(function () {
                                    _this2.comments.unshift({
                                        content: content,
                                        user: {
                                            avatarUrl: userInfo.avatarUrl,
                                            nickName: userInfo.nickName
                                        },
                                        created_at: new Date(),
                                        user_id: userInfo.nickName
                                    });
                                    _this2.inputValue = '';
                                    _this2.$apply();
                                }).catch(function () {
                                    _wepy2.default.showToast({
                                        title: '评论失败',
                                        icon: 'none',
                                        duration: 2000
                                    });
                                });

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function addComment(_x) {
                return _ref2.apply(this, arguments);
            }

            return addComment;
        }()
    }, {
        key: 'requestUpvote',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(isUpVote) {
                var _this3 = this;

                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return (0, _fetch.getFetch)('/circles/' + this.moment.id + '/' + (isUpVote ? 'zan' : 'unzan'), {
                                    noAjax: true
                                }).then(function () {
                                    _this3.moment.hasZan = !_this3.moment.hasZan;
                                    _this3.moment.upvoteNum = _this3.moment.hasZan ? _this3.moment.upvoteNum + 1 : _this3.moment.upvoteNum > 1 ? _this3.moment.upvoteNum - 1 : 0;
                                    _this3.$apply();
                                });

                            case 2:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function requestUpvote(_x2) {
                return _ref3.apply(this, arguments);
            }

            return requestUpvote;
        }()
    }, {
        key: 'onLoad',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(options) {
                var rsp;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return (0, _fetch.getFetch)('/circles/' + (options.id || 1));

                            case 2:
                                rsp = _context3.sent;

                                this.moment = rsp.circle;
                                this.moment.hasZan = rsp.hasZan;
                                this.moment.upvoteNum = rsp.circle.targets.length;
                                this.moment.commentsNum = rsp.circle.comments.length;
                                this.$apply();

                            case 8:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function onLoad(_x3) {
                return _ref4.apply(this, arguments);
            }

            return onLoad;
        }()
    }]);

    return Index;
}(_wepy2.default.page);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbWVudC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjb21wdXRlZCIsIm1vbWVudERhdGEiLCJ1c2VyIiwibW9tZW50IiwiY29tbWVudHMiLCJhdmF0YXIiLCJhdmF0YXJVcmwiLCJ1c2VyX2lkIiwibmFtZSIsIm5pY2tOYW1lIiwiY29udGVudCIsImltYWdlcyIsImNpcmNsZV9pbWdzIiwibWFwIiwiaSIsImltZ1VybCIsImNyZWF0ZVRpbWUiLCJjcmVhdGVkX2F0IiwidXB2b3RlTnVtIiwiY29tbWVudHNOdW0iLCJkYXRhIiwiaW5wdXRWYWx1ZSIsInRhcmdldHMiLCJtZXRob2RzIiwidG9nZ2xlVXB2b3RlIiwiaGFzWmFuIiwicmVxdWVzdFVwdm90ZSIsInRvZ2dsZU1vbWVudHMiLCJjb25zb2xlIiwibG9nIiwiY29tbWVudCIsImFkZENvbW1lbnQiLCIkcGFyZW50IiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsImNpcmNsZV9pZCIsImlkIiwibm9BamF4IiwidGhlbiIsInVuc2hpZnQiLCJEYXRlIiwiJGFwcGx5IiwiY2F0Y2giLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsImlzVXBWb3RlIiwib3B0aW9ucyIsInJzcCIsImNpcmNsZSIsImxlbmd0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsUUFJVkMsTyxHQUFVLEUsUUFDakJDLE0sR0FBUyxFQUFDLFlBQVcsRUFBQywwQkFBeUIsWUFBMUIsRUFBWixFQUFvRCxZQUFXLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsc0JBQXFCLFlB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QVgsR0FBbUIsT0FBMUQsR0FBcUU7QUFDdkVWLDRDQUFRO0FBRCtELGlDQUFyRSxFQUVIQyxJQUZHLENBRUUsWUFBTTtBQUNWLDJDQUFLbkMsTUFBTCxDQUFZc0IsTUFBWixHQUFxQixDQUFDLE9BQUt0QixNQUFMLENBQVlzQixNQUFsQztBQUNBLDJDQUFLdEIsTUFBTCxDQUFZZSxTQUFaLEdBQXdCLE9BQUtmLE1BQUwsQ0FBWXNCLE1BQVosR0FBcUIsT0FBS3RCLE1BQUwsQ0FBWWUsU0FBWixHQUF3QixDQUE3QyxHQUFpRCxPQUFLZixNQUFMLENBQVllLFNBQVosR0FBd0IsQ0FBeEIsR0FBNEIsT0FBS2YsTUFBTCxDQUFZZSxTQUFaLEdBQXdCLENBQXBELEdBQXdELENBQWpJO0FBQ0EsMkNBQUt1QixNQUFMO0FBQ0gsaUNBTkssQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0FRSU8sTzs7Ozs7Ozt1Q0FDUSxvQ0FBcUJBLFFBQVFaLEVBQVIsSUFBYyxDQUFuQyxFOzs7QUFBWmEsbUM7O0FBQ04scUNBQUs5QyxNQUFMLEdBQWM4QyxJQUFJQyxNQUFsQjtBQUNBLHFDQUFLL0MsTUFBTCxDQUFZc0IsTUFBWixHQUFxQndCLElBQUl4QixNQUF6QjtBQUNBLHFDQUFLdEIsTUFBTCxDQUFZZSxTQUFaLEdBQXdCK0IsSUFBSUMsTUFBSixDQUFXNUIsT0FBWCxDQUFtQjZCLE1BQTNDO0FBQ0EscUNBQUtoRCxNQUFMLENBQVlnQixXQUFaLEdBQTBCOEIsSUFBSUMsTUFBSixDQUFXOUMsUUFBWCxDQUFvQitDLE1BQTlDO0FBQ0EscUNBQUtWLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFsRzJCLGVBQUtXLEk7O2tCQUFuQjNELEsiLCJmaWxlIjoibW9tZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgeyBnZXRGZXRjaCwgcG9zdEZldGNoIH0gZnJvbSAnQC9tb2R1bGVzL2NvbW1vbi9mZXRjaCdcbiAgICBpbXBvcnQgbW9tZW50Q29tcG9uZW50IGZyb20gJ0AvY29tcG9uZW50cy9tb21lbnQnXG4gICAgaW1wb3J0IENvbW1lbnRzIGZyb20gJ0AvY29tcG9uZW50cy9jb21tZW50cydcbiAgICBpbXBvcnQgRWRpdG9yIGZyb20gJ0AvY29tcG9uZW50cy9lZGl0b3InXG4gICAgaW1wb3J0IHsgcGFkZGluZ0ltZyB9IGZyb20gJ0AvbW9kdWxlcy9jb21tb24vdXRpbHMnXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoQnXG4gICAgICAgIH1cblxuICAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1widi1lZGl0b3JcIjp7XCJ2LWJpbmQ6aW5wdXRWYWx1ZS5zeW5jXCI6XCJpbnB1dFZhbHVlXCJ9LFwidi1tb21lbnRcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOm1vbWVudC5zeW5jXCI6XCJtb21lbnREYXRhXCIsXCJ4bWxuczp2LW9uXCI6XCJcIn0sXCJ2LWNvbW1lbnRzXCI6e1widi1iaW5kOmNvbW1lbnRzLnN5bmNcIjpcImNvbW1lbnRzXCJ9fTtcclxuJGV2ZW50cyA9IHtcInYtZWRpdG9yXCI6e1widi1vbjpjbGlja1wiOlwiY29tbWVudFwifSxcInYtbW9tZW50XCI6e1widi1vbjp0b2dnbGVVcHZvdGVcIjpcInRvZ2dsZVVwdm90ZVwiLFwidi1vbjp0b2dnbGVNb21lbnRzXCI6XCJ0b2dnbGVNb21lbnRzXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICAndi1lZGl0b3InOiBFZGl0b3IsXG4gICAgICAgICAgICAndi1tb21lbnQnOiBtb21lbnRDb21wb25lbnQsXG4gICAgICAgICAgICAndi1jb21tZW50cyc6IENvbW1lbnRzXG4gICAgICAgIH1cblxuICAgICAgICBjb21wdXRlZCA9IHtcbiAgICAgICAgICAgIG1vbWVudERhdGEgKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXIgPSB0aGlzLm1vbWVudC51c2VyIHx8IHt9XG4gICAgICAgICAgICAgICAgdGhpcy5jb21tZW50cyA9IHRoaXMubW9tZW50LmNvbW1lbnRzXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyOiB1c2VyLmF2YXRhclVybCxcbiAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogdGhpcy5tb21lbnQudXNlcl9pZCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdXNlci5uaWNrTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGhpcy5tb21lbnQuY29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VzOiBwYWRkaW5nSW1nKHRoaXMubW9tZW50LmNpcmNsZV9pbWdzLm1hcChpID0+IGkuaW1nVXJsKSksXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVRpbWU6IHRoaXMubW9tZW50LmNyZWF0ZWRfYXQgfHwgJ+aXoOi/lOWbnuaXtumXtCcsXG4gICAgICAgICAgICAgICAgICAgIHVwdm90ZU51bTogdGhpcy5tb21lbnQudXB2b3RlTnVtLFxuICAgICAgICAgICAgICAgICAgICBjb21tZW50c051bTogdGhpcy5tb21lbnQuY29tbWVudHNOdW1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgaW5wdXRWYWx1ZTogJycsXG4gICAgICAgICAgICBtb21lbnQ6IHtcbiAgICAgICAgICAgICAgICBjaXJjbGVfaW1nczogW10sXG4gICAgICAgICAgICAgICAgdGFyZ2V0czogW10sXG4gICAgICAgICAgICAgICAgY29tbWVudHM6IFtdLFxuICAgICAgICAgICAgICAgIHVzZXI6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tbWVudHM6IFtdXG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgYWRkQ29tbWVudCAoY29udGVudCkge1xuICAgICAgICAgICAgY29uc3QgdXNlckluZm8gPSBhd2FpdCB0aGlzLiRwYXJlbnQuZ2V0VXNlckluZm8oKVxuICAgICAgICAgICAgYXdhaXQgcG9zdEZldGNoKCcvY2lyY2xlcy9jb21tZW50Jywge1xuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgY2lyY2xlX2lkOiB0aGlzLm1vbWVudC5pZFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbm9BamF4OiB0cnVlXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnRzLnVuc2hpZnQoe1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICAgICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXJVcmw6IHVzZXJJbmZvLmF2YXRhclVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tOYW1lOiB1c2VySW5mby5uaWNrTmFtZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgICAgICAgICB1c2VyX2lkOiB1c2VySW5mby5uaWNrTmFtZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gJydcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+ivhOiuuuWksei0pScsXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgdG9nZ2xlVXB2b3RlICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tb21lbnQuaGFzWmFuKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RVcHZvdGUoZmFsc2UpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RVcHZvdGUodHJ1ZSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b2dnbGVNb21lbnRzICgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndG9nZ2xlTW9tZW50cycpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tbWVudCAoZGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ29tbWVudChkYXRhKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFzeW5jIHJlcXVlc3RVcHZvdGUgKGlzVXBWb3RlKSB7XG4gICAgICAgICAgICBhd2FpdCBnZXRGZXRjaChgL2NpcmNsZXMvJHt0aGlzLm1vbWVudC5pZH0vJHtpc1VwVm90ZSA/ICd6YW4nIDogJ3VuemFuJ31gLCB7XG4gICAgICAgICAgICAgICAgbm9BamF4OiB0cnVlXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vbWVudC5oYXNaYW4gPSAhdGhpcy5tb21lbnQuaGFzWmFuXG4gICAgICAgICAgICAgICAgdGhpcy5tb21lbnQudXB2b3RlTnVtID0gdGhpcy5tb21lbnQuaGFzWmFuID8gdGhpcy5tb21lbnQudXB2b3RlTnVtICsgMSA6IHRoaXMubW9tZW50LnVwdm90ZU51bSA+IDEgPyB0aGlzLm1vbWVudC51cHZvdGVOdW0gLSAxIDogMFxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgb25Mb2FkIChvcHRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCByc3AgPSBhd2FpdCBnZXRGZXRjaChgL2NpcmNsZXMvJHtvcHRpb25zLmlkIHx8IDF9YClcbiAgICAgICAgICAgIHRoaXMubW9tZW50ID0gcnNwLmNpcmNsZVxuICAgICAgICAgICAgdGhpcy5tb21lbnQuaGFzWmFuID0gcnNwLmhhc1phblxuICAgICAgICAgICAgdGhpcy5tb21lbnQudXB2b3RlTnVtID0gcnNwLmNpcmNsZS50YXJnZXRzLmxlbmd0aFxuICAgICAgICAgICAgdGhpcy5tb21lbnQuY29tbWVudHNOdW0gPSByc3AuY2lyY2xlLmNvbW1lbnRzLmxlbmd0aFxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9XG4gICAgfVxuIl19