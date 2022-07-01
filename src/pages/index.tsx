import type { NextPage } from "next";
import Title from "../components/Header/title";
import Lista from "../components/Lista/lista";
import {
  Dialog,
  TextField,
  Grid,
  DialogActions,
  Button,
  Snackbar,
} from "@mui/material";
import {useIndex} from '../data/hooks/pages/useIndex'
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { ApiServices } from "../data/services/apiServices";


const Home: NextPage = () => {
  const { listaPets, petSelecionado,valor, email,mensagem,adotar, setMensagem, setPetSelecionado, setEmail, setValor } = useIndex()

  interface UserDataProps {
    id: string;
    name: SVGStringList;
  }
  
  
  useIndex();
  return (
    <div>
      <Title
        title=""
        subtitle={
          <span>
            Com um pequeno valor mensal, você <br />
            pode <strong>adotar um pet virtualmente</strong>
          </span>
        }
      />
      <Lista
        pets={listaPets}
        onSelect={(pet) => setPetSelecionado(pet)}
      />
      <Dialog open={petSelecionado !== null} fullWidth PaperProps={{ sx: { p: 5 } } } onClose={()=> setPetSelecionado(null)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label={"Email"} type={"email"} value={email} fullWidth
            onChange={(event)=> setEmail(event.target.value)}
            > </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={"Quantia por mes"}
              type={"number"}
              fullWidth
              value={valor}
              onChange={(event)=> setValor(event.target.value)}
            ></TextField>
          </Grid>
        </Grid>
        <DialogActions sx={{ mt: 5 }}>
          <Button color={"secondary"} onClick={() => setPetSelecionado(null)}>Cancelar</Button>
          <Button variant={"contained"} onClick={() => adotar()}>Confirmar adoção</Button>
        </DialogActions>
      </Dialog>
      <Snackbar open={mensagem.length > 0} message={mensagem} autoHideDuration={2500}
      onClose={() => setMensagem('')}></Snackbar>
    </div>
  );
};





/*
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
*/


export default Home;
