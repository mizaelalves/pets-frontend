"use strict";
exports.__esModule = true;
exports.ApiServices = void 0;
var axios_1 = require("axios");
exports.ApiServices = axios_1["default"].create({
    baseURL: "http://localhost:8000/api",
    headers: {
        "Content-Type": "application/json"
    }
});
