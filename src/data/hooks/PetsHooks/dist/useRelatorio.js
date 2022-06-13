"use strict";
exports.__esModule = true;
exports.useRelatorio = void 0;
var react_1 = require("react");
var react_2 = require("react");
var apiServices_1 = require("../../services/apiServices");
function useRelatorio() {
    var _a = react_2.useState([]), listaRelatorio = _a[0], setListaRelatorio = _a[1];
    react_1.useEffect(function () {
        apiServices_1.ApiServices.get('/adocoes').then(function (resposta) {
            setListaRelatorio(resposta.data);
        });
    }, []);
    return { listaRelatorio: listaRelatorio };
}
exports.useRelatorio = useRelatorio;
