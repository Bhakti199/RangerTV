import React from "react";
import { BsDot, BsThreeDotsVertical } from "react-icons/bs";
import { MdAddCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import "../../Components/VideoListingCard/VideoListingCard.css";
import { useState } from "react";
export const VideoCard = ({ item }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <div className="flex-row" key={item.id}>
        <div className="video-card flex">
          <Link to={`/video-listing-page/${item._id}`}>
            <img src={item.img} className="video-img responsive-img"></img>
          </Link>
          <div className="video-card-text-container">
            <p className="flex-row-only video-title-container">
              <span className="video-title link">{item.title}</span>
              <span>
                <BsThreeDotsVertical
                  className="video-card-icon"
                  onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                />
              </span>
              {isDrawerOpen && (
                <div className="card-drawer-section flex">
                  <div className="card-drawer-item margin-top-bottom-zero flex">
                    <MdAddCircle />
                    Watch later
                  </div>
                  <div className="card-drawer-item margin-top-bottom-zero flex">
                    <MdAddCircle />
                    Liked videos
                  </div>
                  <div className="card-drawer-item margin-top-bottom-zero flex">
                    <MdAddCircle />
                    Playlist
                  </div>
                </div>
              )}
            </p>
            <p className="margin-top-bottom-zero">{item.owner}</p>
            <p className=" flex margin-top-bottom-zero video-card-genre">
              {item.categoryName} <BsDot /> {item.views} <BsDot /> {item.date}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
