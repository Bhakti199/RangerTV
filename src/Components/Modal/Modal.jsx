import React from "react";
import { useState } from "react";
import { MdAddCircle } from "react-icons/md";
import { AiFillCheckCircle, AiFillFolderAdd } from "react-icons/ai";
import { useAuth } from "../../Context/Index";
import "./Modal.css";
export const Modal = ({ setOpenModal, item }) => {
  const { addPlaylist, addVideoToPlaylist, userInfo, deleteVideoFromPlaylist } =
    useAuth();
  const [playlistInput, setPlaylistInput] = useState("");
  const { playlists } = userInfo;
  return (
    <>
      <div
        className="modal-container flex-row"
        onClick={() => {
          setOpenModal(false);
        }}
      ></div>
      <div className="modal">
        <div className="flex-row-only">
          <input
            placeholder="New playlist.."
            className="playlist-input"
            onChange={(e) => setPlaylistInput(e.target.value)}
          />
          <span
            className="pointer"
            onClick={() => {
              addPlaylist(playlistInput, item);
              setOpenModal(false);
            }}
          >
            <MdAddCircle size="25" />
          </span>
        </div>
        <div className="playlist-container">
          {playlists &&
            playlists.length > 0 &&
            playlists.map((playlist, index) =>
              playlist.videos.some((video) => video._id === item._id) ? (
                <div
                  key={index}
                  className="card-drawer-item margin-top-bottom-zero flex pointer"
                  onClick={() => {
                    deleteVideoFromPlaylist(playlist._id, item._id);
                    setOpenModal(false);
                  }}
                >
                  <AiFillCheckCircle />
                  Remove from {playlist.title}
                </div>
              ) : (
                <div
                  key={index}
                  className="card-drawer-item margin-top-bottom-zero flex pointer"
                  onClick={() => {
                    addVideoToPlaylist(playlist._id, item);
                    setOpenModal(false);
                  }}
                >
                  <AiFillFolderAdd />
                  Add to {playlist.title}
                </div>
              )
            )}
        </div>
      </div>
    </>
  );
};
