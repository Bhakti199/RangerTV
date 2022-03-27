import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { RiPlayList2Fill } from "react-icons/ri";
import { HiHome } from "react-icons/hi";
import { BsFillBookmarkFill, BsMusicNoteBeamed } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
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

        <li className="sidebar-item flex-col">
          <RiPlayList2Fill className="sidebar-icon" />
          <span className="sidebar-item-text">PlayList</span>
        </li>
        <Link to="/video-listing-page" className="link link-color">
          <li className="sidebar-item flex-col">
            <BsMusicNoteBeamed className="sidebar-icon" />
            <span className="sidebar-item-text">Explore</span>
          </li>
        </Link>

        <li className="sidebar-item flex-col">
          <BsFillBookmarkFill className="sidebar-icon" />
          <span className="sidebar-item-text">Watch Later</span>
        </li>
        <li className="sidebar-item flex-col">
          <AiFillLike className="sidebar-icon" />
          <span className="sidebar-item-text">Liked videos</span>
        </li>
      </ul>
    </aside>
  );
};
