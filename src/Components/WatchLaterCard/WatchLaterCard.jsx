import React from "react";
import { BsDot, BsX } from "react-icons/bs";
import "../../Pages/WatchLaterPage/WatchLaterPage.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/Index";
export const WatchLaterCard = ({ videoList, title }) => {
  const { deleteVideoCategory } = useAuth();

  return (
    <>
      {videoList && videoList.length > 0 ? (
        videoList.map((video) => (
          <div className="watch-later-card" key={video._id}>
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
              <BsX onClick={() => deleteVideoCategory(video._id, title)} />
            </button>
          </div>
        ))
      ) : (
        <div className="empty-watchlater-text">
          {(title === "LIKED_VIDEOS" || title === "WATCH_LATER") &&
            `There is nothing in ${
              title === "LIKED_VIDEOS" ? "liked videos" : "watchlater"
            }, Explore shows to add into ${
              title === "LIKED_VIDEOS" ? "liked videos" : "watchlater"
            }.`}
          {title === "HISTORY_VIDEOS" && (
            <div className="empty-watchlater-text">Nothing in History</div>
          )}
        </div>
      )}
    </>
  );
};
