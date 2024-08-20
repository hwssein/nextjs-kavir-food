import { Grid, Typography } from "@mui/material";
import Tesla from "../icons/Tesla";
import Apple from "../icons/Apple";
import SpaceX from "../icons/SpaceX";
import Binance from "../icons/Binance";

function HomePageWhoWeAre() {
  return (
    <>
      <Typography component="h6" variant="h6" color="primary" mb={3}>
        Who We Are?
      </Typography>

      <Typography component="p" variant="p">
        {" "}
        KaviRFood company was founded in 2009 by Garrett Camp and Travis
        Kalanick.The company began food delivery in August 2014 with the launch
        of the UberFRESH service in Santa Monica, California. In 2015, the
        platform was renamed to UberEATS and the ordering software was released
        as its own application, separate from the app for Uber rides.In 2016, it
        commenced operations in both London and Paris.
      </Typography>

      <Grid
        container
        sx={{
          width: "100%",
          display: "flex",
          flexFlow: "row wrap",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "32px",
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: {
              xs: "center",
              sm: "space-evenly",
              md: "flex-start",
            },
          }}
        >
          <div style={{ width: "200px", textAlign: "center" }}>
            <Tesla />
          </div>
        </Grid>

        <Grid
          item
          xs={6}
          sm={6}
          md={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: {
              xs: "center",
              sm: "space-evenly",
              md: "center",
            },
          }}
        >
          <div style={{ width: "60px", textAlign: "center" }}>
            <Apple />
          </div>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: {
              xs: "center",
              sm: "space-evenly",
              md: "center",
            },
          }}
        >
          <div style={{ width: "200px", textAlign: "center" }}>
            <SpaceX />
          </div>
        </Grid>

        <Grid
          item
          xs={6}
          sm={6}
          md={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: {
              xs: "center",
              sm: "space-evenly",
              md: "flex-end",
            },
          }}
        >
          <div
            style={{
              width: "100px",
              textAlign: "center",
            }}
          >
            <Binance />
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default HomePageWhoWeAre;
