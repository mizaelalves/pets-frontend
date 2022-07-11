import Button from "@mui/material/Button";
import {
  Nome,
  Descricao,
  ListaStyled,
  ItemStyled,
  Foto,
  ContainerInfo,
} from "./lista.style";
import { Pet } from "../../data/@types/Pets";
import {TextServices} from '../../data/services/TextServices'

interface ListaProps {
  pets: Pet[];
  onSelect: (pet: Pet) => void;
}

export default function CardPed(props: ListaProps) {
  const tamanhoMaximo = 200;
  return (
    <>
      <ListaStyled>
        {props.pets.map((pet) => (
          <ItemStyled key={pet.id}>
            <Foto src={pet.foto} alt={pet.nome}/>
            <ContainerInfo>
              <Nome>{pet.nome}</Nome>
              <Descricao>
                {TextServices.limitarTexto(pet.historia, tamanhoMaximo)}
              </Descricao>
              <Button fullWidth sx={{width: "auto"}} onClick={() => {props.onSelect(pet), console.log(pet)}} variant={"contained"}>
                {" "}
                Adotar {pet.nome}
              </Button>
            </ContainerInfo>
          </ItemStyled>
        ))}
      </ListaStyled>
    </>
  );
}
