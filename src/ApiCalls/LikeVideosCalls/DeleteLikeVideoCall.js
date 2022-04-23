import axios from "axios";

export const deleteLikeVideoCall = async (videoId) => {
  try {
    const { data, status } = await axios.delete(`/api/user/likes/${videoId}`, {
      headers: {
        authorization: localStorage.getItem("userLoginToken"),
      },
    });
    return { likes: data.likes, status };
  } catch (error) {
    console.error(error);
    return error;
  }
};
