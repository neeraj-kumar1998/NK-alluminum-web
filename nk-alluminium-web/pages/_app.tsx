import { ThemeProvider } from "@mui/material/styles"
import { CssBaseline } from "@mui/material"
import { AppProps } from "next/app"
import { VariantProvider } from "../context/variantContext"
import { theme } from "../lib/theme"
function MyApp({ Component, pageProps }: AppProps | any) {
  console.log("pageProps: ", pageProps)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <VariantProvider>
        <Component {...pageProps} />
      </VariantProvider>
    </ThemeProvider>
  )
}

export default MyApp
