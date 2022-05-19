import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { postNewUserCall } from "../../ApiCalls";
import { useAuth } from "../../Context/AuthContext/AuthContext";
import toast from "react-hot-toast";
import "./Auth.css";
export const SignUpPage = () => {
  const { isUserLoggedIn, setIsUserLoggedIn, userInfo, setUserInfo } =
    useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const signUpDetailsHandler = async (event) => {
    event.preventDefault();
    const [firstName, lastName, email, password] = event.target.elements;
    const { data, status } = await postNewUserCall(
      firstName.value,
      lastName.value,
      email.value,
      password.value
    );
    if (status === 200 || status === 201) {
      setIsUserLoggedIn(true);
      setUserInfo({ ...data.createdUser });
      localStorage.setItem("userLoginToken", data.encodedToken);
      navigate(location?.state?.from?.pathname || "/video-listing-page");
      toast("Successfully Signed up.");
    }
  };

  return (
    <div className="auth-page">
      <form
        className="login-form"
        onSubmit={(event) => signUpDetailsHandler(event)}
      >
        <h2 className="margin-top-bottom-zero center-text green">SIGN UP</h2>
        <div className="form-inputs">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="form-input-individual"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="form-input-individual"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            className="form-input-individual"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-input-individual"
            required
          />
        </div>
        <button type="submit" className="login-form-btn">
          SIGN UP
        </button>
        <p className="register-text">
          Already a user?{" "}
          <Link to="/login" className="link link-color register">
            LOGIN
          </Link>
        </p>
      </form>
    </div>
  );
};
