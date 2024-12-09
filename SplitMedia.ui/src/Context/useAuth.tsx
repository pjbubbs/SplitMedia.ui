import { createContext, useEffect, useState } from "react";
import { UserProfile } from "../Models/User";
/*import { useNavigate } from "react-router-dom";*/
import { loginAPI, registerAPI } from "../Services/AuthService";
import { toast } from "react-toastify";
import React from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

export interface ILoginTokenData {
  tokenType: string;
  accessToken: string;
  expiresIn: number;
  refreshToken: string;
}

type UserContextType = {
  user: UserProfile | null;
  token: string | null;
  registerUser: (email: string, password: string) => void;
  loginUser: (email: string, password: string) => void;
  logout: () => void;
  isLoggedIn: () => boolean;
};

type Props = { children: React.ReactNode };

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {
  /*const navigate = useNavigate();*/
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("accessToken");
    if (user && token) {
      setUser(JSON.parse(user));
      setToken(token);
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    }
    setIsReady(true);
  }, []);

  const registerUser = async (email: string, password: string) => {
    await registerAPI(email, password);
    await loginUser(email, password);
  };

  const [, setCookie] = useCookies(["refreshToken"]);

  const loginUser = async (email: string, password: string) => {
    await loginAPI(email, password)
      .then((res) => {
        if (res) {
          console.log("Logging in");
          localStorage.setItem("accessToken", res.accessToken);
          setCookie("refreshToken", res.refreshToken, {
            secure: true,
            httpOnly: true,
          });

          /* Get User data & profile data  */
          const userObj = {
            userName: "username tbc",
            email: email,
          };
          localStorage.setItem("user", JSON.stringify(userObj));
          setToken(res.accessToken!);
          setUser(userObj!);
          toast.success("Login Success!");
        }
      })
      .catch((e) => toast.warning("Server error occured: " + e));

    console.log("Login Done");
  };

  const isLoggedIn = () => {
    return !!user;
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToken("");
    /*navigate("/");*/
  };

  return (
    <UserContext.Provider
      value={{ loginUser, user, token, logout, isLoggedIn, registerUser }}
    >
      {isReady ? children : null}
    </UserContext.Provider>
  );
};

export const useAuth = () => React.useContext(UserContext);
