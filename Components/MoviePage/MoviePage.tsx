"use client";
import React from "react";
import {
  movieDetails,
  responseCast,
  TrendingMovie,
} from "../../Data/Types/types";
import Image from "next/image";
import maverik from "../../Images/maverik.png";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import { Button, ConfigProvider } from "antd";
import { HeartFilled } from "@ant-design/icons";
import star from "../../Images/Star.png";
import play from "../../Images/Play.png";
import Link from "next/link";
import CastList from "./CastList";
import CategoryMovie from "../HomePage/CategoryMovie";
import TopCast from "./TopCast";

type MoviePageProps = {
  similarMovie: TrendingMovie[];
  movieDetails: movieDetails;
  cast: responseCast;
};

const MoviePage = ({ movieDetails, cast, similarMovie }: MoviePageProps) => {
  return (
    <div className="movie__page__container">
      <div className="movie__page_watch-box">
        <Image
          className="movie_page_img"
          src={"https://image.tmdb.org/t/p/w1280" + movieDetails.backdrop_path}
          width={1004}
          height={330}
          alt={"movie"}
        />
        <div className="movie__page--box-play">
          <div className="movie__page--box-play-img">
            <Image src={play} alt={"play_btn"} />
          </div>
          <p className="movie__page-watch-text">Watch Trailer</p>
        </div>
      </div>
      <div className={"movie_page_bottom"}>
        <div className="movie__details__container">
          <div className="movie__details__top">
            <h1 className="movie_page-title">
              {movieDetails.title + " • " + movieDetails.release_date}
            </h1>
            <div className="movie__box__genre">
              {movieDetails.genres.slice(0, 3).map((genre) => {
                return <div className="movie__genre--item">{genre.name}</div>;
              })}
            </div>
          </div>
          <div className="movie_page__overview--box">
            <p className="movie_page__overview">{movieDetails.overview}</p>
          </div>
          <CastList cast={cast} titleCastField={"Director"} title={"crew"} />
          <CastList cast={cast} titleCastField={"Acting"} title={"cast"} />
          <CastList cast={cast} titleCastField={"Producer"} title={"crew"} />
          <TopCast cast={cast.cast} />
          <CategoryMovie
            nameCategory={"Similar Movies"}
            movies={similarMovie}
          />
        </div>
        <div className="movie_page_box_rating">
          <div className="movie_page_right_rating">
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "none",
                },
              }}
            >
              <Button
                icon={<HeartFilled />}
                className="btn__style like__btn"
                type="primary"
                style={{ background: "none", boxShadow: "none" }}
              />
            </ConfigProvider>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "none",
                },
              }}
            >
              <Button
                icon={<BookmarkBorderRoundedIcon />}
                className="btn__style"
                type="primary"
                style={{ background: "none", boxShadow: "none" }}
              />
            </ConfigProvider>
            <Image className="img__start" src={star} alt={"star_rating"} />
            <p>{movieDetails.vote_average}</p>
          </div>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#3DD2CC",
              },
            }}
          >
            <Button className="movie_page_rating__btn" type="primary">
              See Showtimes
            </Button>
          </ConfigProvider>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
