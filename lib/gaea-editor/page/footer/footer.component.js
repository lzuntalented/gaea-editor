"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var React = require("react");
var typings = require("./footer.type");
var mobx_react_1 = require("mobx-react");
var index_1 = require("../../../../../common/auto-bind/index");
require("./footer.css");
var Footer = function (_React$Component) {
    _inherits(Footer, _React$Component);

    function Footer() {
        _classCallCheck(this, Footer);

        var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));

        _this.state = new typings.State();
        return _this;
    }

    _createClass(Footer, [{
        key: "handleClick",
        value: function handleClick(mapUniqueKey) {
            this.props.viewport.setCurrentEditComponentMapUniqueKey(mapUniqueKey);
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var childs = void 0;
            if (this.props.viewport.currentEditComponentMapUniqueKey) {
                var paths = this.props.viewport.findComponentPathFromRoot(this.props.viewport.currentEditComponentMapUniqueKey);
                paths.unshift(this.props.viewport.rootMapUniqueKey);
                childs = paths.map(function (mapUniqueKey, index) {
                    var componentInfo = _this2.props.viewport.components.get(mapUniqueKey);
                    return React.createElement("div", { onClick: _this2.handleClick.bind(_this2, mapUniqueKey), className: "footer-item", key: index }, componentInfo.props.gaeaName, React.createElement("div", { className: "right-icon-container" }, React.createElement("div", { className: "right-icon" })));
                });
            }
            return React.createElement("div", { className: "nt-editor-gaea-editor-gaea_editor-page-footer", style: { height: this.props.application.footerHeight } }, childs);
        }
    }]);

    return Footer;
}(React.Component);
Footer.defaultProps = new typings.Props();
__decorate([index_1.autoBindMethod], Footer.prototype, "handleClick", null);
Footer = __decorate([mobx_react_1.inject('application', 'viewport'), mobx_react_1.observer], Footer);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Footer;