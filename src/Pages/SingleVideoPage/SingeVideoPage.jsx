import React from "react";
import { useState } from "react";
import "./SingleVideoPage.css";
import { FaShare } from "react-icons/fa";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import {
  BsDot,
  BsFillBookmarkDashFill,
  BsFillBookmarkFill,
  BsCollectionPlayFill,
} from "react-icons/bs";
import { useParams } from "react-router-dom";
import { useMainContext } from "../../Context/Index";
import { Sidebar, VideoCard, Modal } from "../../Components/Index";
export const SingeVideoPage = () => {
  const [singlePageModal, setSinglePageModal] = useState(false);
  const videoId = useParams();
  const { state, searchInput } = useMainContext();
  let video = state.videoList.find((item) => item._id === videoId.videoId);

  return (
    <>
      <div className="single-video-page flex">
        <div className="video-iframe flex">
          <iframe
            src={`https://www.youtube.com/embed/${videoId.videoId}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="singlepage-video-title">{video?.title}</div>
          <div className="singlepage-video-section-two flex">
            <div>
              <p className=" flex margin-top-bottom-zero singlepage-video-card-genre">
                {video?.categoryName} <BsDot /> {video?.views} <BsDot />
                {video?.date}
              </p>
            </div>

            <div className="video-iframe-icons-container flex">
              <span className="video-iframe-icons flex">
                {state.likedVideos &&
                state.likedVideos.length > 0 &&
                state.likedVideos.some(
                  (element) => element._id === video?._id
                ) ? (
                  <AiFillLike size={30} color="var(--green-color)" />
                ) : (
                  <AiOutlineLike size={30} color="var(--green-color)" />
                )}
              </span>
              <span className="video-iframe-icons flex">
                {state.likedVideos &&
                state.likedVideos.length > 0 &&
                state.watchLater.some(
                  (element) => element._id === video?._id
                ) ? (
                  <BsFillBookmarkDashFill
                    size={23}
                    color="var(--green-color)"
                  />
                ) : (
                  <BsFillBookmarkFill size={23} color="var(--green-color)" />
                )}
              </span>
              <span className="video-iframe-icons flex">
                <BsCollectionPlayFill
                  size={23}
                  color="var(--green-color)"
                  onClick={() => setSinglePageModal(true)}
                />
              </span>
              <span className="video-iframe-icons flex">
                <FaShare size={25} color="var(--green-color)" />
              </span>

              {singlePageModal && (
                <Modal
                  setOpenModal={setSinglePageModal}
                  item={state.videoList.find(
                    (item) => item._id === videoId.videoId
                  )}
                />
              )}
            </div>
          </div>
        </div>
        <div className="single-video-page-videoList flex">
          {searchInput === ""
            ? state.videoList.map((item) => (
                <VideoCard item={item} key={item.id} />
              ))
            : state.videoList
                .filter((item) =>
                  item.title.toLowerCase().includes(searchInput.toLowerCase())
                )
                .map((item) => <VideoCard item={item} key={item.id} />)}
        </div>
      </div>
    </>
  );
};
