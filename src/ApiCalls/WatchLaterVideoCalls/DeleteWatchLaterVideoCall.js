import axios from "axios";
export const deleteWatchLaterVideoCall = async (videoId) => {
  try {
    const { data, status } = await axios.delete(
      `/api/user/watchlater/${videoId}`,
      {
        headers: {
          authorization: localStorage.getItem("userLoginToken"),
        },
      }
    );
    return { watchlater: data.watchlater, status };
  } catch (error) {
    console.error(error);
    return error;
  }
};
