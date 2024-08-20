import { Box, Grid, Typography } from "@mui/material";
import Fast from "../icons/Fast";
import Food from "../icons/Food";
import Choice from "../icons/Choice";
import Clock from "../icons/Clock";

function HomePageBoxes() {
  return (
    <>
      <Typography component="h6" variant="h6" mb={4} color="primary">
        Why Us?
      </Typography>

      <Grid container sx={{ marginBottom: "32px" }}>
        <Grid
          item
          xs={6}
          md={3}
          sx={{
            marginBottom: "24px",
            display: "flex",
            flexFlow: "row nowrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "150px",
              height: "150px",
              boxShadow: "#ff5470 0px 2px 8px -3px, #ff5470 0px 2px 4px -3px",
              borderRadius: "4px",
              padding: "4px",
            }}
          >
            <Fast />
            <Typography component="div" variant="div" mt={2} fontSize="1.1rem">
              {" "}
              Fast
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={6}
          md={3}
          sx={{
            marginBottom: "24px",
            display: "flex",
            flexFlow: "row nowrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "150px",
              height: "150px",
              boxShadow: "#ff5470 0px 2px 8px -3px, #ff5470 0px 2px 4px -3px",
              borderRadius: "4px",
              padding: "4px",
            }}
          >
            <Food />
            <Typography component="div" variant="div" mt={2} fontSize="1.1rem">
              {" "}
              Best Restaurants
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={6}
          md={3}
          sx={{
            marginBottom: "24px",
            display: "flex",
            flexFlow: "row nowrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "150px",
              height: "150px",
              boxShadow: "#ff5470 0px 2px 8px -3px, #ff5470 0px 2px 4px -3px",
              borderRadius: "4px",
              padding: "4px",
            }}
          >
            <Choice />
            <Typography component="div" variant="div" mt={2} fontSize="1.1rem">
              {" "}
              Your Choice
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={6}
          md={3}
          sx={{
            marginBottom: "24px",
            display: "flex",
            flexFlow: "row nowrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "150px",
              height: "150px",
              boxShadow: "#ff5470 0px 2px 8px -3px, #ff5470 0px 2px 4px -3px",
              borderRadius: "4px",
              padding: "4px",
            }}
          >
            <Clock />
            <Typography component="div" variant="div" mt={2} fontSize="1.1rem">
              {" "}
              24-7
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default HomePageBoxes;
