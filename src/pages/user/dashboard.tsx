import { GetServerSideProps, NextPage } from "next";
import { useCadastro } from "../../data/hooks/PetsHooks/useCadastro";
import Title from "../../components/Header/title";
import { parseCookies } from "nookies";
import { Paper, Grid, TextField, Button, Snackbar } from "@mui/material";
import { useUserName } from "../../data/hooks/useUserName";
import { ApiServices } from "../../data/services/apiServices";

import jwt from "jsonwebtoken";

function getUserName(userList: any, user_id: string): string {
  return userList.map((userList: { id: string; user_name: string }) => {
    if (userList.id === user_id) {
      const username = userList.user_name;
      
      return username;
    }
  });
}

const Dashboard: NextPage = () => {
  const { "pet-token": token } = parseCookies();

  ApiServices.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const { mensagem, setNome, setHistoria, setFoto, cadastrar } = useCadastro();

  const decode = jwt.decode(token);

  let data: any = decode;
  
  if (data === null) {
    data = "vazio";
  }
  const id = data.user_id;

  //---------------get user name ------------------------//
  const { username } = useUserName();



  return (
    <div>
      <Paper sx={{ maxWidth: 1080, mx: "auto", p: 5, textAlign: "center" }}>
        <h1>Ola {username}</h1>
      </Paper>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ["pet-token"]: token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Dashboard;
