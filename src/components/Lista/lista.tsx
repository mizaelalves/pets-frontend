import { Button, CircularProgress, Box } from "@mui/material";
import {
  Nome,
  Descricao,
  ListaStyled,
  ItemStyled,
  Foto,
  ContainerInfo,
} from "./lista.style";
import { Pet } from "../../data/@types/Pets";
import { TextServices } from "../../data/services/TextServices";
import { AlignHorizontalCenter } from "@mui/icons-material";
import { useState, useEffect } from "react";

interface ListaProps {
  pets: Pet[];
  onSelect: (pet: Pet) => void;
}

export default function CardPed(props: ListaProps) {
  const handleReload = (e: any)=>{
    window.location.reload();
  }

  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function progress() {
    return <CircularProgress />;
  }
  function reload() {

    return (<Box sx={{display: "flex", alignItems: "center", flexDirection: "column", color: "gray"}} >
    <h2>Ocorreu um erro</h2>
    <Button variant="contained" onClick={handleReload}>Clique para atualizar a pagina</Button>
    </Box>)
  }

  const [loading, setLoading] = useState(true);

  function onLoading() {
    if (loading) {
      return progress();
    }
    return reload();
  }
  useEffect(() => {
    sleep(5000).then(() => {
      setLoading(false);
    });

  });

  const tamanhoMaximo = 200;
  return (
    <>
      {props.pets.length <= 0 ||
      props.pets === undefined ||
      props.pets === null ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {onLoading()}
        </Box>
      ) : (
        <ListaStyled>
          {props.pets.map((pet) => (
            <ItemStyled key={pet.id}>
              <Foto src={pet.foto} alt={pet.nome} />
              <ContainerInfo>
                <Nome>{pet.nome}</Nome>
                <Descricao>
                  {TextServices.limitarTexto(pet.historia, tamanhoMaximo)}
                </Descricao>
                <Button
                  fullWidth
                  sx={{ width: "auto" }}
                  onClick={() => {
                    props.onSelect(pet), console.log(pet);
                  }}
                  variant={"contained"}
                >
                  {" "}
                  Adotar {pet.nome}
                </Button>
              </ContainerInfo>
            </ItemStyled>
          ))}
        </ListaStyled>
      )}
    </>
  );
}
