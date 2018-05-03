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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImRhdGEiLCJpbnB1dFZhbHVlIiwiaXRlbSIsInRhZ3MiLCJjb21tZW50cyIsInVzZXJJbmZvIiwiY29tcHV0ZWQiLCJyZWR1Y2UiLCJ2YWx1ZSIsInQiLCJtZXRob2RzIiwicmVuZGVyUG9zdCIsInBvc3QiLCJ0YXJnZXRzTGVuZ3RoIiwidGFyZ2V0cyIsImxlbmd0aCIsImNvbW1lbnRzTGVuZ3RoIiwidG9waWNzIiwibWFwIiwibmFtZSIsIk9iamVjdCIsImFzc2lnbiIsIm5pY2tOYW1lIiwiYXZhdGFyVXJsIiwidXNlciIsImNvbW1lbnQiLCJwb3N0Q29tbWVudCIsInRvZ2dsZVVwdm90ZSIsImhhc1phbiIsInJlcXVlc3RVcHZvdGUiLCIkcGFyZW50IiwiZ2V0VXNlckluZm8iLCJjb250ZW50IiwicG9zdF9pZCIsImlkIiwibm9BamF4IiwidGhlbiIsInVuc2hpZnQiLCJjcmVhdGVkX2F0IiwiRGF0ZSIsInVzZXJfaWQiLCIkYXBwbHkiLCJjYXRjaCIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwicnNwIiwiY29uc29sZSIsImxvZyIsImlzVXBWb3RlIiwidXB2b3RlTnVtIiwib3B0aW9ucyIsInJlbmRlckRhdGEiLCJjb21tZW50c051bSIsInd4UGFyc2UiLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QjtBQURuQixTLFFBR1ZDLE8sR0FBVSxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxZQUFXLEVBQUMsY0FBYSxFQUFkLEVB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TyxLQUFLMUMsSUFBTCxDQUFVMEM7QUFETSxpQ0FBM0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFqRzJCLGVBQUthLEk7O2tCQUFuQmhFLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCBXeFBhcnNlIGZyb20gJy4uLy4uL2xpYnMvd3hQYXJzZS93eFBhcnNlLmpzJ1xuICAgIGltcG9ydCB7IGdldEZldGNoLCBwb3N0RmV0Y2ggfSBmcm9tICdAL21vZHVsZXMvY29tbW9uL2ZldGNoJ1xuICAgIGltcG9ydCBFZGl0b3IgZnJvbSAnQC9jb21wb25lbnRzL2VkaXRvcidcbiAgICBpbXBvcnQgQ29tbWVudHMgZnJvbSAnQC9jb21wb25lbnRzL2NvbW1lbnRzJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5paH56ugJ1xuICAgICAgICB9XG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJ2LWVkaXRvclwiOntcInhtbG5zOnYtb25cIjpcIlwiLFwidi1iaW5kOmlucHV0VmFsdWUuc3luY1wiOlwiaW5wdXRWYWx1ZVwifSxcInYtY29tbWVudHNcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmNvbW1lbnRzLnN5bmNcIjpcImNvbW1lbnRzXCJ9fTtcclxuJGV2ZW50cyA9IHtcInYtZWRpdG9yXCI6e1widi1vbjpjbGlja1wiOlwiY29tbWVudFwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgJ3YtZWRpdG9yJzogRWRpdG9yLFxuICAgICAgICAgICAgJ3YtY29tbWVudHMnOiBDb21tZW50c1xuICAgICAgICB9XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBpbnB1dFZhbHVlOiAnJyxcbiAgICAgICAgICAgIGl0ZW06IHtcbiAgICAgICAgICAgICAgICB0YWdzOiBbXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbW1lbnRzOiBbXSxcbiAgICAgICAgICAgIHVzZXJJbmZvOiB7fVxuICAgICAgICB9XG4gICAgICAgIGNvbXB1dGVkID0ge1xuICAgICAgICAgICAgdGFncyAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXRlbS50YWdzLnJlZHVjZSgodmFsdWUsIHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAke3ZhbHVlfSAjJHt0fSNgXG4gICAgICAgICAgICAgICAgfSwgJycpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgcmVuZGVyUG9zdCAocG9zdCkge1xuICAgICAgICAgICAgICAgIHBvc3QudGFyZ2V0c0xlbmd0aCA9IHBvc3QudGFyZ2V0cy5sZW5ndGhcbiAgICAgICAgICAgICAgICBwb3N0LmNvbW1lbnRzTGVuZ3RoID0gcG9zdC5jb21tZW50cy5sZW5ndGhcbiAgICAgICAgICAgICAgICBwb3N0LnRhZ3MgPSBwb3N0LnRvcGljcy5tYXAodCA9PiB0Lm5hbWUpXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlckluZm8gPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICAgICAgbmlja05hbWU6ICflsI/mo64nLFxuICAgICAgICAgICAgICAgICAgICBhdmF0YXJVcmw6ICdodHRwOi8vc3RhdGljLmh0eHEubmV0L1VwbG9hZEZpbGVzL2hlYWRpbWcvMjAxNjA3MjExNDI1MjkyNDIuanBnJ1xuICAgICAgICAgICAgICAgIH0sIHBvc3QudXNlciB8fCB7fSlcbiAgICAgICAgICAgICAgICByZXR1cm4gW3Bvc3QsIHVzZXJJbmZvXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbW1lbnQgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3RDb21tZW50KGRhdGEpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9nZ2xlVXB2b3RlICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pdGVtLmhhc1phbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0VXB2b3RlKGZhbHNlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0VXB2b3RlKHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgcG9zdENvbW1lbnQgKGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJJbmZvID0gYXdhaXQgdGhpcy4kcGFyZW50LmdldFVzZXJJbmZvKClcbiAgICAgICAgICAgIGNvbnN0IHJzcCA9IGF3YWl0IHBvc3RGZXRjaCgnL3Bvc3RzL2NvbW1lbnQnLCB7XG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBkYXRhLFxuICAgICAgICAgICAgICAgICAgICBwb3N0X2lkOiB0aGlzLml0ZW0uaWRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG5vQWpheDogdHJ1ZVxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21tZW50cy51bnNoaWZ0KHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgdXNlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyVXJsOiB1c2VySW5mby5hdmF0YXJVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICBuaWNrTmFtZTogdXNlckluZm8ubmlja05hbWVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogdXNlckluZm8ubmlja05hbWVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9ICcnXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfor4TorrrlpLHotKUnLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyc3ApXG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgcmVxdWVzdFVwdm90ZSAoaXNVcFZvdGUpIHtcbiAgICAgICAgICAgIGF3YWl0IGdldEZldGNoKGAvcG9zdHMvJHt0aGlzLml0ZW0uaWR9LyR7aXNVcFZvdGUgPyAnemFuJyA6ICd1bnphbid9YCwge1xuICAgICAgICAgICAgICAgIG5vQWpheDogdHJ1ZVxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtLmhhc1phbiA9ICF0aGlzLml0ZW0uaGFzWmFuXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtLnVwdm90ZU51bSA9IHRoaXMuaXRlbS5oYXNaYW4gPyB0aGlzLml0ZW0udXB2b3RlTnVtICsgMSA6IHRoaXMuaXRlbS51cHZvdGVOdW0gPiAxID8gdGhpcy5pdGVtLnVwdm90ZU51bSAtIDEgOiAwXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGFzeW5jIG9uTG9hZCAob3B0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldEZldGNoKGAvcG9zdHMvJHtvcHRpb25zLmlkIHx8IDI2fWApXG4gICAgICAgICAgICBjb25zdCByZW5kZXJEYXRhID0gdGhpcy5tZXRob2RzLnJlbmRlclBvc3QoZGF0YS5wb3N0KVxuICAgICAgICAgICAgdGhpcy5pdGVtID0gcmVuZGVyRGF0YVswXVxuICAgICAgICAgICAgdGhpcy5pdGVtLnVwdm90ZU51bSA9IHRoaXMuaXRlbS50YXJnZXRzLmxlbmd0aFxuICAgICAgICAgICAgdGhpcy5pdGVtLmNvbW1lbnRzTnVtID0gdGhpcy5pdGVtLmNvbW1lbnRzLmxlbmd0aFxuICAgICAgICAgICAgdGhpcy5jb21tZW50cyA9IHRoaXMuaXRlbS5jb21tZW50c1xuICAgICAgICAgICAgdGhpcy51c2VySW5mbyA9IHJlbmRlckRhdGFbMV1cbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICAgIFd4UGFyc2Uud3hQYXJzZSgnYXJ0aWNsZScsICdodG1sJywgdGhpcy5pdGVtLmNvbnRlbnQsIHRoaXMsIDApXG4gICAgICAgICAgICB3ZXB5LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuaXRlbS50aXRsZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==