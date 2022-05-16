import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
export const HomePage = () => {
  return (
    <>
      <div className="home-page">
        <Link to="/video-listing-page">
          <video autoPlay loop muted className="landing-video">
            <source
              src="https://res.cloudinary.com/bhakti1801/video/upload/v1652724364/Black_And_Blue_Neon_Gradient_Welcome_to_My_Channel_Youtube_Intro_Video_b5lkyg.mp4"
              type="video/mp4"
            />
          </video>
        </Link>
      </div>
    </>
  );
};
