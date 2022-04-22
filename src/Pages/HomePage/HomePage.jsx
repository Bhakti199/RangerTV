import React from "react";
import { Sidebar } from "../../Components/Index";
import { Link } from "react-router-dom";
import "./HomePage.css";
import { useMainContext } from "../../Context/Index";

export const HomePage = () => {
  const { state, dispatch } = useMainContext();
  return (
    <>
      // This is rough css
      <div style={{ color: "white", marginTop: "8rem", marginLeft: "10rem" }}>
        This is home page.
      </div>
    </>
  );
};
