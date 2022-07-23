import { useEffect } from 'react';

import {useState} from 'react'
import { ApiServices, AuthHeader } from '../../services/apiServices';
import { Relatorio } from '../../@types/Relatorio';

export function useRelatorio(){
  const [listaRelatorio, setListaRelatorio] = useState<Relatorio[]>([])

   useEffect(() =>{
      ApiServices.get('/adocao/').then((resposta) =>{
      setListaRelatorio(resposta.data)
    })
  },[])
  
return {listaRelatorio}
}


