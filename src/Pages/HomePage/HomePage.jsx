import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

export const HomePage = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { categories },
        } = await axios.get("/api/categories");
        setCategory(categories);
      } catch {
        console.error("error occured");
      }
    })();
  });
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
          <div className="flex-row banners-display">
            {category.map((item) => (
              <div className="flex-col individual-banner">
                <div className="category-banner flex-row">
                  <Link to="/video-listing-page">
                    <img
                      src={item.img}
                      alt=""
                      className="responsive-img banner"
                    />
                  </Link>
                </div>
                <Link to="/video-listing-page">
                  <button className=" text-align-center category-heading">
                    {item.categoryName}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
