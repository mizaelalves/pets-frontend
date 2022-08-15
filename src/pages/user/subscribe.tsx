import { TextField, Paper, Grid, Snackbar, Alert, Button } from "@mui/material";
import { NextPage } from "next";
import { SyntheticEvent, useState, useEffect } from "react";
import Title from "../../components/Header/title";
import { useUserSubscribe } from "../../data/hooks/pages/useUserSubscribe";
import Router from "next/router";

const SubscribenUser: NextPage = () => {
  const [loading, setLoading]= useState(false);
  const {
    first_name,
    user_name,
    email,
    password,
    error,
    success,
    subscribeUser,
    setFirst_Name,
    setUser_Name,
    setEmail,
    setPassword,
    setError,
    setSuccess,
  } = useUserSubscribe();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const data = { first_name, user_name, email, confirmPassword };

  function verifyPassword(password: string, confirmPassword: string) {
    if (!password.localeCompare(confirmPassword)) {
      return true;
    }
    return false;
  }
  function showMessagePassword() {
    if(confirmPassword.length >0){
      return verifyPassword(password, confirmPassword) ? (
        <div>
          <span style={{ color: "green" }}>Senha confirmada</span>
        </div>
      ) : (
        <div>
          <span style={{ color: "red" }}>Senhas não correspondem</span>
        </div>
      );
    }
  }
  
  const submitHandler = (e: SyntheticEvent) => {
    e.preventDefault();


      subscribeUser()
      setLoading(true)
    }
      

  useEffect(() => {
    if(error.length>0){
      setLoading(false)
    }

  }, [error])
  
    /*
        subscribeUser(data).catch((error)=>{
      setError(error.response?.data.detail)
    })
    */
  

  return (
    <div>
      <Paper
        sx={{
          maxWidth: 400,
          mx: "auto",
          p: 0,
          backgroundColor: "#f6f6f6",
          marginTop: "20px",
        }}
      >
        <Title title={"Inscreva-se"} subtitle={""} />
      </Paper>
      <Paper
        sx={{
          maxWidth: 400,
          mx: "auto",
          p: 5,
          backgroundColor: "#f6f6f6",
          marginTop: "20px",
        }}
      >
        <form onSubmit={submitHandler}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label={"Nome"}
                type="text"
                name="nome"
                value={first_name}
                onChange={(e) => setFirst_Name(e.target.value)}
                placeholder={"Digite seu Nome"}
                fullWidth
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={"Nome de usuário"}
                type="text"
                name="username"
                value={user_name}
                onChange={(e) => setUser_Name(e.target.value)}
                placeholder={"Digite seu nome de usuário"}
                fullWidth
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={"E-mail"}
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={"Digite o e-mail"}
                fullWidth
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={"Senha"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={"Digite a senha"}
                fullWidth
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={"Senha"}
                type="password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                placeholder={"Digite novamente a senha"}
                fullWidth
              ></TextField>
              {showMessagePassword()}
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                type="submit"
                fullWidth
                disabled={loading}
                sx={{ marginTop: "20px"}}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
      <Snackbar
        open={error.length > 0}
        autoHideDuration={1500}
        onClose={() => setError("")}
      >
        <Alert severity="error" sx={{ width: "100%" }} variant="filled">
          {error}
        </Alert>
      </Snackbar>
      <Snackbar
        open={success.length > 0}
        autoHideDuration={1500}
        onClose={() => setSuccess("")}
      >
        <Alert severity="success" sx={{ width: "100%" }} variant="filled">
          {success}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SubscribenUser;
