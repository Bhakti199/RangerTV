import React from "react";
import { BsDot } from "react-icons/bs";
import { MdOutlineCancelPresentation } from "react-icons/md";
import "../../Pages/WatchLaterPage/WatchLaterPage.css";
import { Link } from "react-router-dom";
import { useMainContext } from "../../Context/Index";

export const NewPlayListDisplay = ({ title, videoList }) => {
  const { dispatch } = useMainContext();
  return (
    <>
      {videoList.length > 0 &&
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
            <span className="watch-later-cancel-button">
              <MdOutlineCancelPresentation
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_PLAYLIST",
                    payload: { title, video },
                  })
                }
              />
            </span>
          </div>
        ))}
    </>
  );
};
