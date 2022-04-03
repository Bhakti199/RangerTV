import React from "react";
import { BsDot, BsThreeDotsVertical } from "react-icons/bs";
import { MdAddCircle } from "react-icons/md";
import { AiFillCheckCircle, AiFillFolderAdd } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../../Components/VideoListingCard/VideoListingCard.css";
import { useState } from "react";
import { useMainContext } from "../../Context/Index";
import { Modal } from "../../Components/Index";
export const VideoCard = ({ item }) => {
  const { state, dispatch } = useMainContext();
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

      case "REMOVE_FROM_PLAYLIST":
        dispatch({
          type: "REMOVE_FROM_PLAYLIST",
          payload: value,
        });
        break;
      case "ADD_TO_PLAYLIST":
        dispatch({
          type: "ADD_TO_PLAYLIST",
          payload: value,
        });
        break;
      case "ADD_TO_HISTORY":
        dispatch({
          type: "ADD_TO_HISTORY",
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
        <div className="video-card flex">
          <Link
            to={`/video-listing-page/${item._id}`}
            onClick={() => videoCardDispatchHandler("ADD_TO_HISTORY", item)}
          >
            <img src={item.img} className="video-img responsive-img"></img>
          </Link>
          <div className="video-card-text-container">
            <div className="flex-row-only video-title-container">
              <span className="video-title link">{item.title}</span>
              <span>
                <BsThreeDotsVertical
                  className="video-card-icon"
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
                        onClick={() =>
                          videoCardDispatchHandler(
                            "REMOVE_FROM_WATCH_LATER",
                            item
                          )
                        }
                      >
                        <AiFillCheckCircle />
                        Remove from watch later
                      </span>
                    ) : (
                      <span
                        onClick={() =>
                          videoCardDispatchHandler("ADD_TO_WATCH_LATER", item)
                        }
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
                        onClick={() =>
                          videoCardDispatchHandler(
                            "REMOVE_FROM_LIKED_VIDEOS",
                            item
                          )
                        }
                      >
                        <AiFillCheckCircle />
                        Dislike video
                      </span>
                    ) : (
                      <span
                        onClick={() =>
                          videoCardDispatchHandler("ADD_TO_LIKED_VIDEOS", item)
                        }
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
