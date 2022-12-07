"use client";
import React from "react";
import { Button, ConfigProvider } from "antd";
import Image from "next/image";
import circle from "../../Images/circle.png";
type HomePageMovieProps = {
  title: string;
  img: string;
  genre: string;
};

const HomePageMovie = ({ title, img, genre }: HomePageMovieProps) => {
  return (
    <div className="container_homePageMovie">
      <div>
        <h1 className="title_homePageMovie">{title}</h1>
        <div className="genre__container">
          <div className="gener__item">
            <h5 className="genre__name">Action</h5>
          </div>
          <div className="gener__item">
            <h5 className="genre__name">Adventure</h5>
          </div>
          <div className="gener__item">
            <h5 className="genre__name">Fantasy</h5>
          </div>
        </div>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#c91821",
            },
          }}
        >
          <Button className="btn__style" type="primary">
            <div className="btn_inner">
              Watch
              <Image className="circle_watch" src={circle} alt={"circle"} />
            </div>
          </Button>
        </ConfigProvider>
      </div>
    </div>
  );
};

export default HomePageMovie;
