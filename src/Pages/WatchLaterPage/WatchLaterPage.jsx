import React from "react";
import { Sidebar, WatchLaterCard } from "../../Components/Index";

import "./WatchLaterPage.css";
import "../../Components/VideoListingCard/VideoListingCard.css";
import { useMainContext } from "../../Context/Index";
export const WatchLaterPage = () => {
  const { state } = useMainContext();

  return (
    <div>
      <Sidebar />

      <div className="watch-later-page">
        <h2 className="black">Watch Later</h2>
        <div className="watch-later-container">
          <WatchLaterCard videoList={state.watchLater} title={"WATCH_LATER"} />
        </div>
      </div>
    </div>
  );
};
