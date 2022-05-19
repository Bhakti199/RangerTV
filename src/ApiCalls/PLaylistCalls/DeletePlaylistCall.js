import axios from "axios";

export const deletePlaylistCall = async (playlistId) => {
  try {
    const { data, status } = await axios.delete(
      `/api/user/playlists/${playlistId}`,
      {
        headers: {
          authorization: localStorage.getItem("userLoginToken"),
        },
      }
    );
    return { playlists: data.playlists, status };
  } catch (error) {
    console.error(error);
    return error;
  }
};
