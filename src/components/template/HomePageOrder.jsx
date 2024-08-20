import { Padding } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";

function HomePageOrder() {
  return (
    <>
      <Typography component="h6" variant="h6" color="primary" mb={3}>
        How To Order
      </Typography>

      <Box component="div" sx={{ marginLeft: "20px", marginBottom: "24px" }}>
        <ul>
          <li style={{ listStyleType: "initial", padding: "0 0 8px" }}>
            Sign in (or create an account) and set your delivery address.
          </li>
          <li style={{ listStyleType: "initial", padding: "8px 0" }}>
            Choose the restaurant you want to order from.
          </li>
          <li style={{ listStyleType: "initial", padding: "8px 0" }}>
            Select your items and tap “Add to Cart”.
          </li>
          <li style={{ listStyleType: "initial", padding: "8px 0" }}>
            To place your order, select “View cart” or “Checkout”.
          </li>
          <li style={{ listStyleType: "initial", padding: "8px 0" }}>
            Review your order and tap “Place Order”...
          </li>
          <li style={{ listStyleType: "initial", padding: "8px 0" }}>
            Track your order progress.
          </li>
        </ul>
      </Box>

      <Box component="div" sx={{ marginBottom: "32px" }}>
        <Grid
          container
          sx={{
            width: "100%",
            display: "flex",
            flexFlow: "row wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xs={6}
            sm={4}
            sx={{
              textAlign: "center",
              padding: "16px",
              boxShadow: "#ff5470 0px 2px 8px -3px, #ff5470 0px 2px 4px -3px",
              borderRadius: "4px",
            }}
          >
            <Link style={{ padding: "8px" }} href="/menu">
              Menu
            </Link>
          </Grid>

          <Grid
            item
            xs={6}
            sm={4}
            sx={{
              textAlign: "center",
              padding: "16px",
              boxShadow: "#ff5470 0px 2px 8px -3px, #ff5470 0px 2px 4px -3px",
              borderRadius: "4px",
            }}
          >
            <Link style={{ padding: "8px" }} href="/categories">
              Categories
            </Link>
          </Grid>

          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              textAlign: "center",
              padding: "16px",
              boxShadow: "#ff5470 0px 2px 8px -3px, #ff5470 0px 2px 4px -3px",
              borderRadius: "4px",
            }}
          >
            <Link style={{ padding: "8px" }} href="/">
              Discount
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default HomePageOrder;
