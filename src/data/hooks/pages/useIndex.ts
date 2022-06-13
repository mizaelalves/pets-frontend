import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { Pet } from "../../@types/Pets";
import { ApiServices } from "../../services/apiServices";

export function useIndex() {
  const [listaPets, setListaPets] = useState([
      
    ]),
    [petSelecionado, setPetSelecionado] = useState<Pet | null>(null),
    [email, setEmail] = useState(""),
    [valor, setValor] = useState(""),
    [mensagem, setMensagem] = useState("");
    useEffect(()=>{
      ApiServices.get('/pets')
      .then((response) => {
        setListaPets(response.data)
        console.log(response.data)
      })
    },[])
    useEffect(()=>{
      if(petSelecionado === null){
        limparFormulario()
      }
    }, [petSelecionado])

  function adotar() {
    if(petSelecionado !== null){  
      if(validarDadosAdocao()){
        ApiServices.post('/pets1', {
          pet_id: petSelecionado.id,
          email: email,
          valor: valor
        })
        .then(() => {
          setPetSelecionado(null);
          setMensagem('Obrigado pela Adoção do '+ petSelecionado.nome+'🐶❤️')
          limparFormulario();
        })
        .catch((error: AxiosError<any> ) =>{
          if(error !== null){
            setMensagem(error.response?.data.errors.valor[0])
          }
        })
      }
      else {
        setMensagem('Preencha corretamente')
      }
    }
  }

  function limparFormulario(){
    setEmail('')
    setValor('')
  }
  function validarDadosAdocao(){
    return email.length > 0 && valor.length > 0
  }
  
    return {
  listaPets,
    petSelecionado,
    email,
    valor,
    mensagem,
    adotar,
    setPetSelecionado,
    setEmail,
    setValor,
    setMensagem,
  };
}
