import {
  addToVideoList,
  removeFromVideoList,
  addToPlayList,
  removeFromPlayList,
} from "./SidebarManagementUtils";
export const sidebarManagement = (state, action) => {
  switch (action.type) {
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
  }
};
