"use client";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { inputStyle } from "../../styles/HomePageStyle/HomePageMaterial";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { instance } from "../../Api/instance";
import { API_KEY } from "../../Data/Const";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3DD2CC",
    },
  },
});

function Search() {
  const [isFethc, setFetching] = useState();
  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
  ];

  return (
    <Stack spacing={3} sx={{ width: 889 }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        style={{ borderRadius: "30px" }}
        disableClearable
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            color={"primary"}
            style={inputStyle}
            placeholder={"Search for movies"}
            sx={{ fontSize: "25px", fontWeight: "600" }}
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
    </Stack>
  );
}

const SearchField = () => (
  <ThemeProvider theme={theme}>
    <Search />
  </ThemeProvider>
);

export default SearchField;
