import React from "react";
import "./HamburgurMenu.css";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";
import { MdVideoLibrary, MdOutlinePlaylistPlay } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { IoIosInformationCircle } from "react-icons/io";
import { RiPlayList2Fill } from "react-icons/ri";
import { BsFillBookmarkFill } from "react-icons/bs";
export const HamburgurMenuList = () => {
  return (
    <div>
      <ul className="hamburgur-menu">
        <Link to="/" className="hamburgur-menu-item flex-row-only">
          <HiHome />
          Home
        </Link>
        <Link to="/" className="hamburgur-menu-item flex-row-only">
          <FaUserAlt />
          Login/SignUp
        </Link>

        <Link
          to="/video-listing-page"
          className="hamburgur-menu-item flex-row-only link link-color"
        >
          <MdVideoLibrary />
          Explore shows
        </Link>
        <Link
          to="/"
          className="hamburgur-menu-item flex-row-only link link-color"
        >
          <RiPlayList2Fill />
          PlayList
        </Link>
        <Link
          to="/watch-later"
          className="hamburgur-menu-item flex-row-only link link-color"
        >
          <BsFillBookmarkFill />
          Watch Later
        </Link>
        <Link
          to="/liked-videos"
          className="hamburgur-menu-item flex-row-only link link-color"
        >
          <AiFillLike />
          Liked videos
        </Link>
        <Link
          to="/"
          className="hamburgur-menu-item flex-row-only link link-color"
        >
          <IoIosInformationCircle />
          About us
        </Link>
      </ul>
    </div>
  );
};
