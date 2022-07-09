import { HeaderContainer, Logo, LinksContainer } from "./styles/headerHome.style";
import { Link, Button } from "@mui/material";
import NextLink from "next/link"
import { useRouter } from "next/router";

export default function HeaderHome() {
  const router = useRouter();
  const handleClick = (e: any) => {
    e.preventDefault();
    router.push("/");
  };
  
  return (
    <HeaderContainer>
      <div>
      <Logo src="/imagens/logo.svg" alt="adote um pet" onClick={handleClick} sx={{cursor: "pointer"}}/>
      <LinksContainer>
      <Button variant="contained"><Link component={NextLink} href={"/user/login"}>Login</Link></Button>
       
        <Button variant="contained"><Link component={NextLink} href={"/user/registrar"} >Inscreva-se</Link></Button>
      </LinksContainer>
      </div>
    </HeaderContainer>
  );
}
