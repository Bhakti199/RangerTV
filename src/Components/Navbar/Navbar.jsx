import { React, useState } from "react";
import "./Navbar.css";
import { FiMenu } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { HamburgurMenuList } from "../Index";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="nav">
        <div className="flex-row nav-name">
          {isOpen ? (
            <MdCancel
              className="hamburgur-icon"
              onClick={() => setIsOpen((prevStatus) => !prevStatus)}
            />
          ) : (
            <FiMenu
              className="hamburgur-icon"
              onClick={() => setIsOpen((prevStatus) => !prevStatus)}
            />
          )}

          <img src="./assets/RangerTV.jpg" alt="" className="nav-logo" />
          <h1 className="nav-name-text">RangerTV</h1>
        </div>

        <div className="search-input-container ">
          <div className="search flex-row-only">
            <BsSearch className="search-icon " />
            <input
              className="search-input"
              type="text"
              placeholder="Explore..."
            />
          </div>
        </div>
        <div className="flex-col login-nav">
          <FaUserAlt className="profile-icon " />
          <p className="margin-top-bottom-zero">Login</p>
        </div>
        {isOpen && <HamburgurMenuList />}
      </div>
    </>
  );
};
