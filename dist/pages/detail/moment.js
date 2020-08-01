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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbWVudC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJFZGl0b3IiLCJtb21lbnRDb21wb25lbnQiLCJDb21tZW50cyIsImNvbXB1dGVkIiwibW9tZW50RGF0YSIsInVzZXIiLCJtb21lbnQiLCJjb21tZW50cyIsImF2YXRhciIsImF2YXRhclVybCIsInVzZXJfaWQiLCJuYW1lIiwibmlja05hbWUiLCJjb250ZW50IiwiaW1hZ2VzIiwiY2lyY2xlX2ltZ3MiLCJtYXAiLCJpIiwiaW1nVXJsIiwiY3JlYXRlVGltZSIsImNyZWF0ZWRfYXQiLCJ1cHZvdGVOdW0iLCJjb21tZW50c051bSIsImRhdGEiLCJpbnB1dFZhbHVlIiwidGFyZ2V0cyIsIm1ldGhvZHMiLCJ0b2dnbGVVcHZvdGUiLCJoYXNaYW4iLCJyZXF1ZXN0VXB2b3RlIiwidG9nZ2xlTW9tZW50cyIsImNvbnNvbGUiLCJsb2ciLCJjb21tZW50IiwiYWRkQ29tbWVudCIsIiRwYXJlbnQiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwiY2lyY2xlX2lkIiwiaWQiLCJub0FqYXgiLCJ0aGVuIiwidW5zaGlmdCIsIkRhdGUiLCIkYXBwbHkiLCJjYXRjaCIsIndlcHkiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsImlzVXBWb3RlIiwib3B0aW9ucyIsInJzcCIsImNpcmNsZSIsImxlbmd0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsUUFJVkMsTyxHQUFVLEUsUUFDakJDLE0sR0FBUyxFQUFDLFlBQVcsRUFBQywwQkFBeUIsWUFBMUIsRUFB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QXdDV0MsUTs7Ozs7Ozs7dUNBQ1gsbUNBQXFCLEtBQUs3QyxNQUFMLENBQVlpQyxFQUFqQyxVQUF1Q1ksV0FBVyxLQUFYLEdBQW1CLE9BQTFELEdBQXFFO0FBQ3ZFWCw0Q0FBUTtBQUQrRCxpQ0FBckUsRUFFSEMsSUFGRyxDQUVFLFlBQU07QUFDViwyQ0FBS25DLE1BQUwsQ0FBWXNCLE1BQVosR0FBcUIsQ0FBQyxPQUFLdEIsTUFBTCxDQUFZc0IsTUFBbEM7QUFDQSwyQ0FBS3RCLE1BQUwsQ0FBWWUsU0FBWixHQUF3QixPQUFLZixNQUFMLENBQVlzQixNQUFaLEdBQXFCLE9BQUt0QixNQUFMLENBQVllLFNBQVosR0FBd0IsQ0FBN0MsR0FBaUQsT0FBS2YsTUFBTCxDQUFZZSxTQUFaLEdBQXdCLENBQXhCLEdBQTRCLE9BQUtmLE1BQUwsQ0FBWWUsU0FBWixHQUF3QixDQUFwRCxHQUF3RCxDQUFqSTtBQUNBLDJDQUFLdUIsTUFBTDtBQUNILGlDQU5LLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBUUlRLE87Ozs7Ozs7dUNBQ1Esb0NBQXFCQSxRQUFRYixFQUFSLElBQWMsQ0FBbkMsRTs7O0FBQVpjLG1DOztBQUNOLHFDQUFLL0MsTUFBTCxHQUFjK0MsSUFBSUMsTUFBbEI7QUFDQSxxQ0FBS2hELE1BQUwsQ0FBWXNCLE1BQVosR0FBcUJ5QixJQUFJekIsTUFBekI7QUFDQSxxQ0FBS3RCLE1BQUwsQ0FBWWUsU0FBWixHQUF3QmdDLElBQUlDLE1BQUosQ0FBVzdCLE9BQVgsQ0FBbUI4QixNQUEzQztBQUNBLHFDQUFLakQsTUFBTCxDQUFZZ0IsV0FBWixHQUEwQitCLElBQUlDLE1BQUosQ0FBVy9DLFFBQVgsQ0FBb0JnRCxNQUE5QztBQUNBLHFDQUFLWCxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbEcyQkUsZUFBS1UsSTs7a0JBQW5CL0QsSyIsImZpbGUiOiJtb21lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCB7IGdldEZldGNoLCBwb3N0RmV0Y2ggfSBmcm9tICdAL21vZHVsZXMvY29tbW9uL2ZldGNoJ1xuICAgIGltcG9ydCBtb21lbnRDb21wb25lbnQgZnJvbSAnQC9jb21wb25lbnRzL21vbWVudCdcbiAgICBpbXBvcnQgQ29tbWVudHMgZnJvbSAnQC9jb21wb25lbnRzL2NvbW1lbnRzJ1xuICAgIGltcG9ydCBFZGl0b3IgZnJvbSAnQC9jb21wb25lbnRzL2VkaXRvcidcbiAgICBpbXBvcnQgeyBwYWRkaW5nSW1nIH0gZnJvbSAnQC9tb2R1bGVzL2NvbW1vbi91dGlscydcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahCdcbiAgICAgICAgfVxuXG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJ2LWVkaXRvclwiOntcInYtYmluZDppbnB1dFZhbHVlLnN5bmNcIjpcImlucHV0VmFsdWVcIn0sXCJ2LW1vbWVudFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bW9tZW50LnN5bmNcIjpcIm1vbWVudERhdGFcIixcInhtbG5zOnYtb25cIjpcIlwifSxcInYtY29tbWVudHNcIjp7XCJ2LWJpbmQ6Y29tbWVudHMuc3luY1wiOlwiY29tbWVudHNcIn19O1xyXG4kZXZlbnRzID0ge1widi1lZGl0b3JcIjp7XCJ2LW9uOmNsaWNrXCI6XCJjb21tZW50XCJ9LFwidi1tb21lbnRcIjp7XCJ2LW9uOnRvZ2dsZVVwdm90ZVwiOlwidG9nZ2xlVXB2b3RlXCIsXCJ2LW9uOnRvZ2dsZU1vbWVudHNcIjpcInRvZ2dsZU1vbWVudHNcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgICd2LWVkaXRvcic6IEVkaXRvcixcbiAgICAgICAgICAgICd2LW1vbWVudCc6IG1vbWVudENvbXBvbmVudCxcbiAgICAgICAgICAgICd2LWNvbW1lbnRzJzogQ29tbWVudHNcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXB1dGVkID0ge1xuICAgICAgICAgICAgbW9tZW50RGF0YSAoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IHRoaXMubW9tZW50LnVzZXIgfHwge31cbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnRzID0gdGhpcy5tb21lbnQuY29tbWVudHNcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBhdmF0YXI6IHVzZXIuYXZhdGFyVXJsLFxuICAgICAgICAgICAgICAgICAgICB1c2VyX2lkOiB0aGlzLm1vbWVudC51c2VyX2lkLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB1c2VyLm5pY2tOYW1lLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB0aGlzLm1vbWVudC5jb250ZW50LFxuICAgICAgICAgICAgICAgICAgICBpbWFnZXM6IHBhZGRpbmdJbWcodGhpcy5tb21lbnQuY2lyY2xlX2ltZ3MubWFwKGkgPT4gaS5pbWdVcmwpKSxcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlVGltZTogdGhpcy5tb21lbnQuY3JlYXRlZF9hdCB8fCAn5peg6L+U5Zue5pe26Ze0JyxcbiAgICAgICAgICAgICAgICAgICAgdXB2b3RlTnVtOiB0aGlzLm1vbWVudC51cHZvdGVOdW0sXG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnRzTnVtOiB0aGlzLm1vbWVudC5jb21tZW50c051bVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBpbnB1dFZhbHVlOiAnJyxcbiAgICAgICAgICAgIG1vbWVudDoge1xuICAgICAgICAgICAgICAgIGNpcmNsZV9pbWdzOiBbXSxcbiAgICAgICAgICAgICAgICB0YXJnZXRzOiBbXSxcbiAgICAgICAgICAgICAgICBjb21tZW50czogW10sXG4gICAgICAgICAgICAgICAgdXNlcjoge31cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21tZW50czogW11cbiAgICAgICAgfVxuICAgICAgICBhc3luYyBhZGRDb21tZW50IChjb250ZW50KSB7XG4gICAgICAgICAgICBjb25zdCB1c2VySW5mbyA9IGF3YWl0IHRoaXMuJHBhcmVudC5nZXRVc2VySW5mbygpXG4gICAgICAgICAgICBhd2FpdCBwb3N0RmV0Y2goJy9jaXJjbGVzL2NvbW1lbnQnLCB7XG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICAgICAgICAgICBjaXJjbGVfaWQ6IHRoaXMubW9tZW50LmlkXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBub0FqYXg6IHRydWVcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudHMudW5zaGlmdCh7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhclVybDogdXNlckluZm8uYXZhdGFyVXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmlja05hbWU6IHVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4gICAgICAgICAgICAgICAgICAgIHVzZXJfaWQ6IHVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSAnJ1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+E6K665aSx6LSlJyxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICB0b2dnbGVVcHZvdGUgKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vbWVudC5oYXNaYW4pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdFVwdm90ZShmYWxzZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdFVwdm90ZSh0cnVlKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvZ2dsZU1vbWVudHMgKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0b2dnbGVNb21lbnRzJylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21tZW50IChkYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDb21tZW50KGRhdGEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgcmVxdWVzdFVwdm90ZSAoaXNVcFZvdGUpIHtcbiAgICAgICAgICAgIGF3YWl0IGdldEZldGNoKGAvY2lyY2xlcy8ke3RoaXMubW9tZW50LmlkfS8ke2lzVXBWb3RlID8gJ3phbicgOiAndW56YW4nfWAsIHtcbiAgICAgICAgICAgICAgICBub0FqYXg6IHRydWVcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubW9tZW50Lmhhc1phbiA9ICF0aGlzLm1vbWVudC5oYXNaYW5cbiAgICAgICAgICAgICAgICB0aGlzLm1vbWVudC51cHZvdGVOdW0gPSB0aGlzLm1vbWVudC5oYXNaYW4gPyB0aGlzLm1vbWVudC51cHZvdGVOdW0gKyAxIDogdGhpcy5tb21lbnQudXB2b3RlTnVtID4gMSA/IHRoaXMubW9tZW50LnVwdm90ZU51bSAtIDEgOiAwXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBhc3luYyBvbkxvYWQgKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHJzcCA9IGF3YWl0IGdldEZldGNoKGAvY2lyY2xlcy8ke29wdGlvbnMuaWQgfHwgMX1gKVxuICAgICAgICAgICAgdGhpcy5tb21lbnQgPSByc3AuY2lyY2xlXG4gICAgICAgICAgICB0aGlzLm1vbWVudC5oYXNaYW4gPSByc3AuaGFzWmFuXG4gICAgICAgICAgICB0aGlzLm1vbWVudC51cHZvdGVOdW0gPSByc3AuY2lyY2xlLnRhcmdldHMubGVuZ3RoXG4gICAgICAgICAgICB0aGlzLm1vbWVudC5jb21tZW50c051bSA9IHJzcC5jaXJjbGUuY29tbWVudHMubGVuZ3RoXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH1cbiAgICB9XG4iXX0=