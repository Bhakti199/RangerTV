import axios from "axios";
export const postWatchLaterVideoCall = async (video) => {
  try {
    const { data, status } = await axios.post(
      "/api/user/watchlater",
      {
        video,
      },
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
