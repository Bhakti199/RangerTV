import { React, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { HamburgurMenuList } from "../Index";
import { useMainContext } from "../../Context/Index";
import { useLocation } from "react-router-dom";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setSearchInput } = useMainContext();
  const location = useLocation();
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

          <div className="navbar-title">RangerTV</div>
        </div>

        {location.pathname === "/video-listing-page" && (
          <div className="search-input-container ">
            <div className="search flex-row-only">
              <BsSearch size={27} color="var(--green-color)" />
              <input
                className="search-input"
                type="text"
                placeholder="Explore..."
                onChange={(event) => setSearchInput(event.target.value)}
              />
            </div>
          </div>
        )}

        <Link to="/login" className="flex-col login-nav">
          <FaUserAlt size={27} color="var(--green-color)" />
        </Link>
        {isOpen && (
          <HamburgurMenuList
            className="hamburgur-display"
            setIsOpen={setIsOpen}
          />
        )}
      </div>
    </>
  );
};
