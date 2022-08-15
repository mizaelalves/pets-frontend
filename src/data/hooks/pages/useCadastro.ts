import { useRouter } from 'next/router';

import { AxiosError } from 'axios';
import { useState} from 'react'
import { getAPIClient } from '../../services/axios';

export function useCadastro(){
  const {api, AuthHeader} = getAPIClient();
  const [nome, setNome] = useState(''),
        [historia, setHistoria] = useState(''),
        [foto, setFoto]= useState(''),
        [mensagem, setMensagem] = useState('');

  const router = useRouter();
  function handleClick(){
    router.push('/')
  }
  function cadastrar(){
    if(validarFormulario()){
      api.post('/pets/create/', {
        nome,
        historia,
        foto
      }, AuthHeader).then(() =>{
        Limpar();
        setMensagem('Pet cadastrado com sucesso')
        handleClick()
      })
      .catch((error: AxiosError<any> ) =>{
        if(error !== null){
          setMensagem(error.response?.data.errors.valor[0])
        }
      })
    }
      else{
        setMensagem('preencha todos os campos!')
      }
      
    }
  
  function validarFormulario(){
    return nome.length > 2 && historia.length > 20 && foto.length > 5
  }
  function Limpar(){
    setNome('');
    setHistoria('');
    setFoto('');
  }

  return {
    nome,
    historia,
    foto,
    mensagem,
    setNome,
    setHistoria,
    setFoto,
    setMensagem,
    cadastrar
  }
}