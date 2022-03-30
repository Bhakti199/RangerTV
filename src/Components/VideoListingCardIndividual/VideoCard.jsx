import React from "react";
import { BsDot, BsThreeDotsVertical } from "react-icons/bs";
import { MdAddCircle } from "react-icons/md";
import { AiFillCheckCircle, AiFillFolderAdd } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../../Components/VideoListingCard/VideoListingCard.css";
import { useState } from "react";
import { useMainContext } from "../../Context/Index";
export const VideoCard = ({ item }) => {
  const { state, dispatch } = useMainContext();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [newPlaylist, setNewPlaylist] = useState(false);
  const [playlistInput, setPlaylistInput] = useState("");
  return (
    <>
      <div className="flex-row" key={item.id}>
        <div className="video-card flex">
          <Link to={`/video-listing-page/${item._id}`}>
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
                    setNewPlaylist(false);
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
                          dispatch({
                            type: "REMOVE_FROM_WATCH_LATER",
                            payload: item,
                          }),
                            setIsDrawerOpen(!isDrawerOpen);
                        }}
                      >
                        <AiFillCheckCircle />
                        Remove from watch later
                      </span>
                    ) : (
                      <span
                        onClick={() => {
                          dispatch({
                            type: "ADD_TO_WATCH_LATER",
                            payload: item,
                          }),
                            setIsDrawerOpen(!isDrawerOpen);
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
                          dispatch({
                            type: "REMOVE_FROM_LIKED_VIDEOS",
                            payload: item,
                          }),
                            setIsDrawerOpen(!isDrawerOpen);
                        }}
                      >
                        <AiFillCheckCircle />
                        Dislike video
                      </span>
                    ) : (
                      <span
                        onClick={() => {
                          dispatch({
                            type: "ADD_TO_LIKED_VIDEOS",
                            payload: item,
                          }),
                            setIsDrawerOpen(!isDrawerOpen);
                        }}
                      >
                        <MdAddCircle />
                        Like videos
                      </span>
                    )}
                  </div>

                  {newPlaylist && (
                    <input
                      className="playlist-input"
                      onChange={(e) => setPlaylistInput(e.target.value)}
                    />
                  )}
                  <div
                    className="card-drawer-item margin-top-bottom-zero flex"
                    onClick={() => setNewPlaylist(!newPlaylist)}
                  >
                    <MdAddCircle />
                    {newPlaylist ? (
                      <span
                        onClick={() => {
                          dispatch({
                            type: "ADD_TO_PLAYLIST",
                            payload: { title: playlistInput, video: item },
                          });
                          setIsDrawerOpen(!isDrawerOpen);
                        }}
                      >
                        Add new playList
                      </span>
                    ) : (
                      <span>Playlist</span>
                    )}
                  </div>
                  <div className="playlist-container">
                    {state.playList.map((element, index) =>
                      element.videoList.some(
                        (video) => video._id === item._id
                      ) ? (
                        <div
                          key={index}
                          className="card-drawer-item margin-top-bottom-zero flex"
                          onClick={() => {
                            dispatch({
                              type: "REMOVE_FROM_PLAYLIST",
                              payload: { title: element.title, video: item },
                            });
                            setIsDrawerOpen(!isDrawerOpen);
                          }}
                        >
                          <AiFillCheckCircle />
                          Remove from {element.title}
                        </div>
                      ) : (
                        <div
                          key={index}
                          className="card-drawer-item margin-top-bottom-zero flex"
                          onClick={() => {
                            dispatch({
                              type: "ADD_TO_PLAYLIST",
                              payload: { title: element.title, video: item },
                            });
                            setIsDrawerOpen(!isDrawerOpen);
                          }}
                        >
                          <AiFillFolderAdd />
                          Add to {element.title}
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
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
