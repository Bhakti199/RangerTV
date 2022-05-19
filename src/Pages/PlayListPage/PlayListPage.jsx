import React from "react";
import { WatchLaterCard } from "../../Components/Index";
import { useAuth } from "../../Context/Index";
import { NewPlayListDisplay } from "./NewPlayListDisplay";
import { VscTrash } from "react-icons/vsc";
import "./PlayListPage.css";
export const PlayListPage = () => {
  const { userInfo, deletePlaylist } = useAuth();
  const { likes, watchlater, playlists } = userInfo;

  return (
    <div className="playlist-page">
      <div className=" playlist-option-container">
        {playlists && playlists.length === 0 ? (
          <div className="empty-playlist-page-text">
            There is nothing in playlists, explore shows to add playlists.
          </div>
        ) : (
          playlists.map((playlist) => (
            <div key={playlist._id}>
              <h2 className="green playlist-title">
                <span>{playlist.title} </span>
                <span onClick={() => deletePlaylist(playlist._id)}>
                  <VscTrash color="var(--light-green)" size={27} />
                </span>
              </h2>
              <div className="flex playlist-row">
                <NewPlayListDisplay
                  playlist={playlist.videos}
                  title={playlist.title}
                  playlistId={playlist._id}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
