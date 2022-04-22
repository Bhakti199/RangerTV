import React from "react";
import { Sidebar, WatchLaterCard } from "../../Components/Index";
import { useMainContext, useAuth } from "../../Context/Index";
import { NewPlayListDisplay } from "./NewPlayListDisplay";
import "./PlayListPage.css";
export const PlayListPage = () => {
  const { state } = useMainContext();
  const { userInfo } = useAuth();
  const { likes, watchlater } = userInfo;
  return (
    <div className="playlist-page">
      <div>
        <h2 className="green">Watch Later</h2>
        <div className="flex playlist-row">
          {watchlater && watchlater.length === 0 ? (
            <p className="margin-top-bottom-zero light-green">0 videos</p>
          ) : (
            <WatchLaterCard videoList={watchlater} title={"WATCH_LATER"} />
          )}
        </div>
      </div>
      <div>
        <h2 className="green">Liked Videos</h2>
        <div className="flex playlist-row">
          {likes && likes.length === 0 ? (
            <p className="margin-top-bottom-zero light-green">0 videos</p>
          ) : (
            <WatchLaterCard videoList={likes} title={"LIKED_VIDEOS"} />
          )}
        </div>
      </div>

      <div className=" playlist-option-container">
        {state.playList &&
          state.playList.map((playList) => (
            <div>
              <h2 className="black">{playList.title}</h2>
              <div className="flex playlist-row">
                <NewPlayListDisplay
                  videoList={playList.videoList}
                  title={playList.title}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
