import "../components/styles/globals.css";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeProvider as ThemeProviderLegacy } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import HeaderContainer from "../components/Header/headerHome";
import theme from "../mui/theme";
import createEmotionCache from "../mui/createEmotionCache";
import UserHeader from "../components/Header/userHeader";
import { useRouter } from "next/router";
import { AuthProvider } from "../data/context/AuthContext";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const router = useRouter();

  return (
    <>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <ThemeProviderLegacy theme={theme}>

              {router.pathname === "/" ||
              router.pathname === "/user/login" ||
              router.pathname === "/user/register" ? (
                <HeaderContainer />
              ) : (
                <UserHeader />
              )}
              <AuthProvider>
                <Component {...pageProps} />
              </AuthProvider>

   
            <CssBaseline />
          </ThemeProviderLegacy>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default MyApp;
