import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Dollar from "../icons/Dollar";

function FoodDetailsPage({ data }) {
  return (
    <>
      <Box
        component="div"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "24px",
          padding: "0 5%",
        }}
      >
        <Image
          src={`/images/${data.id}.jpeg`}
          width={500}
          height={400}
          layout="responsive"
          alt={`${data.name}`}
          priority={true}
          style={{ borderRadius: "4px" }}
        />
      </Box>

      <Typography
        component="h6"
        variant="h6"
        color="primary"
        fontWeight="bold"
        mb={2}
      >
        {data.name}
      </Typography>

      <Typography component="p" variant="p" mb={3}>
        {data.introduction}
      </Typography>

      <Typography component="h6" variant="h6" mb={2} color="primary">
        Details
      </Typography>

      <ul style={{ width: "100%", marginBottom: "24px" }}>
        {data.details.map((item) => (
          <li
            key={Object.keys(item)}
            style={{
              width: "100%",
              display: "flex",
              flexFlow: "row nowrap",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "8px",
              padding: "8px",
            }}
          >
            <Typography component="span" variant="span" fontWeight="bold">
              {Object.keys(item)}:
            </Typography>
            <Typography component="span" variant="span">
              {Object.values(item)}
            </Typography>
          </li>
        ))}
      </ul>

      <Typography component="h6" variant="h6" mb={2} color="primary">
        Ingredients
      </Typography>

      <ul style={{ width: "100%", marginBottom: "24px" }}>
        {data.ingredients.map((item) => (
          <li
            key={item}
            style={{
              padding: "8px",
              fontWeight: "bold",
            }}
          >
            {item}
          </li>
        ))}
      </ul>

      <Typography component="h6" variant="h6" mb={2} color="primary">
        Recipe
      </Typography>
      {/* backgroundColor: */}
      {/* backgroundColor:  */}
      <ul style={{ width: "100%", marginBottom: "32px" }}>
        {data.recipe.map((item, index) => (
          <li
            key={item}
            style={{
              padding: "8px",
              fontWeight: "bold",
              margin: "2px 0",
              borderRadius: "4px",
              backgroundColor: index % 2 ? "#fcd5dd" : "#ffbac5",
            }}
          >
            {item}
          </li>
        ))}
      </ul>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          marginBottom: "16px",
        }}
      >
        <Typography component="h6" variant="h6" fontWeight="bold">
          Price:{" "}
          {!!data.discount
            ? (data.price * (100 - data.discount)) / 100
            : data.price}
        </Typography>

        <Dollar />

        {!!data.discount && (
          <Typography
            component="span"
            variant="span"
            color="primary"
            fontWeight="bold"
          >
            {data.discount}% OFF
          </Typography>
        )}
      </Box>

      <Button variant="contained" fullWidth>
        Add To Cart
      </Button>
    </>
  );
}

export default FoodDetailsPage;
