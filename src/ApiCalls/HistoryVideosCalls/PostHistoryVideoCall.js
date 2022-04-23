import axios from "axios";
export const postHistoryVideoCall = async (video) => {
  try {
    const { data, status } = await axios.post(
      "/api/user/history",
      {
        video,
      },
      {
        headers: {
          authorization: localStorage.getItem("userLoginToken"),
        },
      }
    );
    return { history: data.history, status };
  } catch (error) {
    console.error(error);
    return error;
  }
};
