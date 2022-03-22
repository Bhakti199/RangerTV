import React from "react";
import "./HomePage.css";
export const HomePage = () => {
  const temporaryCategoryHolder = [
    {
      img: "./assets/comedy1.jpg",
      button: "Comedy",
    },
    {
      img: "./assets/music3.jpg",
      button: "Music",
    },
    {
      img: "./assets/realityShow2.jpg",
      button: "Reality Shows",
    },
    {
      img: "./assets/ankurWarikoo4.jpg",
      button: "Knowledge",
    },
  ];
  return (
    <>
      <div>
        <div className="landing-page flex-row">
          <div className="banner-img-holder">
            <img
              src="./assets/banner.jpg"
              alt=""
              className="responsive-img"
            ></img>
          </div>
        </div>
        <div className="category-banner-display">
          <p className="margin-top-bottom-zero explore-text">
            Getting bored? Then why to wait, Grab some popcorn and Explore your
            favorite shows with
            <span className="nav-name-text"> RangerTV</span>.
          </p>

          {temporaryCategoryHolder.map((item) => (
            <div className="flex-col individual-banner">
              <div className="category-banner flex-row">
                <img src={item.img} alt="" className="responsive-img banner" />
              </div>
              <button className=" text-align-center category-heading">
                {item.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
