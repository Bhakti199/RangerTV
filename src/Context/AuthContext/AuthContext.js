import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsCheckCircleFill, BsXCircleFill } from "react-icons/bs";
import toast from "react-hot-toast";
import {
  postLikeVideoCall,
  deleteLikeVideoCall,
  postWatchLaterVideoCall,
  deleteWatchLaterVideoCall,
  postHistoryVideoCall,
  deleteHistoryVideoCall,
  postPlaylistcall,
  deletePlaylistCall,
  postNewVideoIntoPlaylist,
  deleteVideoFromPlaylistCall,
} from "../../ApiCalls";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();
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
    if (isUserLoggedIn) {
      const { likes, status } = await postLikeVideoCall(video);
      toast("Added to liked videos.", { icon: <BsCheckCircleFill /> });
      checkStatusLikeVideos(likes, status);
    } else {
      navigate("/login");
    }
  };

  const deleteFromLikeVideos = async (videoId) => {
    const { likes, status } = await deleteLikeVideoCall(videoId);
    toast("Removed from liked videos.", { icon: <BsXCircleFill /> });
    checkStatusLikeVideos(likes, status);
  };

  const checkStatusWatchLater = (watchlater, status) => {
    if (status === 200 || status === 201)
      setUserInfo((prevUserInfo) => ({ ...prevUserInfo, watchlater }));
  };

  const addToWatchLater = async (video) => {
    if (isUserLoggedIn) {
      const { watchlater, status } = await postWatchLaterVideoCall(video);
      toast("Added to watch later.", { icon: <BsCheckCircleFill /> });
      checkStatusWatchLater(watchlater, status);
    } else {
      navigate("/login");
    }
  };

  const deleteFromWatchLater = async (videoId) => {
    const { watchlater, status } = await deleteWatchLaterVideoCall(videoId);
    toast("Removed from watch later.", { icon: <BsXCircleFill /> });
    checkStatusWatchLater(watchlater, status);
  };

  const checkStatusHistoryVideos = (history, status) => {
    if (status === 200 || status === 201) {
      setUserInfo((prevUserInfo) => ({ ...prevUserInfo, history }));
    }
  };

  const addToHistoryVideos = async (video) => {
    if (isUserLoggedIn) {
      const { history, status } = await postHistoryVideoCall(video);
      checkStatusHistoryVideos(history, status);
    } else {
      navigate("/login");
    }
  };

  const deleteFromHistoryVideos = async (videoId) => {
    const { history, status } = await deleteHistoryVideoCall(videoId);
    checkStatusHistoryVideos(history, status);
  };
  const checkStatusPlaylistVideos = (playlists, status) => {
    if (status === 200 || status === 201)
      setUserInfo((prevUserInfo) => ({ ...prevUserInfo, playlists }));
  };

  const addVideoToPlaylist = async (playlistId, video) => {
    if (isUserLoggedIn) {
      const { playlist, status } = await postNewVideoIntoPlaylist(
        playlistId,
        video
      );
      if (status === 200 || status === 201) {
        setUserInfo((prevUserInfo) => ({
          ...prevUserInfo,
          playlists: prevUserInfo.playlists.map((item) =>
            item._id === playlist._id ? playlist : item
          ),
        }));
        toast("Added video to playlist.", { icon: <BsXCircleFill /> });
      }
    } else {
      navigate("/login");
    }
  };

  const addPlaylist = async (playlistTitle, video) => {
    if (isUserLoggedIn) {
      if (playlistTitle === "") {
        toast("Please, Enter input for title.");
      } else {
        const { playlists, status } = await postPlaylistcall(playlistTitle);
        console.log(playlists);
        let playlistToAdd = playlists.find(
          (item) => item.title === playlistTitle
        );
        console.log(playlistToAdd);
        if (status === 200 || status === 201) {
          setUserInfo((prevUserInfo) => ({ ...prevUserInfo, playlists }));
          toast("PLaylist added.");
        }
      }
    } else {
      navigate("/login");
    }
  };

  const deletePlaylist = async (playlistId) => {
    const { playlists, status } = await deletePlaylistCall(playlistId);
    toast("Deleted playlist.", { icon: <BsXCircleFill /> });
    checkStatusPlaylistVideos(playlists, status);
  };
  const deleteVideoFromPlaylist = async (playlistId, videoId) => {
    const { playlist, status } = await deleteVideoFromPlaylistCall(
      playlistId,
      videoId
    );

    if (status === 200 || status === 201) {
      console.log(playlist);
      setUserInfo((prevUserInfo) => ({
        ...prevUserInfo,
        playlists: prevUserInfo.playlists.map((item) =>
          item._id === playlist._id ? playlist : item
        ),
      }));
      toast("Removed from playlist.", { icon: <BsXCircleFill /> });
    }
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
        addPlaylist,
        deletePlaylist,
        addVideoToPlaylist,
        deleteVideoFromPlaylist,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
