import {
  addToVideoList,
  removeFromVideoList,
  addToPlayList,
  removeFromPlayList,
  FilterVideoListByCategory,
} from "./SidebarManagementUtils";
export const sidebarManagement = (state, action) => {
  switch (action.type) {
    case "ASSIGN_VIDEOS":
      return {
        ...state,
        videoList: action.payload,
        videoListByCategory: action.payload,
      };
    case "ASSIGN_CATEGORY":
      return {
        ...state,
        categoryList: action.payload,
      };
    case "SET_CURRENT_CATEGORY":
      return {
        ...state,
        currentCategory: action.payload,
        videoListByCategory: FilterVideoListByCategory(
          action.payload,
          state.videoList
        ),
      };
    case "ADD_TO_LIKED_VIDEOS":
      return {
        ...state,
        likedVideos: addToVideoList(state.likedVideos, action.payload),
      };
    case "REMOVE_FROM_LIKED_VIDEOS":
      return {
        ...state,
        likedVideos: removeFromVideoList(state.likedVideos, action.payload),
      };
    case "ADD_TO_WATCH_LATER":
      return {
        ...state,
        watchLater: addToVideoList(state.watchLater, action.payload),
      };
    case "REMOVE_FROM_WATCH_LATER":
      return {
        ...state,
        watchLater: removeFromVideoList(state.watchLater, action.payload),
      };
    case "ADD_TO_PLAYLIST":
      return {
        ...state,
        playList: addToPlayList(
          state.playList,
          action.payload.title,
          action.payload.video
        ),
      };
    case "REMOVE_FROM_PLAYLIST":
      return {
        ...state,
        playList: removeFromPlayList(
          state.playList,
          action.payload.title,
          action.payload.video
        ),
      };
    case "ADD_TO_HISTORY":
      return {
        ...state,
        historyList: addToVideoList(state.historyList, action.payload),
      };
    case "REMOVE_FROM_HISTORY":
      return {
        ...state,
        historyList: removeFromVideoList(state.historyList, action.payload),
      };
  }
};
