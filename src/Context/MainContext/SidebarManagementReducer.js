export const sidebarManagement = (state, action) => {
  const FilterVideoListByCategory = (currentCategory, videoList) => {
    if (currentCategory === "All") return videoList;
    return videoList.filter((video) => video.categoryName === currentCategory);
  };

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
  }
};
