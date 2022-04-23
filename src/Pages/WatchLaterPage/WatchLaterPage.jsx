import React from "react";
import { WatchLaterCard } from "../../Components/Index";

import "./WatchLaterPage.css";
import "../../Components/VideoListingCard/VideoListingCard.css";
import { useAuth } from "../../Context/Index";
export const WatchLaterPage = () => {
  const { userInfo } = useAuth();
  const { watchlater } = userInfo;
  return (
    <div>
      <div className="watch-later-page">
        <h2 className="watch-later-title">Watch Later</h2>
        <div className="watch-later-container">
          <WatchLaterCard videoList={watchlater} title={"WATCH_LATER"} />
        </div>
      </div>
    </div>
  );
};
