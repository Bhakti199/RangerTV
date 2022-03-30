export const addToVideoList = (videoList, itemToAdd) => {
  if (videoList.length === 0) return [itemToAdd];
  else {
    if (videoList.some((item) => item._id === itemToAdd._id)) return videoList;
    else return [...videoList, itemToAdd];
  }
};

export const removeFromVideoList = (videoList, itemToRemove) => {
  if (videoList.length > 0)
    return videoList.filter((item) => item._id !== itemToRemove._id);
  else return [];
};

export const addToPlayList = (playList, title, video) => {
  if (playList.length === 0) return [{ title: title, videoList: [video] }];
  else {
    if (playList.some((item) => item.title === title))
      return playList.map((item) =>
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
      );
    else return [...playList, { title: title, videoList: [video] }];
  }
};

export const removeFromPlayList = (playList, title, videoToRemove) => {
  return playList
    .map((playList) =>
      playList.title === title
        ? {
            ...playList,
            videoList:
              // playList.videoList.length > 0?
              playList.videoList.filter(
                (video) => video._id !== videoToRemove._id
              ),
            // : [],
          }
        : playList
    )
    .filter((playList) => playList.videoList.length !== 0);
};
