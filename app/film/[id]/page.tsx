import React from "react";
import { API_KEY } from "../../../Data/Const";
import { instance } from "../../../Api/instance";
import MoviePage from "../../../Components/MoviePage/MoviePage";
import Header from "../../../Components/HomePage/Header";

async function getData(id: string) {
  const resp = await fetch(instance.baseURL + `movie/${id}?api_key=` + API_KEY);

  return resp.json();
}

async function getCast(id: string) {
  const resp = await fetch(
    instance.baseURL + `movie/${id}/credits?api_key=` + API_KEY
  );

  return resp.json();
}

async function getSimilar(id: string) {
  const resp = await fetch(
    instance.baseURL + `movie/${id}/similar?api_key=` + API_KEY
  );

  return resp.json();
}

export default async function Film({ params }: { params: string }) {
  // @ts-ignore
  const { id } = params;
  const currentMovie = await getData(id);
  const castMovie = await getCast(id);
  const similarMovie = await getSimilar(id);

  return (
    <div className={"movie__page_main-container"}>
      <Header />
      <MoviePage
        movieDetails={currentMovie}
        cast={castMovie}
        similarMovie={similarMovie.results}
      />
    </div>
  );
}
