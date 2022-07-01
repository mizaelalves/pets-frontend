"use strict";
exports.__esModule = true;
var header_style_1 = require("./header.style");
var material_1 = require("@mui/material");
function Headers() {
    return (React.createElement(header_style_1.HeaderContainer, null,
        React.createElement(header_style_1.Logo, { src: "/imagens/logo.svg" }),
        React.createElement(header_style_1.LinksComponent, null,
            React.createElement(material_1.Link, null, "Login"),
            React.createElement(material_1.Link, null, "Inscreva-se"))));
}
exports["default"] = Headers;
