import { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";
import { Paper, Grid, FormGroup, TextField, Button, Snackbar } from "@mui/material";
import { useUserName } from "../../data/hooks/pages/useUserName";
import { ApiServices } from "../../data/services/apiServices";

const Dashboard: NextPage = () => {
  const { "pet-token": token } = parseCookies();

  ApiServices.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  //---------------get user name ------------------------//
  const { username } = useUserName();

  return (
    <div>
      <Paper sx={{ maxWidth: 1080, mx: "auto", p: 5, textAlign: "center" }}>
        <Grid columns={2}>
          <Form>
            
          </Form>
        </Grid>
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
