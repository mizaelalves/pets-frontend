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
  CircularProgress,
  Box,
} from "@mui/material";
import { useIndex } from "../data/hooks/pages/useIndex";
import Head from "next/head";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const {
    listaPets,
    petSelecionado,
    valor,
    email,
    mensagem,
    adotar,
    isLoading,
    setMensagem,
    setPetSelecionado,
    setEmail,
    setValor,
  } = useIndex();
  const handle = (() =>{
    window.location.reload()
  })

  useIndex();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setInterval(() => setShowButton(true), 10000);
  }, []);

  function loading() {
    if (showButton === false) {
      return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress color="primary" />
        </Box>
      );
    }
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button variant="contained" color="primary" onClick={handle}>Recarregar Pagina</Button>
      </Box>
    );
  }

  return (
    <div>
      <Head>
        <title>Adote um pet</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Title
        title=""
        subtitle={
          <span>
            Com um pequeno valor mensal, você <br />
            pode <strong>adotar um pet virtualmente</strong>
          </span>
        }
      />
      {isLoading ? (
        loading()
      ) : (
        <div>
          <Lista pets={listaPets} onSelect={(pet) => setPetSelecionado(pet)} />
          <Dialog
            open={petSelecionado !== null}
            fullWidth
            PaperProps={{ sx: { p: 5 } }}
            onClose={() => setPetSelecionado(null)}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label={"Email"}
                  type={"email"}
                  value={email}
                  fullWidth
                  onChange={(event) => setEmail(event.target.value)}
                >
                  {" "}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label={"Quantia por mes"}
                  type={"number"}
                  fullWidth
                  value={valor}
                  onChange={(event) => setValor(event.target.value)}
                ></TextField>
              </Grid>
            </Grid>
            <DialogActions sx={{ mt: 5 }}>
            
              <Button
                color={"secondary"}
                onClick={() => setPetSelecionado(null)}
              >
                Cancelar
              </Button>
              <Button
                variant={"contained"}
                sx={{ width: "auto" }}
                onClick={() => adotar()}
              >
                Confirmar adoção
              </Button>
            </DialogActions>
          </Dialog>
          <Snackbar
            open={mensagem.length > 0}
            message={mensagem}
            autoHideDuration={2500}
            onClose={() => setMensagem("")}
          ></Snackbar>
        </div>
      )}
    </div>
  );
};

export default Home;
