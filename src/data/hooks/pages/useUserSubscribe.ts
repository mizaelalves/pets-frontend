import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { ApiServices } from "../../services/apiServices";

export function useUserSubscribe() {
  const router = useRouter();
  const [first_name, setFirst_Name] = useState(""),
    [user_name, setUser_Name] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
  [error, setError] = useState(""),
  [success, setSuccess] = useState(""),
  [validate, setValidate] = useState("");

  function subscribeUser() {
      ApiServices.post("/users/register/", {
        first_name,
        user_name,
        email,
        password,
      })
        .then(() => {
          Limpar();
          setSuccess("Usuário cadastrado com sucesso");
          router.push("/user/login")
        })
        .catch((error: AxiosError<any>) => {
          if (error !== null) {
            setError("Erro: " + error.response?.data.error.email);
          }
        });
    
  }

  function validarFormulario() {
    return first_name.length > 2 && user_name.length > 20 && email.length > 5;
  }
  function Limpar() {
    setFirst_Name("");
    setUser_Name("");
    setEmail("");
  }

  return {
    first_name,
    user_name,
    email,
    password,
    success,
    error,
    setFirst_Name,
    setUser_Name,
    setEmail,
    setPassword,
    setSuccess,
    setError,
    subscribeUser,
  };
}
