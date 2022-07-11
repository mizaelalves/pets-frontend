import {
  HeaderContainer,
  Logo,
  LinksContainer,
} from "./styles/headerHome.style";
import { Link, Button } from "@mui/material";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useShowUserName } from "../../data/hooks/pages/useShowUserName";
import { parseCookies, destroyCookie } from "nookies";


export default function HeaderHome() {
  const { "pet-token": token } = parseCookies();
  /*
  function useVerifyTokenExist(){
    const {username, verifyTokenExist} = useShowUserName();
    if(verifyTokenExist() != false){
      return (
        <span>Ola, {username}</span>
      )
    }
  }
  */
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push("/");
  };
  const {username} = useShowUserName();

  const handleDestroyCookie = (e: any) => {
      destroyCookie(null, "pet-token");
      destroyCookie(null, "pet-token");
      console.log("saiu com sucesso")
      window.location.reload();
  };
  return (
    <HeaderContainer>
      <div>
        <Logo
          src="/imagens/logo.svg"
          alt="adote um pet"
          onClick={handleClick}
          sx={{ cursor: "pointer" }}
        />
        <LinksContainer>
          {token === undefined? (
            <>
              <Button variant="contained">
                <Link component={NextLink} href={"/user/login"}>
                  Login
                </Link>
              </Button>

              <Button variant="contained">
                <Link component={NextLink} href={"/user/registrar"}>
                  Inscreva-se
                </Link>
              </Button>
            </>
          ) : (
            <>
              <Button variant="contained">
                <Link component={NextLink} href={"/user/dashboard"}>
                  Dashboard
                </Link>
              </Button>
              <Button variant="contained" onClick={handleDestroyCookie}>
                <Link component={NextLink} href={"/"}>
                  Sair
                </Link>
              </Button>
            </>
          )}
        </LinksContainer>
      </div>
    </HeaderContainer>
  );
}

