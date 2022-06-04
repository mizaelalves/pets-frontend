import { styled } from "@mui/material";

export const ListaStyled = styled('ul')`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: ${(({theme})=> theme.spacing(2))}
`

export const ItemStyled = styled('li')`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: ${(({theme})=> theme.spacing(10))};
  ${({theme})=> theme.breakpoints.down('md')}{
    gap: ${({theme})=> theme.spacing(2)};
    grid-template-columns: 1fr;
    margin-bottom: ${({theme}) => theme.spacing(10)};
  }
  `
export const Foto = styled('img')`
  width: 100%;
`

export const ContainerInfo = styled('div')`
  display: flex;
  flex-direction: column;
  gap:${({theme}) => theme.spacing(2)}
`

export const Nome = styled('h2')`
    margin: 0;
`
export const Descricao = styled('p')`
  margin: 0;
  word-wrap: break-word;
`