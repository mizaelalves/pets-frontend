import { HeaderContainer, Logo, LinksContainer } from "./styles/headerHome.style";
import { Link, Button } from "@mui/material";
import NextLink from "next/link"
import { useRouter } from "next/router";
import { useShowUserName } from "../../data/hooks/pages/useShowUserName";
import { parseCookies } from "nookies";



export default function HeaderHome() {

  function useVerifyTokenExist(){
    const {username, verifyTokenExist} = useShowUserName();
    if(verifyTokenExist() != false){
      return (
        <span>Ola, {username}</span>
      )
    }
  }
  
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
