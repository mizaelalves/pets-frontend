import { HeaderContainer, Logo, LinksContainer } from "./styles/headerHome.style";
import { Link, Button } from "@mui/material";
import NextLink from "next/link"

export default function HeaderHome() {
  return (
    <HeaderContainer>
      <div>
      <Logo src="/imagens/logo.svg" />
      <LinksContainer>
      <Button variant="contained"><Link component={NextLink} href={"/user/login"}>Login</Link></Button>
       
        <Button variant="contained"><Link component={NextLink} href={"/user/registrar"} >Inscreva-se</Link></Button>
      </LinksContainer>
      </div>
    </HeaderContainer>
  );
}
