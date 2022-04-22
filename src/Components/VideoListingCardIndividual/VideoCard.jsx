import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import "../../Components/VideoListingCard/VideoListingCard.css";
import { useMainContext, useAuth } from "../../Context/Index";
import { Modal } from "../../Components/Index";
import { BsDot, BsThreeDotsVertical } from "react-icons/bs";
import { MdAddCircle } from "react-icons/md";
import { AiFillCheckCircle, AiFillFolderAdd } from "react-icons/ai";

export const VideoCard = ({ item }) => {
  const { state, dispatch } = useMainContext();
  const {
    addToLikeVideos,
    deleteFromLikeVideos,
    addToWatchLater,
    deleteFromWatchLater,
    addToHistoryVideos,
    deleteFromHistoryVideos,
  } = useAuth();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const videoCardDispatchHandler = (type, value) => {
    switch (type) {
      case "REMOVE_FROM_WATCH_LATER":
        dispatch({
          type: "REMOVE_FROM_WATCH_LATER",
          payload: value,
        });
        break;

      case "ADD_TO_WATCH_LATER":
        dispatch({
          type: "ADD_TO_WATCH_LATER",
          payload: value,
        });
        break;

      case "REMOVE_FROM_LIKED_VIDEOS":
        dispatch({
          type: "REMOVE_FROM_LIKED_VIDEOS",
          payload: value,
        });
        break;

      case "ADD_TO_LIKED_VIDEOS":
        dispatch({
          type: "ADD_TO_LIKED_VIDEOS",
          payload: value,
        });
        break;
      case "ADD_TO_PLAYLIST":
        dispatch({
          type: "ADD_TO_PLAYLIST",
          payload: value,
        });
        break;
      default:
        break;
    }
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <>
      <div className="flex-row" key={item.id}>
        <div className="video-card-listing-page  flex">
          <Link
            className="video-img-listing-page"
            to={`/video-listing-page/${item._id}`}
            onClick={() => {
              addToHistoryVideos(item);
              videoCardDispatchHandler("ADD_TO_HISTORY", item);
            }}
          >
            <img
              src={item.img}
              className="video-card-img-radius responsive-img"
            ></img>
          </Link>
          <div className="video-card-text-container">
            <div className="flex-row-only video-title-container">
              <span className="video-title link">{item.title}</span>
              <span>
                <BsThreeDotsVertical
                  size={22}
                  color="var(--white-color)"
                  onClick={() => {
                    setIsDrawerOpen(!isDrawerOpen);
                  }}
                />
              </span>
              {isDrawerOpen && (
                <div className="card-drawer-section flex">
                  <div className="card-drawer-item margin-top-bottom-zero flex">
                    {state.watchLater.some(
                      (video) => video._id === item._id
                    ) ? (
                      <span
                        className="card-drawer-item-display"
                        onClick={() => {
                          deleteFromWatchLater(item._id);
                          videoCardDispatchHandler(
                            "REMOVE_FROM_WATCH_LATER",
                            item
                          ),
                            toast("Removed from watch later.", { icon: "❌" });
                        }}
                      >
                        <AiFillCheckCircle />
                        Remove from watch later
                      </span>
                    ) : (
                      <span
                        onClick={() => {
                          addToWatchLater(item);
                          videoCardDispatchHandler("ADD_TO_WATCH_LATER", item),
                            toast("Added to watch later.", { icon: "✔️" });
                        }}
                      >
                        <MdAddCircle />
                        Watch later
                      </span>
                    )}
                  </div>
                  <div className="card-drawer-item margin-top-bottom-zero flex">
                    {state.likedVideos.some(
                      (video) => video._id === item._id
                    ) ? (
                      <span
                        onClick={() => {
                          deleteFromLikeVideos(item._id),
                            videoCardDispatchHandler(
                              "REMOVE_FROM_LIKED_VIDEOS",
                              item
                            ),
                            toast("Removed from liked videos.", { icon: "❌" });
                        }}
                      >
                        <AiFillCheckCircle />
                        Dislike video
                      </span>
                    ) : (
                      <span
                        onClick={() => {
                          addToLikeVideos(item);

                          videoCardDispatchHandler("ADD_TO_LIKED_VIDEOS", item),
                            toast("Added to watch later", { icon: "✔️" });
                        }}
                      >
                        <MdAddCircle />
                        Like videos
                      </span>
                    )}
                  </div>
                  <div className="card-drawer-item margin-top-bottom-zero flex">
                    <MdAddCircle />
                    <span
                      onClick={() => {
                        setOpenModal(true), setIsDrawerOpen(false);
                      }}
                    >
                      Add to playlist
                    </span>
                  </div>
                </div>
              )}
              {openModal && <Modal setOpenModal={setOpenModal} item={item} />}
            </div>
            <p className="margin-top-bottom-zero video-card-video-owner">
              {item.owner}
            </p>
            <p className=" flex margin-top-bottom-zero video-card-genre">
              {item.categoryName} <BsDot /> {item.views} <BsDot /> {item.date}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
