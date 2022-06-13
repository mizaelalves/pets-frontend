import { AdminCont, Logo, LinksContainer } from "./admin.style";
import { Link, Box } from "@mui/material";
import NextLink from "next/link";
import { useRouter } from "next/router";

export default function Admin() {
  return (
    <AdminCont>
      <div>
        <Logo src={"/imagens/logo.svg"} alt={"Adote um pet"} />
        <LinksContainer>
          <Link component={NextLink} href={"/pets/cadastro"}>
            <a>Cadastrar Pet</a>
          </Link>
          <Link component={NextLink} href={"/pets/relatorio"}>
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
          </Link>
        </LinksContainer>
      </div>
    </AdminCont>
  );
}
