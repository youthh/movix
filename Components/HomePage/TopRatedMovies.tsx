import React from "react";
import { topRatedMovies } from "../../Data/Types/types";
import Image from "next/image";
import Link from "next/link";

const TopRatedMovies = ({
  topRatedMovies,
}: {
  topRatedMovies: topRatedMovies;
}) => {
  return (
    <div>
      <h1 className="trending__movies--title">Top Rated Movies</h1>
      <div className="trending__movies_container">
        {topRatedMovies.results.slice(0, 4).map((movie) => {
          return (
            <div className="trending__movies_item">
              <div>
                <Image
                  src={"https://image.tmdb.org/t/p/w185" + movie.poster_path}
                  alt={"poster"}
                  width={210}
                  height={300}
                />
              </div>
              <div className="trending__movies-item-info topRated">
                <Link href={"/film/" + movie.id}>
                  <h6 className="trending__movies__item-title">
                    {movie.title}
                  </h6>
                </Link>
                <p>{movie.release_date.slice(0, 4)} • Action, Drama</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopRatedMovies;
