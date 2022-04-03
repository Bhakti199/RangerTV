import React from "react";
import { useState } from "react";
import { MdAddCircle } from "react-icons/md";
import { AiFillCheckCircle, AiFillFolderAdd } from "react-icons/ai";
import { useMainContext } from "../../Context/Index";
import "./Modal.css";
export const Modal = ({ setOpenModal, item }) => {
  console.log("from modal video", item);
  const { state, dispatch } = useMainContext();
  const [playlistInput, setPlaylistInput] = useState("");
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
            onClick={() => {
              dispatch({
                type: "ADD_TO_PLAYLIST",
                payload: {
                  title: playlistInput,
                  video: item,
                },
              });
              setOpenModal(false);
            }}
          >
            <MdAddCircle size="25" />
          </span>
        </div>
        <div className="playlist-container">
          {state.playList.map((element, index) =>
            element.videoList.some((video) => video._id === item._id) ? (
              <div
                key={index}
                className="card-drawer-item margin-top-bottom-zero flex"
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_PLAYLIST",
                    payload: {
                      title: element.title,
                      video: item,
                    },
                  });
                  setOpenModal(false);
                }}
              >
                <AiFillCheckCircle />
                Remove from {element.title}
              </div>
            ) : (
              <div
                key={index}
                className="card-drawer-item margin-top-bottom-zero flex"
                onClick={() => {
                  dispatch({
                    type: "ADD_TO_PLAYLIST",
                    payload: {
                      title: element.title,
                      video: item,
                    },
                  });
                  setOpenModal(false);
                }}
              >
                <AiFillFolderAdd />
                Add to {element.title}
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};
