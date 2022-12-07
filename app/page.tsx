import React from "react";
import HomePageComponent from "../Components/HomePage/HomePageComponent";

import {
  getTopRated,
  getTrendingMovies,
  getUpcoming,
} from "../Api/movieService";
import { getMovieBySearch } from "../Api/searchMovieService";
import SideBarProfile from "../Components/HomePage/SideBarProfile";
import Header from "../Components/HomePage/Header";

const Page = async () => {
  const movies = await getTrendingMovies();
  const topRated = await getTopRated();
  const upcoming = await getUpcoming();
  return (
    <div className={"home__page--container"}>
      <Header />
      <div className="home__page__box">
        <HomePageComponent
          trendingMovies={movies.results}
          movies={upcoming.results}
          topRated={topRated.results}
        />
        <SideBarProfile />
      </div>
    </div>
  );
};

export default Page;
