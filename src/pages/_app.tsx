import "../components/styles/globals.css";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeProvider as ThemeProviderLegacy } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import HeaderContainer from "../components/Header/header";
import theme from "../mui/theme";
import createEmotionCache from "../mui/createEmotionCache";
import Admin from "../components/Admin/admin"
import {useRouter} from'next/router'

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
          {router.pathname === '/'? <HeaderContainer/> : <Admin/>}
            <Component {...pageProps} />
            <CssBaseline />
          </ThemeProviderLegacy>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default MyApp;
