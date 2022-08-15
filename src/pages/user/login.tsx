import { GetServerSideProps, NextPage } from "next";
import { Button, Grid, TextField, Paper, Snackbar, Alert } from "@mui/material";
import Title from "../../components/Header/title";
import { useState, SyntheticEvent, useContext } from "react";
import { AuthContext } from "../../data/context/AuthContext";
import { parseCookies } from "nookies";


const LoginUser: NextPage = () => {
  //const { user } = useContext(AuthContext);

  //ApiServices.defaults.headers.common['Authorization'] = `Bearer ${token}`

  const {signIn}  = useContext(AuthContext)
  //const {register, handleSubmit} = useForm()
  const [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [error, setError] = useState("")
    const data = {email, password}
    const [loading, setLoading]= useState(false);

  const submitHandler = (e: SyntheticEvent,) => {
    e.preventDefault();
    setLoading(true)
      signIn(data).catch((err)=>{
        if (err.message === "Network Error") {
          // network error
          setError('Error: Network Error')
          setLoading(false)
      } 
      }
      )
    }

  return (
    <>
          <Paper
        sx={{
          width: 400,
          mx: "auto",
          p: 0,
          backgroundColor: "#f6f6f6",
          marginTop: "20px",
        }}
      >
      <Title title={"Faça o seu login"} subtitle={""}></Title>
      </Paper>
      <Paper sx={{width:400, mx: "auto", p: 5,backgroundColor:"#f6f6f6", marginTop: "20px"}}>
        <form onSubmit={submitHandler}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label={"E-mail"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={"Digite seu E-mail"}
                fullWidth
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={"Senha"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={"Digite sua senha"}
                fullWidth
              ></TextField>
              <Button
                variant="contained"
                type= "submit"
                fullWidth
                sx={{ marginTop: "20px"}}
                disabled={loading}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
      <Snackbar open={error.length > 0} autoHideDuration={6500} onClose={() => {setError('')}} >
      <Alert  severity="error" sx={{ width: '100%' }} variant="filled">
            {error}
      </Alert>
      </Snackbar>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) =>{
  const { ['pet-token']: token} = parseCookies(ctx)

  if(token){
    return {
      redirect: {
        destination: '/user/dashboard',
        permanent: false
      }
    }
  }

  return{
    props: {}
  }
}

export default LoginUser;
