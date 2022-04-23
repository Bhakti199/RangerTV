import axios from "axios";

export const deleteHistoryVideoCall = async (videoId) => {
  try {
    const { data, status } = await axios.delete(
      `/api/user/history/${videoId}`,
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
