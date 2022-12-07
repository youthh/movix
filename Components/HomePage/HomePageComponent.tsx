"use client";
import React from "react";
import Image from "next/image";
import pic from "../../Images/homeimg.png";
import { TrendingMovie } from "../../Data/Types/types";
import SearchField from "./Search";
import { Button } from "@mui/material";
import CategoryMovie from "./CategoryMovie";

type HomePageMoviesProps = {
  trendingMovies: TrendingMovie[];
  movies: TrendingMovie[];
  topRated: TrendingMovie[];
};

const HomePageComponent = ({
  trendingMovies,
  movies,
  topRated,
}: HomePageMoviesProps) => {
  return (
    <div>
      <div className="box__img">
        <Image src={pic} alt={"backdrop_movie"} />
        <Button
          style={{
            background: "rgba(232, 232, 232, 0.1)",
            backdropFilter: "blur(2.5px)",
            position: "absolute",
            right: "190px",
            bottom: "30px",
            borderRadius: "15px",
            color: "#E8E8E8",
            padding: "10px 15px",
          }}
        >
          Play
        </Button>
        <Button
          style={{
            background: "rgba(232, 232, 232, 0.1)",
            backdropFilter: "blur(2.5px)",
            position: "absolute",
            right: "60px",
            bottom: "30px",
            borderRadius: "15px",
            color: "#E8E8E8",
            padding: "10px 15px",
          }}
        >
          More info
        </Button>
      </div>
      <CategoryMovie movies={trendingMovies} nameCategory={"Trending Movies"} />
      <CategoryMovie movies={movies} nameCategory={"Upcoming"} />
      <CategoryMovie movies={topRated} nameCategory={"Top Rated"} />
    </div>
  );
};

export default HomePageComponent;
