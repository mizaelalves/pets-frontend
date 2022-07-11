"use strict";
exports.__esModule = true;
exports.useIndex = void 0;
var react_1 = require("react");
var apiServices_1 = require("../../services/apiServices");
function useIndex() {
  var _a = react_1.useState([]),
    listaPets = _a[0],
    setListaPets = _a[1],
    _b = react_1.useState(null),
    petSelecionado = _b[0],
    setPetSelecionado = _b[1],
    _c = react_1.useState(""),
    email = _c[0],
    setEmail = _c[1],
    _d = react_1.useState(""),
    valor = _d[0],
    setValor = _d[1],
    _e = react_1.useState(""),
    mensagem = _e[0],
    setMensagem = _e[1];
  react_1.useEffect(function () {
    apiServices_1.ApiServices.get("/pets").then(function (response) {
      setListaPets(response.data);
      console.log(response.data);
    });
  }, []);
  react_1.useEffect(
    function () {
      if (petSelecionado === null) {
        limparFormulario();
      }
    },
    [petSelecionado]
  );
  function adotar() {
    if (petSelecionado !== null) {
      if (validarDadosAdocao()) {
        apiServices_1.ApiServices.post("/pets1", {
          pet_id: petSelecionado.id,
          email: email,
          valor: valor,
        })
          .then(function () {
            setPetSelecionado(null);
            setMensagem(
              "Obrigado pela Adoção do " + petSelecionado.nome + "🐶❤️"
            );
            limparFormulario();
          })
          ["catch"](function (error) {
            var _a;
            if (error !== null) {
              setMensagem(
                (_a = error.response) === null || _a === void 0
                  ? void 0
                  : _a.data.errors.valor[0]
              );
            }
          });
      } else {
        setMensagem("Preencha corretamente");
      }
    }
  }
  function limparFormulario() {
    setEmail("");
    setValor("");
  }
  function validarDadosAdocao() {
    return email.length > 0 && valor.length > 0;
  }
  return {
    listaPets: listaPets,
    petSelecionado: petSelecionado,
    email: email,
    valor: valor,
    mensagem: mensagem,
    adotar: adotar,
    setPetSelecionado: setPetSelecionado,
    setEmail: setEmail,
    setValor: setValor,
    setMensagem: setMensagem,
  };
}
exports.useIndex = useIndex;
