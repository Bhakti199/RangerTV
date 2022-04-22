export const addToVideoList = (videoList, itemToAdd) =>
  videoList.some((item) => item._id === itemToAdd._id)
    ? videoList
    : [...videoList, itemToAdd];

export const removeFromVideoList = (videoList, itemToRemove) => {
  if (videoList.length > 0)
    return videoList.filter((item) => item._id !== itemToRemove._id);
  return [];
};

export const addToPlayList = (playList, title, video) =>
  playList.some((item) => item.title === title)
    ? playList.map((item) =>
        item.title === title
          ? {
              ...item,
              videoList: item.videoList.some(
                (element) => element._id === video._id
              )
                ? item.videoList
                : [...item.videoList, video],
            }
          : item
      )
    : [...playList, { title: title, videoList: [video] }];

export const removeFromPlayList = (playList, title, videoToRemove) => {
  return playList
    .map((playList) =>
      playList.title === title
        ? {
            ...playList,
            videoList: playList.videoList.filter(
              (video) => video._id !== videoToRemove._id
            ),
          }
        : playList
    )
    .filter((playList) => playList.videoList.length !== 0);
};
export const FilterVideoListByCategory = (currentCategory, videoList) => {
  if (currentCategory === "All") return videoList;
  return videoList.filter((video) => video.categoryName === currentCategory);
};
