"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.LinksContainer = exports.Logo = exports.AdminCont = void 0;
var styles_1 = require("@mui/material/styles");
exports.AdminCont = styles_1.styled("header")(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 115px;\n  background-color: #f6f6f6;\n  padding: ", ";\n\n  div{\n    height: 100%;\n    max-width: 970px;\n    margin: 0 auto;\n    display: flex;\n    justify-content: space-between;\n    gap: ", ";\n    align-items: center;\n  }\n  a{\n    font-size: 14px;\n\n  }\n"], ["\n  height: 115px;\n  background-color: #f6f6f6;\n  padding: ", ";\n\n  div{\n    height: 100%;\n    max-width: 970px;\n    margin: 0 auto;\n    display: flex;\n    justify-content: space-between;\n    gap: ", ";\n    align-items: center;\n  }\n  a{\n    font-size: 14px;\n\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.spacing(2);
}, function (_a) {
    var theme = _a.theme;
    return theme.spacing(2);
});
exports.Logo = styles_1.styled("img")(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 125px;\n"], ["\n  width: 125px;\n"])));
exports.LinksContainer = styles_1.styled('nav')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\ndisplay: flex;\ngap: ", ";\nflex-wrap: wrap;\njustify-content: flex-end;\n"], ["\ndisplay: flex;\ngap: ", ";\nflex-wrap: wrap;\njustify-content: flex-end;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.spacing(2);
});
var templateObject_1, templateObject_2, templateObject_3;
