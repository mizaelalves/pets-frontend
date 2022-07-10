import { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";
import {
  Paper,
  Grid,
  Box,
  Table,
  TextField,
  Button,
  Snackbar,
  TableContainer,
} from "@mui/material";
import { useShowUserName } from "../../data/hooks/pages/useShowUserName";
import { ApiServices } from "../../data/services/apiServices";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const Dashboard: NextPage = () => {
  const { "pet-token": token } = parseCookies();

  //ApiServices.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  //---------------get user name ------------------------//

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    }
  ];

  const rows = [
    { id: 1, lastName: "Snow", age: 35 },
    { id: 2, lastName: "Lannister", age: 42 },
  ];

  return (
    <div>
      <Paper sx={{ maxWidth: 1080, mx: "auto", p: 5, textAlign: "center" }}>
        <Grid
          container
          spacing={10}
          columns={12}
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Grid item xs={12} sm={6}>
            <h3>Ultimos Pets cadastrados</h3>
            <Box sx={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
          <h3>Ultimos Pets adotados</h3>
            <Box sx={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
              />
            </Box>
          </Grid>
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
