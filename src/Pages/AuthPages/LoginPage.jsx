import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { getUserCall } from "../../ApiCalls";
import { useAuth } from "../../Context/Index";
import "./Auth.css";

export const LoginPage = () => {
  const { setIsUserLoggedIn, setUserInfo, isUserLoggedIn, userInfo } =
    useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const statusCheck = (data, status) => {
    if (status === 200) {
      setIsUserLoggedIn(true);
      setUserInfo({ ...data.foundUser });
      localStorage.setItem("userLoginToken", data.encodedToken);
      navigate(location?.state?.from?.pathname || "/video-listing-page");
      toast("Successfully logged in.");
    }
  };

  const loginDetailsHandler = async (event) => {
    event.preventDefault();
    let [email, password] = event.target.elements;
    const { data, status } = await getUserCall(email.value, password.value);
    statusCheck(data, status);
  };

  const guestLoginDetailsHandler = async (email, password) => {
    const { data, status } = await getUserCall(email, password);
    statusCheck(data, status);
  };
  return (
    <div className="auth-page">
      {isUserLoggedIn ? (
        <>
          <button
            className="logout-button"
            onClick={() => {
              setIsUserLoggedIn(false);
              localStorage.removeItem("userLoginToken");
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <form
            className="login-form"
            onSubmit={(event) => loginDetailsHandler(event)}
          >
            <h2 className="margin-top-bottom-zero center-text green">LOG IN</h2>
            <div className="form-inputs">
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
              LOGIN
            </button>
            <p className="register-text">
              Don't have an account?{" "}
              <Link to="/sign-up" className="link link-color register">
                REGISTER
              </Link>
            </p>
          </form>
          <span
            className="login-guest-text pointer"
            onClick={() =>
              guestLoginDetailsHandler(
                "adarshbalika@gmail.com",
                "adarshBalika123"
              )
            }
          >
            Login as a guest
          </span>
        </>
      )}
    </div>
  );
};
