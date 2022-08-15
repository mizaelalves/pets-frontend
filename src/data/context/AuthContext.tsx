import { createContext, useEffect, useState } from "react";
import { ApiServices, AuthHeader } from "../services/apiServices";
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
  logOut: (auth: boolean) => boolean;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider(props: { children: JSX.Element }) {
  const [user, setUser] = useState<User | any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(Boolean);

  useEffect(() => {
    setIsAuthenticated(!!user);
  }, [user])
  

  async function signIn({ email, password }: SignInData) {
    await ApiServices.post(
      "/token/",
      {
        email,
        password,
      },
      AuthHeader
    ).then((response) => {
      const access = response.data.access;

      const decode = JSON.stringify(jwt_decode(access));
      const objDecode = JSON.parse(decode);
      setCookie(undefined, "pet-token", access, {
        maxAge: 60 * 60 * 1,
      });
      setUser({ user: objDecode.user_id });
      Router.push("/user/dashboard");
    });
  }
  function logOut(auth: boolean){
    setUser('')
    setIsAuthenticated(auth)
    return auth
  }
  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, user, logOut }}>
      {props.children}
    </AuthContext.Provider>
  );
}
