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
  const [searchInput, setSearchInput] = useState("");
  const initialValueSidebar = {
    videoList: [],
    categoryList: [],
    currentCategory: "All",
    videoListByCategory: [],
  };

  const [state, dispatch] = useReducer(sidebarManagement, initialValueSidebar);
  console.log(state);
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { categories },
        } = await axios.get("/api/categories");
        setCategory(categories);
        dispatch({ type: "ASSIGN_CATEGORY", payload: categories });
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
        console.log(videos);
        setVideos(videos);
        dispatch({ type: "ASSIGN_VIDEOS", payload: videos });
      } catch {
        console.error("Error while fetching data");
      }
    })();
  }, []);

  return (
    <MainContext.Provider
      value={{
        category,
        videos,
        searchInput,
        setSearchInput,
        state,
        dispatch,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

const useMainContext = () => useContext(MainContext);

export { useMainContext, MainContextProvider };
