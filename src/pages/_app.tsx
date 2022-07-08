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
import HeaderAuth from "../components/Header/headerAuth";
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
            {router.pathname === "/" ? (
              <HeaderContainer />
            ) : router.pathname === "/user/dashboard" ? (
              <UserHeader />
            ) : router.pathname === "/user/subscribe" ? (
              <HeaderAuth nameType={"subscribe"} />
            ) : (
              <HeaderAuth nameType={"login"} />
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
