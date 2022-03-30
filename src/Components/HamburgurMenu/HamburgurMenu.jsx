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
          Home
        </Link>
        <Link
          to="/"
          className="hamburgur-menu-item flex-row-only"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <FaUserAlt />
          Login/SignUp
        </Link>

        <Link
          to="/video-listing-page"
          className="hamburgur-menu-item flex-row-only link link-color"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <MdVideoLibrary />
          Explore shows
        </Link>
        <Link
          to="/"
          className="hamburgur-menu-item flex-row-only link link-color"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <RiPlayList2Fill />
          PlayList
        </Link>
        <Link
          to="/watch-later"
          className="hamburgur-menu-item flex-row-only link link-color"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <BsFillBookmarkFill />
          Watch Later
        </Link>
        <Link
          to="/liked-videos"
          className="hamburgur-menu-item flex-row-only link link-color"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <AiFillLike />
          Liked videos
        </Link>
        <Link
          to="/"
          className="hamburgur-menu-item flex-row-only link link-color"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <IoIosInformationCircle />
          About us
        </Link>
      </ul>
    </div>
  );
};
