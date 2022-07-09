import {
  HeaderContainer,
  Logo,
  LinksContainer,
} from "./styles/headerHome.style";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { Link, Button } from "@mui/material";

interface AuthProps {
  nameType: string;
}

export default function HeaderAuth(props: AuthProps) {
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push("/");
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

        {props.nameType === "login" ? (
          <LinksContainer>
            <Link component={NextLink} href={"/user/subscribe"}>
              <Button
                variant="contained"
                size="medium"

              >
                Inscreva-se
              </Button>
            </Link>
          </LinksContainer>
        ) : (
          <LinksContainer>
            <Link component={NextLink} href={"/user/login"}>
              <Button
                variant="contained"
                size="medium"

              >
                Login
              </Button>
            </Link>
          </LinksContainer>
        )}
      </div>
    </HeaderContainer>
  );
}
