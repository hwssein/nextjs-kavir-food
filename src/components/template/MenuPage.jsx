import MenuCard from "../module/MenuCard";

import { Grid, Typography } from "@mui/material";

function MenuPage({ foodData }) {
  return (
    <>
      <Typography component="h5" variant="h5" color="primary" mb={3}>
        Menu
      </Typography>

      <Grid
        container
        sx={{
          width: "100%",
          display: "flex",
          flexFlow: "row wrap",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        {foodData.map((item) => (
          <Grid
            item
            key={item.id}
            xs={12}
            sm={6}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "row nowrap",
              alignItems: "center",
              justifyContent: "center",
              margin: "16px 0",
            }}
          >
            <MenuCard data={item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default MenuPage;
