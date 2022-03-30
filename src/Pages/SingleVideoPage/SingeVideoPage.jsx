import React from "react";
import "./SingleVideoPage.css";
import { RiPlayList2Fill } from "react-icons/ri";
import { FaShare } from "react-icons/fa";
import { IoMdBookmark } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { useMainContext } from "../../Context/Index";
import { Sidebar } from "../../Components/Index";
export const SingeVideoPage = () => {
  const videoId = useParams();
  const { videos, state } = useMainContext();
  let video = videos.find((item) => item._id === videoId.videoId);
  state.historyList =
    state.historyList.length === 0
      ? [video]
      : state.historyList.some((item) => item._id === video._id)
      ? state.historyList
      : [...state.historyList, video];
  return (
    <>
      <div className="single-video-page flex">
        <div className="video-iframe flex">
          <iframe
            src={`https://www.youtube.com/embed/${videoId.videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="singlepage-video-section-two">
            <p className="singlepage-video-title">{video?.title}</p>
            <p className="margin-top-bottom-zero singlepage-video-owner">
              {video?.owner}
            </p>
            <p className=" flex margin-top-bottom-zero singlepage-video-card-genre">
              {video?.categoryName} <BsDot /> {video?.views} <BsDot />
              {video?.date}
            </p>
            <div className="video-iframe-icons-container flex">
              <span className="video-iframe-icons flex">
                <AiFillLike />
                <span className="singlepage-video-icon-text">Like</span>
              </span>
              <span className="video-iframe-icons flex">
                <IoMdBookmark />
                <span className="singlepage-video-icon-text">Watch Later</span>
              </span>
              <span className="video-iframe-icons flex">
                <RiPlayList2Fill />
                <span className="singlepage-video-icon-text">PlayList</span>
              </span>
              <span className="video-iframe-icons flex">
                <FaShare />
                <span className="singlepage-video-icon-text">Share</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Sidebar />
    </>
  );
};
