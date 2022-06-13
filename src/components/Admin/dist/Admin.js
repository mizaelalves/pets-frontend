"use strict";
exports.__esModule = true;
var admin_style_1 = require("./admin.style");
var material_1 = require("@mui/material");
var link_1 = require("next/link");
function Admin() {
    return (React.createElement(admin_style_1.AdminCont, null,
        React.createElement("div", null,
            React.createElement(admin_style_1.Logo, { src: "/imagens/logo.svg", alt: "Adote um pet" }),
            React.createElement(admin_style_1.LinksContainer, null,
                React.createElement(material_1.Link, { component: link_1["default"], href: "/pets/cadastro" },
                    React.createElement("a", null, "Cadastrar Pet")),
                React.createElement(material_1.Link, { component: link_1["default"], href: "/pets/relatorio" },
                    React.createElement("a", null,
                        "Relatorio",
                        " ",
                        React.createElement(material_1.Box, { component: "span", sx: { display: { sm: "initial", xs: "none" } } },
                            " ",
                            "de Ado\u00E7\u00E3o")))))));
}
exports["default"] = Admin;
