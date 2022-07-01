import { SubTitle, TitleStyled } from "./styles/title.styled";

interface TituloProps {
  title?: string;
  subtitle: string | JSX.Element
}

export default function Title(props: TituloProps) {
  return (
    <>
      <TitleStyled>{props.title}</TitleStyled>
      <SubTitle>{props.subtitle}</SubTitle>
    </>
  );
}
