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
}

export default function CardPed(props: ListaProps) {
  const tamanhoMaximo = 200;
  return (
    <>
      <ListaStyled>
        {props.pets.map((pet) => (
          <ItemStyled key={pet.id}>
            <Foto src={pet.imagem} alt={pet.nome}/>
            <ContainerInfo>
              <Nome>{pet.nome}</Nome>
              <Descricao>
                {TextServices.limitarTexto(pet.historia, tamanhoMaximo)}
              </Descricao>
              <Button fullWidth variant={"contained"}>
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
