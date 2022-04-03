import React from "react";
import { Footer } from "../../Components/Index";
import { Link } from "react-router-dom";
import "./HomePage.css";
import { useMainContext } from "../../Context/Index";

export const HomePage = () => {
  const { state, dispatch } = useMainContext();
  return (
    <>
      <div>
        <div className="landing-page flex-row">
          <div className="banner-img-holder">
            <img
              src="https://ik.imagekit.io/yol3sixl2xj/imp_FZJRdmajd.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648883114627"
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
            {state.categoryList.map((item) => (
              <div className="flex-col individual-banner" key={item._id}>
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
                  <button
                    className=" text-align-center category-heading"
                    onClick={() =>
                      dispatch({
                        type: "SET_CURRENT_CATEGORY",
                        payload: item.categoryName,
                      })
                    }
                  >
                    {item.categoryName}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <Footer className="footer-display" />
      </div>
    </>
  );
};
