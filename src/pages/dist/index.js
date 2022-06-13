"use strict";
exports.__esModule = true;
var title_1 = require("../components/Header/title");
var lista_1 = require("../components/Lista/lista");
var material_1 = require("@mui/material");
var useIndex_1 = require("../data/hooks/pages/useIndex");
var Home = function () {
    var _a = useIndex_1.useIndex(), listaPets = _a.listaPets, petSelecionado = _a.petSelecionado, valor = _a.valor, email = _a.email, mensagem = _a.mensagem, adotar = _a.adotar, setMensagem = _a.setMensagem, setPetSelecionado = _a.setPetSelecionado, setEmail = _a.setEmail, setValor = _a.setValor;
    useIndex_1.useIndex();
    return (React.createElement("div", null,
        React.createElement(title_1["default"], { title: "", subtitle: React.createElement("span", null,
                "Com um pequeno valor mensal, voc\u00EA ",
                React.createElement("br", null),
                "pode ",
                React.createElement("strong", null, "adotar um pet virtualmente")) }),
        React.createElement(lista_1["default"], { pets: listaPets, onSelect: function (pet) { return setPetSelecionado(pet); } }),
        React.createElement(material_1.Dialog, { open: petSelecionado !== null, fullWidth: true, PaperProps: { sx: { p: 5 } }, onClose: function () { return setPetSelecionado(null); } },
            React.createElement(material_1.Grid, { container: true, spacing: 2 },
                React.createElement(material_1.Grid, { item: true, xs: 12 },
                    React.createElement(material_1.TextField, { label: "Email", type: "email", value: email, fullWidth: true, onChange: function (event) { return setEmail(event.target.value); } }, " ")),
                React.createElement(material_1.Grid, { item: true, xs: 12 },
                    React.createElement(material_1.TextField, { label: "Quantia por mes", type: "number", fullWidth: true, value: valor, onChange: function (event) { return setValor(event.target.value); } }))),
            React.createElement(material_1.DialogActions, { sx: { mt: 5 } },
                React.createElement(material_1.Button, { color: "secondary", onClick: function () { return setPetSelecionado(null); } }, "Cancelar"),
                React.createElement(material_1.Button, { variant: "contained", onClick: function () { return adotar(); } }, "Confirmar ado\u00E7\u00E3o"))),
        React.createElement(material_1.Snackbar, { open: mensagem.length > 0, message: mensagem, autoHideDuration: 2500, onClose: function () { return setMensagem(''); } })));
};
exports["default"] = Home;
