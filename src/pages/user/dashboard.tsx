import { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";
import {
  Paper,
  Grid,
  Box
} from "@mui/material";

import { DataGrid, GridColDef} from "@mui/x-data-grid";

import { useIndex } from "../../data/hooks/pages/useIndex";
import { useRelatorio } from "../../data/hooks/pages/useRelatorio";



const Dashboard: NextPage = () => {
  const { listaPets } = useIndex();
  const {listaRelatorio } = useRelatorio();
  //---------------get user name ------------------------//

  const columnsPets: GridColDef[] = [
    { field: "id", headerName: "id", width: 70 },
    { field: "nome", headerName: "Nome", width: 100 },
    {
      field: "historia",
      headerName: "Historia",

      width: 250,
    }
  ];

  const columnsAdotados: GridColDef[] = [
    { field: "id", headerName: "id", width: 70 },
    { field: "email", headerName: "Email", width: 300 },
    {
      field: "valor",
      headerName: "Valor",

      width: 100,
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
                columns={columnsPets}
                pageSize={5}
                rowsPerPageOptions={[5]}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <h3>Ultimos Pets adotados</h3>
            <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
                rows={listaRelatorio}
                columns={columnsAdotados}
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
