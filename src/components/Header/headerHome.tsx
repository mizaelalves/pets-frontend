import {
  HeaderContainer,
  Logo,
  LinksContainer,
} from "./styles/headerHome.style";
import { Link, Button } from "@mui/material";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { AuthContext } from "../../data/context/AuthContext";
import { useContext } from "react";
import { useCookies } from "react-cookie";

export default function HeaderHome() {
  const { isAuthenticated, logOut } = useContext(AuthContext);
  const [cookies, setCookie, removeCookie] = useCookies(["pet-token"]);

  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push("/");
  };

  const handleDestroyCookie = (e: any) => {
    removeCookie("pet-token");
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
              <Button variant="contained" color="primary">
                <Link
                  component={NextLink}
                  href={"/user/login"}
                  sx={{ color: "inherit", textDecoration: "none" }}
                >
                  Login
                </Link>
              </Button>

              <Button variant="contained" color="primary">
                <Link
                  component={NextLink}
                  href={"/user/subscribe"}
                  sx={{ color: "inherit", textDecoration: "none" }}
                >
                  Inscreva-se
                </Link>
              </Button>
            </>
          ) : (
            <>
              <Button variant="contained" color="primary">
                <Link
                  component={NextLink}
                  href={"/user/dashboard"}
                  sx={{ color: "inherit", textDecoration: "none" }}
                >
                  Dashboard
                </Link>
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleDestroyCookie}
              >
                <Link
                  component={NextLink}
                  href={"/"}
                  sx={{ color: "inherit", textDecoration: "none" }}
                >
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
