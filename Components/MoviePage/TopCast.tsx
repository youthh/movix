import React from "react";
import { cast } from "../../Data/Types/types";
import play from "../../Images/Play.png";
import Image from "next/image";

const TopCast = ({ cast }: { cast: cast[] }) => {
  return (
    <div className={"top_cast__container"}>
      <h1 className="top_cast_title">Top Cast</h1>
      <div className={"top__cast-items-box"}>
        {cast.slice(0, 4).map((actor) => {
          return (
            <div className="top__cast-item-box">
              <Image
                className={"top__cast_item-img"}
                src={"https://image.tmdb.org/t/p/w185" + actor.profile_path}
                alt={"play_btn"}
                width={160}
                height={160}
              />
              <h5 className={"top__cast_item_real-name"}>{actor.name}</h5>
              <h6 className={"top__cast_item_character"}>{actor.character}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopCast;
