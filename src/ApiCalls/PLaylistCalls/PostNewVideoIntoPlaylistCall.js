import axios from "axios";

export const postNewVideoIntoPlaylist = async (playlistId, video) => {
  try {
    const { data, status } = await axios.post(
      `/api/user/playlists/${playlistId}`,
      { video },
      {
        headers: {
          authorization: localStorage.getItem("userLoginToken"),
        },
      }
    );
    return { playlist: data.playlist, status };
  } catch (error) {
    console.error(error);
  }
};
