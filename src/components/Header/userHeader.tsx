import { AdminCont, Logo, LinksContainer } from "./styles/userHeader.style";
import { Link, Box, Button } from "@mui/material";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { destroyCookie } from "nookies";
import { AuthContext } from "../../data/context/AuthContext";
import { useContext } from "react";

export default function UserHeader() {
  const {logOut} = useContext(AuthContext);
  const router = useRouter();
  const handleClick = (e: any) => {
    e.preventDefault();
    router.push("/");
  };
  const handleDestroyCookie = (e: any) => {
    destroyCookie(null, "pet-token");
    logOut(false)
    router.push("/");
};
  return (
    <AdminCont>
      <div>
        <Logo src={"/imagens/logo.svg"} alt={"Adote um pet"} sx={{cursor: "pointer"}} onClick={handleClick}/>
        <LinksContainer>
          <Button variant="contained"><Link component={NextLink} href={"/pets/cadastro"}>
            <a>Cadastrar Pet</a>
          </Link></Button>

          <Button variant="contained" onClick={handleDestroyCookie}>
              <Link component={NextLink} href={"/"} >
                Sair
              </Link>
            </Button>
        </LinksContainer>
      </div>
    </AdminCont>
  );
}
