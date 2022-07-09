import { AxiosError } from "axios";
import { createContext, useEffect, useState } from "react";
import { ApiServices } from "../services/apiServices";
import Router from "next/router";
import { setCookie, parseCookies } from "nookies";
import jwt_decode from "jwt-decode";

interface User {
  user_id: string;

}

interface SignInData {
  email: string;
  password: string;
}

type AuthContextType = {
  isAuthenticated: boolean;
  user: User;
  signIn: (data: SignInData) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider(props: { children: JSX.Element }) {
  const [user, setUser] = useState<User | any>(null);

  const isAuthenticated = !!user;

  async function signIn({ email, password }: SignInData) {
    await ApiServices.post("/token/", {
      email,
      password,
    })
      .then((response) => {
        const access = response.data.access;
        //const refresh = response.data.refresh;
        const decode = JSON.stringify(jwt_decode(access));
        const objDecode = JSON.parse(decode);
        setCookie(undefined, "pet-token", access, {
          maxAge: 60 * 60 * 1,
        });

        ApiServices.defaults.headers.common['Authorization'] = `Bearer ${access}`

        setUser({ user_id: objDecode.user_id });

      })
      .catch((error: AxiosError<any>) => {
        if (error !== null) {
          console.log(error);
        }
      });

    Router.push("/user/dashboard");
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, user }}>
      {props.children}
    </AuthContext.Provider>
  );
}
