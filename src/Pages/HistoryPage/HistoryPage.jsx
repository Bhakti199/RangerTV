import React from "react";
import { HistoryVideoCard, WatchLaterCard } from "../../Components/Index";
import "../WatchLaterPage/WatchLaterPage.css";
import "../../Components/VideoListingCard/VideoListingCard.css";
import { useAuth } from "../../Context/Index";
export const HistoryPage = () => {
  const { userInfo } = useAuth();
  const { history } = userInfo;
  return (
    <div>
      <div className="watch-later-page">
        <h2 className="green">History</h2>
        <div className="watch-later-container">
          <WatchLaterCard videoList={history} title={"HISTORY_VIDEOS"} />
        </div>
      </div>
    </div>
  );
};
