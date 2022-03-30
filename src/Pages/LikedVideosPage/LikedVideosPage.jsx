import React from "react";
import { Sidebar, WatchLaterCard } from "../../Components/Index";

import "../WatchLaterPage/WatchLaterPage.css";
import "../../Components/VideoListingCard/VideoListingCard.css";
import { useMainContext } from "../../Context/Index";
export const LikedVideosPage = () => {
  const { state } = useMainContext();

  return (
    <div>
      <Sidebar />
      <div className="watch-later-page">
        <h2>Liked Videos</h2>
        <WatchLaterCard videoList={state.likedVideos} title={"LIKED_VIDEOS"} />
      </div>
    </div>
  );
};
