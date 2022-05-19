import axios from "axios";

export const postPlaylistcall = async (title) => {
  try {
    const { data, status } = await axios.post(
      "/api/user/playlists",
      {
        playlist: {
          title,
          description: "playlist",
        },
      },
      {
        headers: {
          authorization: localStorage.getItem("userLoginToken"),
        },
      }
    );
    console.log(data, status);
    return { playlists: data.playlists, status };
  } catch (error) {
    console.error(error);
    return error;
  }
};
