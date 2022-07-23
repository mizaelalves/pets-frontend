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

import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { ApiServices } from "../../data/services/apiServices";
import { useIndex } from "../../data/hooks/pages/useIndex";



const Dashboard: NextPage = () => {
  const { listaPets } = useIndex();

  //ApiServices.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  //---------------get user name ------------------------//

  const columns: GridColDef[] = [
    { field: "id", headerName: "id", width: 70 },
    { field: "nome", headerName: "Nome", width: 100 },
    {
      field: "historia",
      headerName: "Historia",

      width: 250,
    }
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
                rows={listaPets}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <h3>Ultimos Pets adotados</h3>
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
