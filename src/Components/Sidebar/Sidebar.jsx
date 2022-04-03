import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import {
  BsFillBookmarkFill,
  BsPlayBtnFill,
  BsCollectionPlayFill,
} from "react-icons/bs";
import { AiFillLike, AiOutlineHistory } from "react-icons/ai";
export const Sidebar = () => {
  return (
    <aside className="sidebar-container">
      <ul className="sidebar flex-col">
        <Link to="/" className="link link-color">
          <li className="sidebar-item flex-col">
            <HiHome className="sidebar-icon" />
            <span className="sidebar-item-text"> Home</span>
          </li>
        </Link>

        <Link to="/video-listing-page" className="link link-color">
          <li className="sidebar-item flex-col">
            <BsPlayBtnFill className="sidebar-icon" />
            <span className="sidebar-item-text">Explore</span>
          </li>
        </Link>
        <Link to="/playlists" className="link link-color">
          <li className="sidebar-item flex-col">
            <BsCollectionPlayFill className="sidebar-icon" />
            <span className="sidebar-item-text">PlayList</span>
          </li>
        </Link>
        <Link to="/watch-later" className="link link-color">
          <li className="sidebar-item flex-col">
            <BsFillBookmarkFill className="sidebar-icon" />
            <span className="sidebar-item-text">Watch Later</span>
          </li>
        </Link>
        <Link to="/liked-videos" className="link link-color">
          <li className="sidebar-item flex-col">
            <AiFillLike className="sidebar-icon" />
            <span className="sidebar-item-text">Liked videos</span>
          </li>
        </Link>
        <Link to="/history-videos" className="link link-color">
          <li className="sidebar-item flex-col">
            <AiOutlineHistory className="sidebar-icon" />
            <span className="sidebar-item-text">History</span>
          </li>
        </Link>
      </ul>
    </aside>
  );
};
