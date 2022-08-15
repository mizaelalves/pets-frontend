import {
  HeaderContainer,
  Logo,
  LinksContainer,
} from "./styles/headerHome.style";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { Link, Button } from "@mui/material";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";

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
              <Button variant="contained" size="medium">
                Inscreva-se
              </Button>
            </Link>
          </LinksContainer>
        ) : (
          <LinksContainer>
            <Button variant="contained" size="medium">
              <Link component={NextLink} href={"/user/login"}>
                Login
              </Link>
            </Button>
          </LinksContainer>
        )}
      </div>
    </HeaderContainer>
  );
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ["pet-token"]: token } = parseCookies(ctx);

  if (token) {
    return {
      redirect: {
        destination: "/user/dashboard",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
