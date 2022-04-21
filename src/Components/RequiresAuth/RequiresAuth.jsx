import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { LoginPage } from "../../Pages/Index";
import { useAuth } from "../../Context/Index";
export const RequiresAuth = ({ children }) => {
  const { isUserLoggedIn } = useAuth();
  const location = useLocation();
  return (
    <div>
      {isUserLoggedIn ? (
        children
      ) : (
        <Navigate
          to="/login"
          element={<LoginPage />}
          state={{ from: location }}
          replace
        />
      )}
    </div>
  );
};
