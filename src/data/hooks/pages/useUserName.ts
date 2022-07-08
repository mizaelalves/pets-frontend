import { ApiServices } from "../../services/apiServices";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import { User } from "../../@types/User";

import jwt from "jsonwebtoken";

export function useUserName() {
  const { "pet-token": token } = parseCookies();
  const [listUsers, setListUser] = useState<User[]>([]);
  const decodeId = decodeTokenId();
  const username = getUserName(listUsers, decodeId);

  useEffect(() => {
    ApiServices.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    ApiServices.get("/users/").then((response) => {
      setListUser(response.data);
    });
  }, [token]);

  //return { listUsers };

  return { username };
}

export function getUserName(userList: any, user_id: string): string {
  return userList.map((userList: { id: string; user_name: string }) => {
    if (userList.id === user_id) {
      const username = userList.user_name;
      return username;
    }
  });
}

export function decodeTokenId() {
  const { "pet-token": token } = parseCookies();

  const decode = jwt.decode(token);

  let data: any = decode;
  if (data === null) {
    data = "vazio";
  }
  const id = data.user_id;
  return id;
}
