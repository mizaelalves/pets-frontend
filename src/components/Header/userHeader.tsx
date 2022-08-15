import { AdminCont, Logo, LinksContainer } from "./styles/userHeader.style";
import { Link, Box, Button } from "@mui/material";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { AuthContext } from "../../data/context/AuthContext";
import { useContext } from "react";
import { useCookies } from "react-cookie";


export default function UserHeader() {

  const [cookies, setCookie, removeCookie] = useCookies(['pet-token']);
  const { logOut } = useContext(AuthContext);

  const router = useRouter();
  const handleClick = (e: any) => {
    e.preventDefault();
    router.push("/");
  };

  const handleDestroyCookie = () => {
    //destroyCookie(null, "pet-token");
    removeCookie('pet-token');
    logOut(false);
    router.push("/");
  };

  return (
    <AdminCont>
      <div>
        <Logo
          src={"/imagens/logo.svg"}
          alt={"Adote um pet"}
          sx={{ cursor: "pointer" }}
          onClick={handleClick}
        />
        <LinksContainer>
          <Button variant="contained">
            <Link component={NextLink} href={"/pets/cadastro"}>
              <a>Cadastrar Pet</a>
            </Link>
          </Button>

          <Button variant="contained" onClick={handleDestroyCookie}>
            <Link component={NextLink} href={"/"}>
              Sair
            </Link>
          </Button>
        </LinksContainer>
      </div>
    </AdminCont>
  );
}
