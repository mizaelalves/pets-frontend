import { ApiServices } from "../../services/apiServices";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";

import jwt from "jsonwebtoken";

function decodeTokenId() {
  const { "pet-token": token } = parseCookies();

  const decode = jwt.decode(token);

  let data: any = decode;
  if (data === null) {
    data = "vazio";
  }
  const id = data.user_id;
  return id;
}

export function useShowUserName() {
  //retorna o user_id decodificado
  const user_id: number = decodeTokenId()
  const { "pet-token": token } = parseCookies();
  const [username, setUsername] = useState('');
  //pegar as informações de all/?user_id=id
  useEffect(() => {
    ApiServices.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    ApiServices.get(`/users/all/?user_id=${user_id}`).then((response) => {
      setUsername(response.data[0].user_name);
    });
  }, [token, user_id]);
  console.log(username)
  return {username}
}
