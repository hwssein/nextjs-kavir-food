import Layout from "@/components/layout/Layout";
import theme from "@/configs/theme";
import "@/styles/globals.css";
import { Container, ThemeProvider } from "@mui/material";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Container>
      </ThemeProvider>
    </>
  );
}
