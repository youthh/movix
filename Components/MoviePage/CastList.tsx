import React from "react";
import Link from "next/link";
import { responseCast } from "../../Data/Types/types";

type CastListProps = {
  cast: responseCast;
  titleCastField: string;
  title: string;
};
const CastList = ({ cast, titleCastField, title }: CastListProps) => {
  return (
    <div className="movie_page_cast--box">
      <p className="movie__page_cast--field">{titleCastField}: </p>
      {title === "crew"
        ? cast.crew.map((cast) => {
            if (cast.job === titleCastField) {
              return (
                <Link
                  className="movie_page_cast-field_link"
                  target={"_blank"}
                  href={"https://www.google.com/search?q=" + cast.name}
                >
                  <h6 className="movie__page_cast--value">{cast.name + " "}</h6>
                </Link>
              );
            }
          })
        : cast.cast.map((cast) => {
            if (cast.known_for_department === titleCastField) {
              return (
                <Link
                  className="movie_page_cast-field_link"
                  target={"_blank"}
                  href={"https://www.google.com/search?q=" + cast.name}
                >
                  <h6 className="movie__page_cast--value">
                    {cast.name + "," + " "}
                  </h6>
                </Link>
              );
            }
          })}
    </div>
  );
};
export default CastList;
