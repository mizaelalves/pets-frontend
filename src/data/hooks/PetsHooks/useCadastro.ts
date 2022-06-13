import { AxiosError } from 'axios';
import {useState} from 'react'
import { ApiServices } from '../../services/apiServices';
export function useCadastro(){
  const [nome, setNome] = useState(''),
        [historia, setHistoria] = useState(''),
        [foto, setFoto]= useState(''),
        [mensagem, setMensagem] = useState('')

  function cadastrar(){
    if(validarFormulario()){
      ApiServices.post('/pets', {
        nome,
        historia,
        foto
      }).then(() =>{
        Limpar();
        setMensagem('Pet cadastrado com sucesso')
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