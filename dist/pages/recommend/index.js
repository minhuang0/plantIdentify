'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wxParse = require('./../../libs/wxParse/wxParse.js');

var _wxParse2 = _interopRequireDefault(_wxParse);

var _fetch = require('./../../modules/common/fetch.js');

var _editor = require('./../../components/editor.js');

var _editor2 = _interopRequireDefault(_editor);

var _comments = require('./../../components/comments.js');

var _comments2 = _interopRequireDefault(_comments);

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
            navigationBarTitleText: '文章'
        }, _this.$repeat = {}, _this.$props = { "v-editor": { "xmlns:v-on": "", "v-bind:inputValue.sync": "inputValue" }, "v-comments": { "xmlns:v-bind": "", "v-bind:comments.sync": "comments" } }, _this.$events = { "v-editor": { "v-on:click": "comment" } }, _this.components = {
            'v-editor': _editor2.default,
            'v-comments': _comments2.default
        }, _this.data = {
            inputValue: '',
            item: {
                tags: []
            },
            comments: [],
            userInfo: {}
        }, _this.computed = {
            tags: function tags() {
                return this.item.tags.reduce(function (value, t) {
                    return value + ' #' + t + '#';
                }, '');
            }
        }, _this.methods = {
            renderPost: function renderPost(post) {
                post.targetsLength = post.targets.length;
                post.commentsLength = post.comments.length;
                post.tags = post.topics.map(function (t) {
                    return t.name;
                });
                var userInfo = Object.assign({
                    nickName: '小森',
                    avatarUrl: 'http://static.htxq.net/UploadFiles/headimg/20160721142529242.jpg'
                }, post.user || {});
                return [post, userInfo];
            },
            comment: function comment(data) {
                this.postComment(data);
            },
            toggleUpvote: function toggleUpvote() {
                if (this.item.hasZan) {
                    return this.requestUpvote(false);
                }
                return this.requestUpvote(true);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'postComment',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
                var _this2 = this;

                var userInfo, rsp;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.$parent.getUserInfo();

                            case 2:
                                userInfo = _context.sent;
                                _context.next = 5;
                                return (0, _fetch.postFetch)('/posts/comment', {
                                    data: {
                                        content: data,
                                        post_id: this.item.id
                                    },
                                    noAjax: true
                                }).then(function () {
                                    _this2.comments.unshift({
                                        content: data,
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
                                rsp = _context.sent;

                                console.log(rsp);

                            case 7:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function postComment(_x) {
                return _ref2.apply(this, arguments);
            }

            return postComment;
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
                                return (0, _fetch.getFetch)('/posts/' + this.item.id + '/' + (isUpVote ? 'zan' : 'unzan'), {
                                    noAjax: true
                                }).then(function () {
                                    _this3.item.hasZan = !_this3.item.hasZan;
                                    _this3.item.upvoteNum = _this3.item.hasZan ? _this3.item.upvoteNum + 1 : _this3.item.upvoteNum > 1 ? _this3.item.upvoteNum - 1 : 0;
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
                var data, renderData;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return (0, _fetch.getFetch)('/posts/' + (options.id || 26));

                            case 2:
                                data = _context3.sent;
                                renderData = this.methods.renderPost(data.post);

                                this.item = renderData[0];
                                this.item.upvoteNum = this.item.targets.length;
                                this.item.commentsNum = this.item.comments.length;
                                this.comments = this.item.comments;
                                this.userInfo = renderData[1];
                                this.$apply();
                                _wxParse2.default.wxParse('article', 'html', this.item.content, this, 0);
                                _wepy2.default.setNavigationBarTitle({
                                    title: this.item.title
                                });

                            case 12:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIkVkaXRvciIsIkNvbW1lbnRzIiwiZGF0YSIsImlucHV0VmFsdWUiLCJpdGVtIiwidGFncyIsImNvbW1lbnRzIiwidXNlckluZm8iLCJjb21wdXRlZCIsInJlZHVjZSIsInZhbHVlIiwidCIsIm1ldGhvZHMiLCJyZW5kZXJQb3N0IiwicG9zdCIsInRhcmdldHNMZW5ndGgiLCJ0YXJnZXRzIiwibGVuZ3RoIiwiY29tbWVudHNMZW5ndGgiLCJ0b3BpY3MiLCJtYXAiLCJuYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwibmlja05hbWUiLCJhdmF0YXJVcmwiLCJ1c2VyIiwiY29tbWVudCIsInBvc3RDb21tZW50IiwidG9nZ2xlVXB2b3RlIiwiaGFzWmFuIiwicmVxdWVzdFVwdm90ZSIsIiRwYXJlbnQiLCJnZXRVc2VySW5mbyIsImNvbnRlbnQiLCJwb3N0X2lkIiwiaWQiLCJub0FqYXgiLCJ0aGVuIiwidW5zaGlmdCIsImNyZWF0ZWRfYXQiLCJEYXRlIiwidXNlcl9pZCIsIiRhcHBseSIsImNhdGNoIiwid2VweSIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwicnNwIiwiY29uc29sZSIsImxvZyIsImlzVXBWb3RlIiwidXB2b3RlTnVtIiwib3B0aW9ucyIsInJlbmRlckRhdGEiLCJjb21tZW50c051bSIsIld4UGFyc2UiLCJ3eFBhcnNlIiwic2V0TmF2aWdhdGlvbkJhclRpdGxlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQUdWQyxPLEdBQVUsRSxRQUNq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SUFBdEQsRUFBNEQsQ0FBNUQ7QUFDQVcsK0NBQUtlLHFCQUFMLENBQTJCO0FBQ3ZCYiwyQ0FBTyxLQUFLM0MsSUFBTCxDQUFVMkM7QUFETSxpQ0FBM0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFqRzJCRixlQUFLZ0IsSTs7a0JBQW5CcEUsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IFd4UGFyc2UgZnJvbSAnLi4vLi4vbGlicy93eFBhcnNlL3d4UGFyc2UuanMnXG4gICAgaW1wb3J0IHsgZ2V0RmV0Y2gsIHBvc3RGZXRjaCB9IGZyb20gJ0AvbW9kdWxlcy9jb21tb24vZmV0Y2gnXG4gICAgaW1wb3J0IEVkaXRvciBmcm9tICdAL2NvbXBvbmVudHMvZWRpdG9yJ1xuICAgIGltcG9ydCBDb21tZW50cyBmcm9tICdAL2NvbXBvbmVudHMvY29tbWVudHMnXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmlofnq6AnXG4gICAgICAgIH1cbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInYtZWRpdG9yXCI6e1wieG1sbnM6di1vblwiOlwiXCIsXCJ2LWJpbmQ6aW5wdXRWYWx1ZS5zeW5jXCI6XCJpbnB1dFZhbHVlXCJ9LFwidi1jb21tZW50c1wiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6Y29tbWVudHMuc3luY1wiOlwiY29tbWVudHNcIn19O1xyXG4kZXZlbnRzID0ge1widi1lZGl0b3JcIjp7XCJ2LW9uOmNsaWNrXCI6XCJjb21tZW50XCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICAndi1lZGl0b3InOiBFZGl0b3IsXG4gICAgICAgICAgICAndi1jb21tZW50cyc6IENvbW1lbnRzXG4gICAgICAgIH1cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGlucHV0VmFsdWU6ICcnLFxuICAgICAgICAgICAgaXRlbToge1xuICAgICAgICAgICAgICAgIHRhZ3M6IFtdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tbWVudHM6IFtdLFxuICAgICAgICAgICAgdXNlckluZm86IHt9XG4gICAgICAgIH1cbiAgICAgICAgY29tcHV0ZWQgPSB7XG4gICAgICAgICAgICB0YWdzICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pdGVtLnRhZ3MucmVkdWNlKCh2YWx1ZSwgdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYCR7dmFsdWV9ICMke3R9I2BcbiAgICAgICAgICAgICAgICB9LCAnJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICByZW5kZXJQb3N0IChwb3N0KSB7XG4gICAgICAgICAgICAgICAgcG9zdC50YXJnZXRzTGVuZ3RoID0gcG9zdC50YXJnZXRzLmxlbmd0aFxuICAgICAgICAgICAgICAgIHBvc3QuY29tbWVudHNMZW5ndGggPSBwb3N0LmNvbW1lbnRzLmxlbmd0aFxuICAgICAgICAgICAgICAgIHBvc3QudGFncyA9IHBvc3QudG9waWNzLm1hcCh0ID0+IHQubmFtZSlcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VySW5mbyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgICAgICBuaWNrTmFtZTogJ+Wwj+ajricsXG4gICAgICAgICAgICAgICAgICAgIGF2YXRhclVybDogJ2h0dHA6Ly9zdGF0aWMuaHR4cS5uZXQvVXBsb2FkRmlsZXMvaGVhZGltZy8yMDE2MDcyMTE0MjUyOTI0Mi5qcGcnXG4gICAgICAgICAgICAgICAgfSwgcG9zdC51c2VyIHx8IHt9KVxuICAgICAgICAgICAgICAgIHJldHVybiBbcG9zdCwgdXNlckluZm9dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tbWVudCAoZGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zdENvbW1lbnQoZGF0YSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b2dnbGVVcHZvdGUgKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLml0ZW0uaGFzWmFuKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RVcHZvdGUoZmFsc2UpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RVcHZvdGUodHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhc3luYyBwb3N0Q29tbWVudCAoZGF0YSkge1xuICAgICAgICAgICAgY29uc3QgdXNlckluZm8gPSBhd2FpdCB0aGlzLiRwYXJlbnQuZ2V0VXNlckluZm8oKVxuICAgICAgICAgICAgY29uc3QgcnNwID0gYXdhaXQgcG9zdEZldGNoKCcvcG9zdHMvY29tbWVudCcsIHtcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHBvc3RfaWQ6IHRoaXMuaXRlbS5pZFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbm9BamF4OiB0cnVlXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnRzLnVuc2hpZnQoe1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBkYXRhLFxuICAgICAgICAgICAgICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXJVcmw6IHVzZXJJbmZvLmF2YXRhclVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tOYW1lOiB1c2VySW5mby5uaWNrTmFtZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgICAgICAgICB1c2VyX2lkOiB1c2VySW5mby5uaWNrTmFtZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gJydcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+ivhOiuuuWksei0pScsXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJzcClcbiAgICAgICAgfVxuICAgICAgICBhc3luYyByZXF1ZXN0VXB2b3RlIChpc1VwVm90ZSkge1xuICAgICAgICAgICAgYXdhaXQgZ2V0RmV0Y2goYC9wb3N0cy8ke3RoaXMuaXRlbS5pZH0vJHtpc1VwVm90ZSA/ICd6YW4nIDogJ3VuemFuJ31gLCB7XG4gICAgICAgICAgICAgICAgbm9BamF4OiB0cnVlXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW0uaGFzWmFuID0gIXRoaXMuaXRlbS5oYXNaYW5cbiAgICAgICAgICAgICAgICB0aGlzLml0ZW0udXB2b3RlTnVtID0gdGhpcy5pdGVtLmhhc1phbiA/IHRoaXMuaXRlbS51cHZvdGVOdW0gKyAxIDogdGhpcy5pdGVtLnVwdm90ZU51bSA+IDEgPyB0aGlzLml0ZW0udXB2b3RlTnVtIC0gMSA6IDBcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgYXN5bmMgb25Mb2FkIChvcHRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RmV0Y2goYC9wb3N0cy8ke29wdGlvbnMuaWQgfHwgMjZ9YClcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlckRhdGEgPSB0aGlzLm1ldGhvZHMucmVuZGVyUG9zdChkYXRhLnBvc3QpXG4gICAgICAgICAgICB0aGlzLml0ZW0gPSByZW5kZXJEYXRhWzBdXG4gICAgICAgICAgICB0aGlzLml0ZW0udXB2b3RlTnVtID0gdGhpcy5pdGVtLnRhcmdldHMubGVuZ3RoXG4gICAgICAgICAgICB0aGlzLml0ZW0uY29tbWVudHNOdW0gPSB0aGlzLml0ZW0uY29tbWVudHMubGVuZ3RoXG4gICAgICAgICAgICB0aGlzLmNvbW1lbnRzID0gdGhpcy5pdGVtLmNvbW1lbnRzXG4gICAgICAgICAgICB0aGlzLnVzZXJJbmZvID0gcmVuZGVyRGF0YVsxXVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgICAgV3hQYXJzZS53eFBhcnNlKCdhcnRpY2xlJywgJ2h0bWwnLCB0aGlzLml0ZW0uY29udGVudCwgdGhpcywgMClcbiAgICAgICAgICAgIHdlcHkuc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5pdGVtLnRpdGxlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuIl19