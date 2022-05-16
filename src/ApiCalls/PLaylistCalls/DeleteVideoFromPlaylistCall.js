import axios from "axios";

export const deleteVideoFromPlaylistCall = async (playlistId, videoId) => {
  try {
    const { data, status } = await axios.delete(
      `/api/user/playlists/${playlistId}/${videoId}`,
      {
        headers: {
          authorization: localStorage.getItem("userLoginToken"),
        },
      }
    );
    return { playlist: data.playlist, status };
  } catch (error) {
    console.error(error);
    return error;
  }
};
