import Image from "next/image";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";

import Dollar from "../icons/Dollar";
import Link from "next/link";

function MenuCard({ data }) {
  return (
    <>
      <Card
        sx={{
          width: "275px",
          boxShadow: "#ff5470 0px 3px 7px -4px",
          borderRadius: "4px",
        }}
      >
        <CardActionArea sx={{ marginBottom: "8px", position: "relative" }}>
          <Image
            src={`/images/${data.id}.jpeg`}
            width={275}
            height={190}
            priority={true}
            alt={data.name}
          />

          <CardContent>
            <Box
              sx={{
                display: "flex",
                flexFlow: "row nowrap",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "8px",
              }}
            >
              <Typography
                gutterBottom
                variant="h6"
                component="h6"
                color="primary"
                fontSize="1.1rem"
                fontWeight="bold"
              >
                {data.name}
              </Typography>
              <Typography variant="span" component="span" fontSize="0.9rem">
                {data.details[0].Cuisine}
              </Typography>
            </Box>

            <Box
              component="div"
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                marginBottom: "16px",
              }}
            >
              {!!data.discount ? (
                <Typography
                  component="div"
                  variant="p"
                  fontWeight="bold"
                  color="red"
                >
                  {(data.price * (100 - data.discount)) / 100}
                </Typography>
              ) : (
                <Typography component="div" variant="p" fontWeight="bold">
                  {data.price}
                </Typography>
              )}

              <Dollar />
            </Box>

            {!!data.discount && (
              <Box
                component="span"
                sx={{
                  width: "40px",
                  textAlign: "center",
                  backgroundColor: "red",
                  padding: "5px",
                  borderRadius: "4px",
                  color: "#fff",
                  position: "absolute",
                  top: "10px",
                }}
              >
                {data.discount}%
              </Box>
            )}

            <Link href={`/menu/${data.id}`}>
              <Typography
                component="div"
                variant="div"
                fontSize="1rem"
                color="#fff"
                sx={{
                  width: "100%",
                  textAlign: "center",
                  backgroundColor: "#ff5470",
                  padding: "4px",
                  borderRadius: "4px",
                }}
              >
                See Details
              </Typography>
            </Link>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default MenuCard;
