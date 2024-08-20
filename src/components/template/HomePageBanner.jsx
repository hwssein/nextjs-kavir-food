import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function HomePageBanner() {
  return (
    <>
      <Grid
        container
        sx={{
          width: "100%",
          display: "flex",
          flexFlow: "row wrap",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "32px",
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            width: "100%",
            display: "flex",
            flexFlow: "column nowrap",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            margin: "16px 0",
          }}
        >
          <Box component="div">
            <Typography
              component="h6"
              variant="h6"
              mb={3}
              sx={{
                width: "100%",
                borderBottom: "2px solid #ff5470",
                padding: "0 4px",
              }}
            >
              KaviR Food
            </Typography>
          </Box>

          <Typography component="span" variant="p" mb={1}>
            Food Delivery and Takeout!
          </Typography>

          <Typography component="p" variant="p" mb={3}>
            BotoFood is an online food ordering and delivery platform launched
            by Uber in 2014. Meals are delivered by couriers using cars,
            scooters, bikes, or on foot.
          </Typography>

          <Link href="/menu">
            <Button variant="contained">See All</Button>
          </Link>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            width: "100%",
            display: "flex",
            flexFlow: "row, nowrap",
            alignItems: "center",
            justifyContent: {
              xs: "center",
              sm: "flex-end",
            },
            margin: "16px 0",
          }}
        >
          <Image
            src="/images/banner.png"
            width={300}
            height={250}
            alt="banner"
            priority={true}
          ></Image>
        </Grid>
      </Grid>
    </>
  );
}

export default HomePageBanner;
