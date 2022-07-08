import { AdminCont, Logo, LinksContainer } from "./styles/userHeader.style";
import { Link, Box, Button } from "@mui/material";
import NextLink from "next/link";
import { useRouter } from "next/router";

export default function UserHeader() {
  const router = useRouter();
  const handleClick = (e: any) => {
    e.preventDefault();
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
          <Button variant="contained"><Link component={NextLink} href={"/pets/relatorio"}>
            <a>
              Relatorio{" "}
              <Box
                component={"span"}
                sx={{ display: { sm: "initial", xs: "none" } }}
              >
                {" "}
                de Adoção
              </Box>
            </a>
          </Link></Button>
        </LinksContainer>
      </div>
    </AdminCont>
  );
}
