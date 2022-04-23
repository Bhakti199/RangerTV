import React from "react";
import { Sidebar, WatchLaterCard } from "../../Components/Index";

import "../WatchLaterPage/WatchLaterPage.css";
import "../../Components/VideoListingCard/VideoListingCard.css";
import { useAuth } from "../../Context/Index";
export const LikedVideosPage = () => {
  const { userInfo } = useAuth();
  const { likes } = userInfo;
  return (
    <div>
      <div className="watch-later-page">
        <h2 className="green">Liked Videos</h2>
        <div className="watch-later-container">
          <WatchLaterCard videoList={likes} title={"LIKED_VIDEOS"} />
        </div>
      </div>
    </div>
  );
};
