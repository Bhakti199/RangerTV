import axios from "axios";

export const postNewUserCall = async (firstName, lastName, email, password) => {
  try {
    const { data, status } = await axios.post("/api/auth/signup", {
      firstName,
      lastName,
      email,
      password,
    });
    return { data, status };
  } catch (error) {
    console.error(error);
    return error;
  }
};
