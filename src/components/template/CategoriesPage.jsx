import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import MenuCard from "../module/MenuCard";

function CategoriesPage({ data }) {
  const router = useRouter();
  const [query, setQuery] = useState({
    level: "",
    time: "",
  });

  useEffect(() => {
    const { level, time } = router.query;

    if (query.level !== level || query.time !== time) {
      setQuery({ level, time });
    }
  }, [router.query]);

  const changeHandler = (event) => {
    setQuery({ ...query, [event.target.name]: event.target.value });
  };

  const searchHandler = () => {
    if (query.level || query.time) {
      router.push({
        pathname: "/categories",
        query,
      });
    } else {
      alert("Please Set The Level And Time Field");
    }
  };

  return (
    <>
      <Typography component="h6" variant="h6" color="primary" fontWeight="bold">
        Categories
      </Typography>

      <Grid
        container
        sx={{
          width: "100%",
          display: "flex",
          flexFlow: "row wrap",
          alignItems: "center",
          justifyContent: "center",
          margin: "24px 0",
        }}
      >
        <Grid
          item
          xs={6}
          sm={4}
          sx={{
            marginBottom: "16px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: {
              xs: "140px",
              sm: "100%",
            },
            padding: "0 8px",
          }}
        >
          <FormControl sx={{ width: "100%" }}>
            <InputLabel id="category-level">Level</InputLabel>
            <Select
              labelId="category-level"
              value={query.level || ""}
              name="level"
              label="Level"
              onChange={changeHandler}
            >
              <MenuItem value={"Easy"}>Easy</MenuItem>
              <MenuItem value={"Medium"}>Medium</MenuItem>
              <MenuItem value={"Hard"}>Hard</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid
          item
          xs={6}
          sm={4}
          sx={{
            marginBottom: "16px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: {
              xs: "140px",
              sm: "100%",
            },
            padding: "0 8px",
          }}
        >
          <FormControl sx={{ width: "100%" }}>
            <InputLabel id="category-time">Time</InputLabel>
            <Select
              labelId="category-time"
              value={query.time || ""}
              name="time"
              label="Time"
              onChange={changeHandler}
            >
              <MenuItem value={"more"}>More Than 30 Min</MenuItem>
              <MenuItem value={"less"}>Less Than 30 Min</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid
          item
          xs={12}
          sm={4}
          sx={{ marginBottom: "16px", padding: "0 8px" }}
        >
          <Button variant="contained" fullWidth onClick={searchHandler}>
            Search
          </Button>
        </Grid>
      </Grid>

      {!!data.length ? (
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
          {data.map((item) => (
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
      ) : (
        <Box
          component="div"
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src="/images/search.png"
            width={300}
            height={300}
            alt="search"
            priority={true}
          />
        </Box>
      )}
    </>
  );
}

export default CategoriesPage;
