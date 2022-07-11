import { ApiServices, AuthHeader } from "../../services/apiServices";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";

const { "pet-token": token } = parseCookies();

function decodeTokenId() {
  const decode = jwt.decode(token);

  let data: any = decode;
  if (data === null) {
    data = "vazio";
  }
  const id = data.user_id;
  return id;
}
function verifyTokenExist() {
  if (token != undefined) {
    return true;
  }
  return false;
}

export function useShowUserName() {
  //retorna o user_id decodificado
  const user_id: number = decodeTokenId();
  const { "pet-token": token } = parseCookies();
  const [username, setUsername] = useState("");

  useEffect(() => {
    ApiServices.get(`/users/all/?user_id=${user_id}`, AuthHeader).then(
      (response) => {
        setUsername(response.data[0].user_name);
      }
    );
  }, [token, user_id]);
  return { username, verifyTokenExist };
}
