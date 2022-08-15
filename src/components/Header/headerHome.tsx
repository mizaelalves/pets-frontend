import {
  HeaderContainer,
  Logo,
  LinksContainer,
} from "./styles/headerHome.style";
import { Link, Button } from "@mui/material";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { destroyCookie } from "nookies";
import { AuthContext } from "../../data/context/AuthContext";
import { useContext } from "react";

export default function HeaderHome() {
  const { isAuthenticated, logOut } = useContext(AuthContext);


  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push("/");
  };

  const handleDestroyCookie = (e: any) => {
    destroyCookie(null, "pet-token");
    console.log("saiu com sucesso");
    logOut(false);
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
          {!isAuthenticated ? (
            <>
              <Button variant="contained">
                <Link component={NextLink} href={"/user/login"}>
                  Login
                </Link>
              </Button>

              <Button variant="contained">
                <Link component={NextLink} href={"/user/subscribe"}>
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
