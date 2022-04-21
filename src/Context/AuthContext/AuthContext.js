import { createContext, useContext, useState } from "react";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  return (
    <AuthContext.Provider
      value={{ isUserLoggedIn, setIsUserLoggedIn, userInfo, setUserInfo }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
