import { GetServerSideProps, NextPage } from "next";
import { useCadastro } from "../../data/hooks/PetsHooks/useCadastro";
import Title from "../../components/Header/title";
import { parseCookies } from "nookies";
import { Paper, Grid, TextField, Button, Snackbar } from "@mui/material";
import { useShowUserName } from "../../data/hooks/pages/useShowUserName";


const Cadastro: NextPage = () => {
  const { mensagem, setNome, setHistoria, setFoto, cadastrar } = useCadastro();


  //---------------get user name ------------------------//
  const {username} = useShowUserName();

  return (
    <div>
      <h1>Ola {username}</h1>
      <Title
        title={"Cadastro de pet para adoção"}
        subtitle={"Preencha os dados do novo Pet"}
      />

      <Paper sx={{ maxWidth: 970, mx: "auto", p: 5 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label={"Nome"}
              onChange={(e) => setNome(e.target.value)}
              placeholder={"Digite o nome do pet"}
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={"Historia do pet"}
              multiline
              onChange={(e) => setHistoria(e.target.value)}
              rows={4}
              placeholder={"Digite o nome do pet"}
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={"Foto"}
              onChange={(e) => setFoto(e.target.value)}
              placeholder={"Digite o endereço da foto"}
              fullWidth
            ></TextField>
            <Button
              variant={"contained"}
              color={"secondary"}
              sx={{ mt: 2 }}
              component={"a"}
              href={"https://imgur.com/upload"}
              target={"_blank"}
            >
              Enviar Imagem
            </Button>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Button
              onClick={cadastrar}
              variant={"contained"}
              fullWidth
              sx={{ maxWidth: { md: 200 }, mt: 4 }}
            >
              Cadastrar Pet
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <Snackbar
        open={mensagem.length > 0}
        autoHideDuration={2500}
        message={mensagem}
      ></Snackbar>
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

export default Cadastro;
