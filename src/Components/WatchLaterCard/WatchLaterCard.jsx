import React from "react";
import { BsDot, BsX } from "react-icons/bs";
import "../../Pages/WatchLaterPage/WatchLaterPage.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/Index";
export const WatchLaterCard = ({ videoList, title }) => {
  const { deleteVideoFromPlaylist } = useAuth();
  return (
    <>
      {videoList.length > 0 &&
        videoList.map((video) => (
          <div className="watch-later-card">
            <Link to={`/video-listing-page/${video._id}`}>
              <img
                src={video.img}
                className="responsive-img watch-later-card-img"
              ></img>
            </Link>
            <div className="watch-list-card-text">
              <p className="margin-top-bottom-zero watch-later-text link">
                {video.title}
              </p>
              <p className="margin-top-bottom-zero watch-later-text">
                {video.owner}
              </p>
              <p className="flex margin-top-bottom-zero watch-later-text">
                {video.categoryName} <BsDot /> {video.views} <BsDot />
                {video.date}
              </p>
            </div>
            <button className="watch-later-cancel-button">
              <BsX onClick={() => deleteVideoFromPlaylist(video._id, title)} />
            </button>
          </div>
        ))}
    </>
  );
};
