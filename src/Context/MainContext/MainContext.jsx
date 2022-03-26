import axios from "axios";
import React from "react";
import { useContext, createContext, useState, useEffect } from "react";

const MainContext = createContext([]);

const MainContextProvider = ({ children }) => {
  const [category, setCategory] = useState([]);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { categories },
        } = await axios.get("/api/categories");
        setCategory(categories);
      } catch {
        console.error("Error while fetching categories");
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { videos },
        } = await axios.get("/api/videos");
        setVideos(videos);
      } catch {
        console.error("Error while fetching data");
      }
    })();
  }, []);
  return (
    <MainContext.Provider value={{ category, videos }}>
      {children}
    </MainContext.Provider>
  );
};

const useMainContext = () => useContext(MainContext);

export { useMainContext, MainContextProvider };
