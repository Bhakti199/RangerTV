import React from "react";
import { VideoListingCard } from "../../Components/Index";
import { BsSearch } from "react-icons/bs";
import "./VideoListingPage.css";
import { useMainContext } from "../../Context/Index";
export const VideoListingPage = () => {
  const { setSearchInput, state, dispatch } = useMainContext();
  return (
    <>
      <div className="video-listing-page">
        <div className="flex-row">
          <div className="search-input-container-two ">
            <div className="search flex-row-only">
              <BsSearch size={22} color="var(--green-color)" />
              <input
                className="search-input"
                type="text"
                placeholder="Explore..."
                onChange={(event) => setSearchInput(event.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex category-chips-container">
          <div
            className={`category-chips pointer ${
              state.currentCategory === "All" && "chip-default"
            }`}
            onClick={() =>
              dispatch({
                type: "SET_CURRENT_CATEGORY",
                payload: "All",
              })
            }
          >
            All
          </div>
          {state.categoryList.map((item) => (
            <div
              className={`category-chips pointer ${
                state.currentCategory === item.categoryName && "chip-default"
              }`}
              key={item._id}
              onClick={() => {
                dispatch({
                  type: "SET_CURRENT_CATEGORY",
                  payload: item.categoryName,
                });
              }}
            >
              {item.categoryName}
            </div>
          ))}
        </div>

        <VideoListingCard />
      </div>
    </>
  );
};
