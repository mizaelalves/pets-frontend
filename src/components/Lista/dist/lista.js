"use strict";
exports.__esModule = true;
var Button_1 = require("@mui/material/Button");
var lista_style_1 = require("./lista.style");
var TextServices_1 = require("../../data/services/TextServices");
function CardPed(props) {
    var tamanhoMaximo = 200;
    return (React.createElement(React.Fragment, null,
        React.createElement(lista_style_1.ListaStyled, null, props.pets.map(function (pet) { return (React.createElement(lista_style_1.ItemStyled, { key: pet.id },
            React.createElement(lista_style_1.Foto, { src: pet.foto, alt: pet.nome }),
            React.createElement(lista_style_1.ContainerInfo, null,
                React.createElement(lista_style_1.Nome, null, pet.nome),
                React.createElement(lista_style_1.Descricao, null, TextServices_1.TextServices.limitarTexto(pet.historia, tamanhoMaximo)),
                React.createElement(Button_1["default"], { fullWidth: true, onClick: function () { props.onSelect(pet), console.log(pet); }, variant: "contained" },
                    " ",
                    "Adotar ",
                    pet.nome)))); }))));
}
exports["default"] = CardPed;
