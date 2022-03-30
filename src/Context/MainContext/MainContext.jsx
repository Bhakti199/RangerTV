import axios from "axios";
import React from "react";
import {
  useContext,
  createContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import { sidebarManagement } from "./SidebarManagementReducer";
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

  const initialValueSidebar = {
    watchLater: [],
    playList: [],
    likedVideos: [],
    historyList: [],
  };
  const [state, dispatch] = useReducer(sidebarManagement, initialValueSidebar);
  console.log(state);
  return (
    <MainContext.Provider value={{ category, videos, state, dispatch }}>
      {children}
    </MainContext.Provider>
  );
};

const useMainContext = () => useContext(MainContext);

export { useMainContext, MainContextProvider };
