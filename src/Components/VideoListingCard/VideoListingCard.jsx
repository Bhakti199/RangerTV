import React from "react";
import "./VideoListingCard.css";
import { useMainContext } from "../../Context/Index";
import { VideoCard } from "../VideoListingCardIndividual/VideoCard";
export const VideoListingCard = () => {
  const { state, searchInput } = useMainContext();
  return (
    <div className="card-display-grid">
      {searchInput === ""
        ? state.videoListByCategory.map((item) => (
            <VideoCard item={item} key={item.id} />
          ))
        : state.videoListByCategory
            .filter((item) =>
              item.title.toLowerCase().includes(searchInput.toLowerCase())
            )
            .map((item) => <VideoCard item={item} key={item.id} />)}
    </div>
  );
};
