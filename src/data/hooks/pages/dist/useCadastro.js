"use strict";
exports.__esModule = true;
exports.useCadastro = void 0;
var react_1 = require("react");
var apiServices_1 = require("../../services/apiServices");
function useCadastro() {
    var _a = react_1.useState(''), nome = _a[0], setNome = _a[1], _b = react_1.useState(''), historia = _b[0], setHistoria = _b[1], _c = react_1.useState(''), foto = _c[0], setFoto = _c[1], _d = react_1.useState(''), mensagem = _d[0], setMensagem = _d[1];
    function cadastrar() {
        if (validarFormulario()) {
            apiServices_1.ApiServices.post('/pets', {
                nome: nome,
                historia: historia,
                foto: foto
            }).then(function () {
                Limpar();
                setMensagem('Pet cadastrado com sucesso');
            })["catch"](function (error) {
                var _a;
                if (error !== null) {
                    setMensagem((_a = error.response) === null || _a === void 0 ? void 0 : _a.data.errors.valor[0]);
                }
            });
        }
        else {
            setMensagem('preencha todos os campos!');
        }
    }
    function validarFormulario() {
        return nome.length > 2 && historia.length > 20 && foto.length > 5;
    }
    function Limpar() {
        setNome('');
        setHistoria('');
        setFoto('');
    }
    return {
        nome: nome,
        historia: historia,
        foto: foto,
        mensagem: mensagem,
        setNome: setNome,
        setHistoria: setHistoria,
        setFoto: setFoto,
        setMensagem: setMensagem,
        cadastrar: cadastrar
    };
}
exports.useCadastro = useCadastro;
