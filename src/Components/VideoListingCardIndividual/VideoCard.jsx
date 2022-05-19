import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Components/VideoListingCard/VideoListingCard.css";
import { useAuth } from "../../Context/Index";
import { Modal } from "../../Components/Index";
import { BsDot, BsThreeDotsVertical } from "react-icons/bs";
import { MdAddCircle } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";

export const VideoCard = ({ item }) => {
  const {
    addToLikeVideos,
    deleteFromLikeVideos,
    addToWatchLater,
    deleteFromWatchLater,
    addToHistoryVideos,
    userInfo,
  } = useAuth();
  const { watchlater, likes } = userInfo;

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="flex-row" key={item.id}>
        <div className="video-card-listing-page  flex">
          <Link
            className="video-img-listing-page"
            to={`/video-listing-page/${item._id}`}
            onClick={() => addToHistoryVideos(item)}
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
                    {watchlater &&
                    watchlater.length > 0 &&
                    watchlater.some((video) => video._id === item._id) ? (
                      <span
                        className="card-drawer-item-display pointer"
                        onClick={() => deleteFromWatchLater(item._id)}
                      >
                        <AiFillCheckCircle />
                        Remove from watch later
                      </span>
                    ) : (
                      <span
                        className="card-drawer-item-display pointer"
                        onClick={() => addToWatchLater(item)}
                      >
                        <MdAddCircle />
                        Watch later
                      </span>
                    )}
                  </div>
                  <div className="card-drawer-item margin-top-bottom-zero flex">
                    {likes &&
                    likes.length > 0 &&
                    likes.some((video) => video._id === item._id) ? (
                      <span
                        className="card-drawer-item-display pointer"
                        onClick={() => deleteFromLikeVideos(item._id)}
                      >
                        <AiFillCheckCircle />
                        Dislike video
                      </span>
                    ) : (
                      <span
                        className="card-drawer-item-display pointer"
                        onClick={() => addToLikeVideos(item)}
                      >
                        <MdAddCircle />
                        Like videos
                      </span>
                    )}
                  </div>
                  <div className="card-drawer-item margin-top-bottom-zero flex">
                    <MdAddCircle />
                    <span
                      className="card-drawer-item-display pointer"
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
