import "../components/styles/globals.css";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeProvider as ThemeProviderLegacy } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import HeaderContainer from "../components/Header/header";
import theme from "../theme";
import createEmotionCache from "../createEmotionCache";

const clientSideEmotionCache = createEmotionCache();
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <ThemeProviderLegacy theme={theme}>
            <HeaderContainer />
            <Component {...pageProps} />
            <CssBaseline />
          </ThemeProviderLegacy>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default MyApp;
