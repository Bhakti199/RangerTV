import React from "react";
import "./VideoListingCard.css";
import { BsDot, BsThreeDotsVertical } from "react-icons/bs";
export const VideoListingCard = () => {
  return (
    <div>
      <div className="video-card flex">
        <img
          src="./assets/comedy1.webp"
          className="video-img responsive-img"
        ></img>
        <div className="video-card-text-container">
          <p className="flex-row-only video-title-container">
            <span className="video-title">
              Friends Best Moments From Season 2
            </span>
            <span>
              <BsThreeDotsVertical className="video-card-icon" />
            </span>
          </p>
          <p className="margin-top-bottom-zero">Clash World</p>
          <p className=" flex margin-top-bottom-zero video-card-genre">
            Comedy <BsDot /> 380K views <BsDot /> 1 year ago
          </p>
        </div>
      </div>
    </div>
  );
};
