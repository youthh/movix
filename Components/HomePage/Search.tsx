"use client";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { inputStyle } from "../../styles/HomePageStyle/HomePageMaterial";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { getMovieBySearch } from "../../Api/searchMovieService";
import useDebounce from "../../Hooks/useDebounce";
import { movieResponse } from "../../Data/Types/types";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import Link from "next/link";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3DD2CC",
    },
  },
});

function Search() {
  const [isFetch, setFetching] = useState(false);
  const [value, setValue] = useState<string>("");
  const [movies, setMovies] = useState<movieResponse[]>([]);
  const debouncedValue = useDebounce<string>(value, 1000);

  const getSearchMovies = (
    data: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setValue(data.target.value);
  };
  useEffect(() => {
    value && setFetching(true);
    debouncedValue &&
      getMovieBySearch(value).then((data) => {
        setFetching(false);
        setMovies(data.results);
      });

  }, [debouncedValue]);
  return (
    <Stack spacing={3} sx={{ width: 889 }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        style={{ borderRadius: "30px", background: "#212121" }}
        disableClearable
        loading={isFetch}
        options={movies.map(
          (option) => option.title + " " + option?.release_date?.slice(0, 4)
        )}
        renderOption={(props, option) => {
          const id = movies.filter(
            (movie) =>
              movie.title + " " + movie?.release_date?.slice(0, 4) === option
          )[0].id;
          return (
            <li className={"search__item"}>
              <Link href={"film/" + id}>{option}</Link>
            </li>
          );
        }}
        renderInput={(params) => (
          <TextField
            onChange={(data) => getSearchMovies(data)}
            color={"primary"}
            style={inputStyle}
            placeholder={"Search for movies"}
            sx={{ fontSize: "25px", fontWeight: "600" }}
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: "search",
              endAdornment: (
                <React.Fragment>
                  {isFetch && debouncedValue ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
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
