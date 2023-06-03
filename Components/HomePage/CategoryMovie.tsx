import React from "react";
import Image from "next/image";
import star from "../../Images/star_rating.png";
import Link from "next/link";
import { movieResponse } from "../../Data/Types/types";
type CategoryProps = {
  movies: movieResponse[];
  nameCategory: string;
};
const CategoryMovie = ({ movies, nameCategory }: CategoryProps) => {
  return (
    <div>
      <h1 className="trending__movies--title">{nameCategory}</h1>
      <div className="trending__movies_container">
        {movies.slice(6, 10).map((movie) => {
          return (
            <div className="trending__movies_item">
              <div>
                <div className={"trending__movies_item-box-rating"}>
                  <Image src={star} alt={"star"} />
                  <p className="box__rating--value">
                    {Math.round(movie.vote_average * 10) / 10}
                  </p>
                </div>
                <Image
                  className="img_trending"
                  src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                  alt={"poster"}
                  width={298}
                  height={220}
                />
              </div>
              <div className="trending__movies-item-info">
                <Link href={"/film/" + movie.id}>
                  <h6 className="trending__movies__item-title">
                    {movie.title}
                  </h6>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMovie;
