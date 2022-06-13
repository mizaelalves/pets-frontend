"use strict";
exports.__esModule = true;
var useCadastro_1 = require("../../data/hooks/PetsHooks/useCadastro");
var title_1 = require("../../components/Header/title");
var material_1 = require("@mui/material");
var Cadastro = function () {
    var _a = useCadastro_1.useCadastro(), mensagem = _a.mensagem, setNome = _a.setNome, setHistoria = _a.setHistoria, setFoto = _a.setFoto, cadastrar = _a.cadastrar;
    return (React.createElement("div", null,
        React.createElement(title_1["default"], { title: "Cadastro de pet para adoção", subtitle: "Preencha os dados do novo Pet" }),
        React.createElement(material_1.Paper, { sx: { maxWidth: 970, mx: "auto", p: 5 } },
            React.createElement(material_1.Grid, { container: true, spacing: 3 },
                React.createElement(material_1.Grid, { item: true, xs: 12 },
                    React.createElement(material_1.TextField, { label: "Nome", onChange: function (e) { return setNome(e.target.value); }, placeholder: "Digite o nome do pet", fullWidth: true })),
                React.createElement(material_1.Grid, { item: true, xs: 12 },
                    React.createElement(material_1.TextField, { label: "Historia do pet", multiline: true, onChange: function (e) { return setHistoria(e.target.value); }, rows: 4, placeholder: "Digite o nome do pet", fullWidth: true })),
                React.createElement(material_1.Grid, { item: true, xs: 12 },
                    React.createElement(material_1.TextField, { label: "Foto", onChange: function (e) { return setFoto(e.target.value); }, placeholder: "Digite o endereço da foto", fullWidth: true }),
                    React.createElement(material_1.Button, { variant: "contained", color: "secondary", sx: { mt: 2 }, component: "a", href: "https://imgur.com/upload", target: "_blank" }, "Enviar Imagem")),
                React.createElement(material_1.Grid, { item: true, xs: 12, sx: { textAlign: "center" } },
                    React.createElement(material_1.Button, { onClick: cadastrar, variant: "contained", fullWidth: true, sx: { maxWidth: { md: 200 }, mt: 4 } }, "Cadastrar Pet")))),
        React.createElement(material_1.Snackbar, { open: mensagem.length > 0, autoHideDuration: 2500, message: mensagem })));
};
exports["default"] = Cadastro;
