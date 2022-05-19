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
export const HamburgurMenuList = ({ setIsOpen }) => {
  return (
    <div>
      <ul className="hamburgur-menu">
        <Link
          to="/"
          className="hamburgur-menu-item flex-row-only"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <HiHome />
          HOME
        </Link>
        <Link
          to="/login"
          className="hamburgur-menu-item flex-row-only"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <FaUserAlt />
          LOGIN
        </Link>

        <Link
          to="/video-listing-page"
          className="hamburgur-menu-item flex-row-only link link-color"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <MdVideoLibrary />
          EXPLORE SHOWS
        </Link>
        <Link
          to="/playlists"
          className="hamburgur-menu-item flex-row-only link link-color"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <RiPlayList2Fill />
          PLAYLIST
        </Link>
        <Link
          to="/watch-later"
          className="hamburgur-menu-item flex-row-only link link-color"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <BsFillBookmarkFill />
          WATCH LATER
        </Link>
        <Link
          to="/liked-videos"
          className="hamburgur-menu-item flex-row-only link link-color"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <AiFillLike />
          LIKED VIDEOS
        </Link>
      </ul>
    </div>
  );
};
