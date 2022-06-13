"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
require("../components/styles/globals.css");
var react_1 = require("@emotion/react");
var styles_1 = require("@mui/material/styles");
var styles_2 = require("@mui/material/styles");
var CssBaseline_1 = require("@mui/material/CssBaseline");
var header_1 = require("../components/Header/header");
var theme_1 = require("../mui/theme");
var createEmotionCache_1 = require("../mui/createEmotionCache");
var admin_1 = require("../components/Admin/admin");
var router_1 = require("next/router");
var clientSideEmotionCache = createEmotionCache_1["default"]();
function MyApp(props) {
    var Component = props.Component, _a = props.emotionCache, emotionCache = _a === void 0 ? clientSideEmotionCache : _a, pageProps = props.pageProps;
    var router = router_1.useRouter();
    return (React.createElement(React.Fragment, null,
        React.createElement(react_1.CacheProvider, { value: emotionCache },
            React.createElement(styles_1.ThemeProvider, { theme: theme_1["default"] },
                React.createElement(styles_2.ThemeProvider, { theme: theme_1["default"] },
                    router.pathname === '/' ? React.createElement(header_1["default"], null) : React.createElement(admin_1["default"], null),
                    React.createElement(Component, __assign({}, pageProps)),
                    React.createElement(CssBaseline_1["default"], null))))));
}
exports["default"] = MyApp;
