"use strict";
exports.__esModule = true;
var title_1 = require("../../components/Header/title");
var useRelatorio_1 = require("../../data/hooks/PetsHooks/useRelatorio");
var material_1 = require("@mui/material");
var Relatorio = function () {
    var listaRelatorio = useRelatorio_1.useRelatorio().listaRelatorio;
    return (React.createElement(React.Fragment, null,
        React.createElement(title_1["default"], { title: "relatorio de Adoção", subtitle: "Veja lista de pets adotados" }),
        React.createElement(material_1.TableContainer, { component: material_1.Paper, sx: { maxWidth: 830, mx: "auto", p: { xs: 3, md: 5 } } },
            React.createElement(material_1.Table, null,
                React.createElement(material_1.TableHead, null,
                    React.createElement(material_1.TableRow, null,
                        React.createElement(material_1.TableCell, null, "Pet"),
                        React.createElement(material_1.TableCell, null, "E-mail"),
                        React.createElement(material_1.TableCell, { align: "right" }, "Valor Mensal"))),
                React.createElement(material_1.TableBody, null, listaRelatorio.map(function (relatorio) { return (React.createElement(material_1.TableRow, { key: relatorio.id },
                    React.createElement(material_1.TableCell, null, relatorio.pet.nome),
                    React.createElement(material_1.TableCell, null, relatorio.email),
                    React.createElement(material_1.TableCell, { align: "right" }, relatorio.valor))); }))))));
};
exports["default"] = Relatorio;
