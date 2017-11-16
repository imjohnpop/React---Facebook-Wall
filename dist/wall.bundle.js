webpackJsonp([0],{

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(19);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _AppComponent = __webpack_require__(29);

var _AppComponent2 = _interopRequireDefault(_AppComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_AppComponent2.default, null), document.getElementById('react-app'));

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

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
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { id: "page" },
                _react2.default.createElement(
                    "header",
                    null,
                    "Unread posts: ",
                    _react2.default.createElement(
                        "span",
                        { className: "unread" },
                        "0"
                    )
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(
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
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "feed" },
                        _react2.default.createElement(
                            "div",
                            { className: "new_post" },
                            _react2.default.createElement(
                                "form",
                                { action: "" },
                                _react2.default.createElement("textarea", { name: "text", id: "", cols: "30", rows: "10", placeholder: "What are you thinking about?" }),
                                _react2.default.createElement("input", { type: "submit", value: "add" })
                            )
                        ),
                        _react2.default.createElement(
                            "ul",
                            null,
                            _react2.default.createElement(
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
                                    "4 minutes ago"
                                ),
                                _react2.default.createElement(
                                    "p",
                                    null,
                                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam commodo dui eget wisi. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
                                )
                            ),
                            _react2.default.createElement(
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
                                    "4 hours ago"
                                ),
                                _react2.default.createElement(
                                    "p",
                                    null,
                                    "In enim a arcu imperdiet malesuada. Nullam faucibus mi quis velit. Aenean fermentum risus id tortor. Et harum quidem rerum facilis est et expedita distinctio. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Nam sed tellus id magna elementum tincidunt."
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
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
                    )
                )
            );
        }
    }]);

    return App;
}(_react2.default.Component);

exports.default = App;

/***/ })

},[14]);