import { createContext, useContext, useState } from "react";
import {
  postLikeVideoCall,
  deleteLikeVideoCall,
  postWatchLaterVideoCall,
  deleteWatchLaterVideoCall,
  postHistoryVideoCall,
  deleteHistoryVideoCall,
} from "../../ApiCalls";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const deleteVideoCategory = (videoId, title) => {
    switch (title) {
      case "WATCH_LATER":
        deleteFromWatchLater(videoId);
        break;
      case "LIKED_VIDEOS":
        deleteFromLikeVideos(videoId);
        break;
      case "HISTORY_VIDEOS":
        deleteFromHistoryVideos(videoId);
        break;
    }
  };

  const checkStatusLikeVideos = (likes, status) => {
    if (status === 200 || status === 201)
      setUserInfo((prevUserInfo) => ({ ...prevUserInfo, likes }));
  };

  const addToLikeVideos = async (video) => {
    const { likes, status } = await postLikeVideoCall(video);
    checkStatusLikeVideos(likes, status);
  };

  const deleteFromLikeVideos = async (videoId) => {
    const { likes, status } = await deleteLikeVideoCall(videoId);
    checkStatusLikeVideos(likes, status);
  };

  const checkStatusWatchLater = (watchlater, status) => {
    if (status === 200 || status === 201)
      setUserInfo((prevUserInfo) => ({ ...prevUserInfo, watchlater }));
  };

  const addToWatchLater = async (video) => {
    const { watchlater, status } = await postWatchLaterVideoCall(video);
    checkStatusWatchLater(watchlater, status);
  };

  const deleteFromWatchLater = async (videoId) => {
    const { watchlater, status } = await deleteWatchLaterVideoCall(videoId);
    checkStatusWatchLater(watchlater, status);
  };

  const checkStatusHistoryVideos = (history, status) => {
    if (status === 200 || status === 201) {
      setUserInfo((prevUserInfo) => ({ ...prevUserInfo, history }));
    }
  };

  const addToHistoryVideos = async (video) => {
    const { history, status } = await postHistoryVideoCall(video);
    checkStatusHistoryVideos(history, status);
  };

  const deleteFromHistoryVideos = async (videoId) => {
    const { history, status } = await deleteHistoryVideoCall(videoId);
    checkStatusHistoryVideos(history, status);
  };

  return (
    <AuthContext.Provider
      value={{
        isUserLoggedIn,
        setIsUserLoggedIn,
        userInfo,
        setUserInfo,
        addToLikeVideos,
        deleteFromLikeVideos,
        addToWatchLater,
        deleteFromWatchLater,
        addToHistoryVideos,
        deleteFromHistoryVideos,
        deleteVideoCategory,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
