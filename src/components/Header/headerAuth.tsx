import { HeaderContainer, Logo, LinksContainer } from "./styles/headerHome.style";
import { Link, Button } from "@mui/material";
import NextLink from "next/link"

export default function HeaderAuth() {
  return (
    <HeaderContainer>
      <div>
      <Logo src="/imagens/logo.svg" />
      </div>
    </HeaderContainer>
  );
}
