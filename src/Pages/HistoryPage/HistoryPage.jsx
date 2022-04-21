import React from "react";
import { Sidebar, WatchLaterCard } from "../../Components/Index";

import "../WatchLaterPage/WatchLaterPage.css";
import "../../Components/VideoListingCard/VideoListingCard.css";
import { useMainContext } from "../../Context/Index";
export const HistoryPage = () => {
  const { state } = useMainContext();

  return (
    <div>
      <div className="watch-later-page">
        <h2 className="green">History</h2>
        <div className="watch-later-container">
          <WatchLaterCard videoList={state.historyList} title={"HISTORY"} />
        </div>
      </div>
    </div>
  );
};
