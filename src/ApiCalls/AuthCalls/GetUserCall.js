import axios from "axios";

export const getUserCall = async (email, password) => {
  console.log("from api call == ", email, password);
  try {
    const { data, status } = await axios.post("/api/auth/login", {
      email,
      password,
    });
    return { data, status };
  } catch (error) {
    return error;
  }
};
