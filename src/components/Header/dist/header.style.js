"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.LinksComponents = exports.Logo = exports.HeaderContainer = void 0;
var styles_1 = require("@mui/material/styles");
exports.HeaderContainer = styles_1.styled("header")(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  border-bottom: 1px solid #f0f0f0;\n  padding: 2rem;\n\n"], ["\n  display: flex;\n  justify-content: center;\n  border-bottom: 1px solid #f0f0f0;\n  padding: 2rem;\n\n"])));
exports.Logo = styles_1.styled("img")(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 230px;\n"], ["\n  width: 230px;\n"])));
exports.LinksComponents = styles_1.styled("div")(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\n"], ["\n\n"])));
var templateObject_1, templateObject_2, templateObject_3;
