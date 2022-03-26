import React from "react";
import "./VideoListingCard.css";

import { useMainContext } from "../../Context/Index";

import { VideoCard } from "../VideoListingCardIndividual/VideoCard";
export const VideoListingCard = () => {
  const { videos } = useMainContext();
  return (
    <div className="card-display-grid">
      {videos.map((item) => (
        <VideoCard item={item} key={item.id} />
      ))}
    </div>
  );
};
