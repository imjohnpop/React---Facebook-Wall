webpackJsonp([0],{

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(8);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = __webpack_require__(30);

var _jquery2 = _interopRequireDefault(_jquery);

var _AppComponent = __webpack_require__(27);

var _AppComponent2 = _interopRequireDefault(_AppComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_AppComponent2.default, null), document.getElementById('react-app'));

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _NewsFeedComponent = __webpack_require__(31);

var _NewsFeedComponent2 = _interopRequireDefault(_NewsFeedComponent);

var _ContactsComponent = __webpack_require__(33);

var _ContactsComponent2 = _interopRequireDefault(_ContactsComponent);

var _HeaderComponent = __webpack_require__(34);

var _HeaderComponent2 = _interopRequireDefault(_HeaderComponent);

var _LeftMenuComponent = __webpack_require__(35);

var _LeftMenuComponent2 = _interopRequireDefault(_LeftMenuComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { id: 'page' },
                _react2.default.createElement(_HeaderComponent2.default, null),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_LeftMenuComponent2.default, null),
                    _react2.default.createElement(_NewsFeedComponent2.default, null),
                    _react2.default.createElement(_ContactsComponent2.default, null)
                )
            );
        }
    }]);

    return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Post = function (_React$Component) {
    _inherits(Post, _React$Component);

    function Post(props) {
        _classCallCheck(this, Post);

        return _possibleConstructorReturn(this, (Post.__proto__ || Object.getPrototypeOf(Post)).call(this, props));
    }

    _createClass(Post, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "li",
                { className: "post" },
                _react2.default.createElement(
                    "div",
                    { className: "user" },
                    "You"
                ),
                _react2.default.createElement(
                    "div",
                    { className: "time" },
                    this.props.published_at
                ),
                _react2.default.createElement(
                    "h3",
                    null,
                    this.props.title
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    this.props.text
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "Likes: ",
                    _react2.default.createElement(
                        "span",
                        null,
                        this.props.likes
                    )
                )
            );
        }
    }]);

    return Post;
}(_react2.default.Component);

exports.default = Post;

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _NewPostFormComponent = __webpack_require__(32);

var _NewPostFormComponent2 = _interopRequireDefault(_NewPostFormComponent);

var _PostComponent = __webpack_require__(28);

var _PostComponent2 = _interopRequireDefault(_PostComponent);

var _jquery = __webpack_require__(30);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewsFeed = function (_React$Component) {
    _inherits(NewsFeed, _React$Component);

    function NewsFeed(props) {
        _classCallCheck(this, NewsFeed);

        var _this = _possibleConstructorReturn(this, (NewsFeed.__proto__ || Object.getPrototypeOf(NewsFeed)).call(this, props));

        _this.state = {
            posts: [],
            orderby: 'date',
            limit: 10,
            from_friends_only: false,
            current_datetime: null
        };
        return _this;
    }

    _createClass(NewsFeed, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var self = this;
            _jquery2.default.ajax({
                method: 'get',
                url: 'api/all-posts.php'
            }).done(function (data) {
                var final = JSON.parse(data);
                self.setState({
                    posts: final.posts
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var posts = [];
            for (var i in this.state.posts) {
                posts[i] = _react2.default.createElement(_PostComponent2.default, { title: this.state.posts[i].title, text: this.state.posts[i].text, published_at: this.state.posts[i].published_at, likes: this.state.posts[i].likes });
            }
            return _react2.default.createElement(
                'div',
                { className: 'feed' },
                _react2.default.createElement(_NewPostFormComponent2.default, null),
                _react2.default.createElement(
                    'ul',
                    null,
                    posts
                )
            );
        }
    }]);

    return NewsFeed;
}(_react2.default.Component);

exports.default = NewsFeed;

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewPostForm = function (_React$Component) {
    _inherits(NewPostForm, _React$Component);

    function NewPostForm() {
        _classCallCheck(this, NewPostForm);

        return _possibleConstructorReturn(this, (NewPostForm.__proto__ || Object.getPrototypeOf(NewPostForm)).apply(this, arguments));
    }

    _createClass(NewPostForm, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "new_post" },
                _react2.default.createElement(
                    "form",
                    { action: "" },
                    _react2.default.createElement("textarea", { name: "text", id: "", cols: "30", rows: "10", placeholder: "What are you thinking about?" }),
                    _react2.default.createElement("input", { type: "submit", value: "add" })
                )
            );
        }
    }]);

    return NewPostForm;
}(_react2.default.Component);

exports.default = NewPostForm;

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Contacts = function (_React$Component) {
    _inherits(Contacts, _React$Component);

    function Contacts() {
        _classCallCheck(this, Contacts);

        return _possibleConstructorReturn(this, (Contacts.__proto__ || Object.getPrototypeOf(Contacts)).apply(this, arguments));
    }

    _createClass(Contacts, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "nav",
                { className: "contacts" },
                _react2.default.createElement(
                    "h2",
                    null,
                    "Contacts"
                ),
                _react2.default.createElement(
                    "a",
                    { href: "#" },
                    "Mark Zuckerberg"
                ),
                _react2.default.createElement(
                    "a",
                    { href: "#" },
                    "Jana Ve\u010Derkov\xE1"
                ),
                _react2.default.createElement(
                    "a",
                    { href: "#" },
                    "Ada Lovelace"
                )
            );
        }
    }]);

    return Contacts;
}(_react2.default.Component);

exports.default = Contacts;

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "header",
                null,
                "Unread posts: ",
                _react2.default.createElement(
                    "span",
                    { className: "unread" },
                    "0"
                )
            );
        }
    }]);

    return Header;
}(_react2.default.Component);

exports.default = Header;

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LeftMenu = function (_React$Component) {
    _inherits(LeftMenu, _React$Component);

    function LeftMenu() {
        _classCallCheck(this, LeftMenu);

        return _possibleConstructorReturn(this, (LeftMenu.__proto__ || Object.getPrototypeOf(LeftMenu)).apply(this, arguments));
    }

    _createClass(LeftMenu, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "nav",
                { className: "leftmenu" },
                _react2.default.createElement(
                    "h2",
                    null,
                    "You"
                ),
                _react2.default.createElement(
                    "a",
                    { href: "#" },
                    "Selected posts"
                ),
                _react2.default.createElement(
                    "a",
                    { href: "#" },
                    "Messenger"
                ),
                _react2.default.createElement(
                    "a",
                    { href: "#" },
                    "Marketplace"
                )
            );
        }
    }]);

    return LeftMenu;
}(_react2.default.Component);

exports.default = LeftMenu;

/***/ })

},[15]);