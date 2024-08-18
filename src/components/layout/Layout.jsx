import { Box, Typography } from "@mui/material";
import Link from "next/link";

function Layout({ children }) {
  return (
    <>
      <header
        style={{
          width: "100%",
          display: "flex",
          flexFlow: "row nowrap",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 0",
          marginBottom: "24px",
        }}
      >
        <Link href="/">
          <Typography
            component="strong"
            variant="a"
            color="primary"
            style={{
              fontWeight: "bold",
              fontSize: "1.3rem",
              letterSpacing: "1px",
            }}
          >
            Kavir Food
          </Typography>
        </Link>

        <Box component="div">
          <Link href="/menu">
            <Typography
              component="span"
              variant="a"
              color="secondary"
              style={{ fontSize: "1.1rem", marginRight: "16px" }}
            >
              Menu
            </Typography>
          </Link>

          <Link href="/categories">
            <Typography
              component="span"
              variant="a"
              color="secondary"
              style={{ fontSize: "1.1rem" }}
            >
              Categories
            </Typography>
          </Link>
        </Box>
      </header>

      <main>{children}</main>

      <footer
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "24px",
        }}
      >
        <a href="https://github.com/hwssein" target="_blank" rel="noreferrer">
          <Typography
            component="p"
            variant="p"
            color="secondary"
            style={{
              borderBottom: "2px solid #00244d",
              borderRadius: "4px",
              padding: "4px",
            }}
          >
            Developed With ❤️ By hwssein
          </Typography>
        </a>
      </footer>
    </>
  );
}

export default Layout;
