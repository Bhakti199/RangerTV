import React from "react";
import { Sidebar, VideoListingCard } from "../../Components/Index";
import { BsSearch } from "react-icons/bs";

import "./VideoListingPage.css";
export const VideoListingPage = () => {
  return (
    <>
      <Sidebar className="sidebar-display" />
      <div className="video-listing-page">
        <div className="flex-row">
          <div className="search-input-container-two ">
            <div className="search flex-row-only">
              <BsSearch className="search-icon " />
              <input
                className="search-input"
                type="text"
                placeholder="Explore..."
              />
            </div>
          </div>
        </div>
        <div className="flex category-chips-container">
          <div className="category-chips">All</div>
          <div className="category-chips">Comedy</div>
          <div className="category-chips">Action</div>
          <div className="category-chips">Horror</div>
          <div className="category-chips">Thriller</div>
        </div>

        <VideoListingCard />
      </div>
    </>
  );
};
