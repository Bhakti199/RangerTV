import React from "react";
import { Sidebar, WatchLaterCard } from "../../Components/Index";
import { useMainContext } from "../../Context/Index";
import { NewPlayListDisplay } from "./NewPlayListDisplay";
import "./PlayListPage.css";
export const PlayListPage = () => {
  const { state } = useMainContext();
  return (
    <div className="playlist-page">
      <Sidebar />
      <div>
        <h2>Watch Later</h2>
        <div className="flex playlist-row">
          {state.watchLater && state.watchLater.length === 0 ? (
            <p className="margin-top-bottom-zero">0 videos</p>
          ) : (
            <WatchLaterCard
              videoList={state.watchLater}
              title={"WATCH_LATER"}
            />
          )}
        </div>
      </div>
      <div>
        <h2>Liked Videos</h2>
        <div className="flex playlist-row">
          {state.likedVideos && state.likedVideos.length === 0 ? (
            <p className="margin-top-bottom-zero">0 videos</p>
          ) : (
            <WatchLaterCard
              videoList={state.likedVideos}
              title={"LIKED_VIDEOS"}
            />
          )}
        </div>
      </div>

      <div className=" playlist-option-container">
        {state.playList &&
          state.playList.map((playList) => (
            <div>
              <h2>{playList.title}</h2>
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
