import axios from "axios";

export const postLikeVideoCall = async (video) => {
  try {
    const { data, status } = await axios.post(
      "/api/user/likes",
      {
        video,
      },
      {
        headers: {
          authorization: localStorage.getItem("userLoginToken"),
        },
      }
    );
    return { likes: data.likes, status };
  } catch (error) {
    console.error(error);
    return error;
  }
};
