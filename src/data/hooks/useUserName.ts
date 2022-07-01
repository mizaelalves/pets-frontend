import { ApiServices } from "./../services/apiServices";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import { User } from "../@types/User";

export function useUserName() {
  const { "pet-token": token } = parseCookies();
  const [listUsers, setListUser] = useState<User[]>([]);

  useEffect(() => {
    ApiServices.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    ApiServices.get("/users/").then((response) => {
      setListUser(response.data);
    });
  }, [token]);

  return { listUsers };
  
}
