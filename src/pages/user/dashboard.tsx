import { GetServerSideProps, NextPage } from "next";
import { useCadastro } from "../../data/hooks/PetsHooks/useCadastro";
import Title from "../../components/Header/title";
import { parseCookies } from "nookies";
import { Paper, Grid, TextField, Button, Snackbar } from "@mui/material";
import { useContext, useEffect } from "react";
import { useUserName } from "../../data/hooks/useUserName";
import { ApiServices } from "../../data/services/apiServices";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { User } from "../../data/@types/User";
import jwt from  'jsonwebtoken'


interface UserProps {
  user_name: string;
  user_id: string;
}


function getUserName(userList: any, user_id: string): string{
  return userList.map((userList: { id: string; user_name: string; }) => {
    if (userList.id === user_id) {
      const username = userList.user_name;
      return username
    }

  });
}

const Dashboard: NextPage = () => {
  const { "pet-token": token } = parseCookies();

  ApiServices.defaults.headers.common['Authorization'] = `Bearer ${token}`

  const { mensagem, setNome, setHistoria, setFoto, cadastrar } = useCadastro();

  const decode = jwt.decode(token);
  
  let data: any = decode
  if(data === null){
    data = 'vazio'
  }
  const id = data.user_id
  
//---------------get user name ------------------------//
  const {listUsers} = useUserName();

  const userName = getUserName(listUsers, id)
  
  return (
    <div>
        <h1>Ola {userName}</h1>
    </div>
  );
};


export const getServerSideProps: GetServerSideProps = async (ctx) =>{
  const { ['pet-token']: token} = parseCookies(ctx)

  if(!token){
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return{
    props: {}
  }
}

export default Dashboard;
