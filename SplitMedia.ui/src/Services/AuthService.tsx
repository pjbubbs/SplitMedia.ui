import { ILoginTokenData } from "../Context/useAuth";
import { handleError } from "../Helpers/ErrorHandler";
import axiosInstance from "../api/axiosInstance";

export const loginAPI = async (email: string, password: string) => {
  try {
    const data = await axiosInstance.post<ILoginTokenData>("/login", {
      email: email,
      password: password,
    });
    return data.data;
  } catch (error) {
    handleError(error);
  }
};

export const registerAPI = async (email: string, password: string) => {
  try {
    await axiosInstance.post("/register", {
      email: email,
      password: password,
    });
    return true;
  } catch (error) {
    console.log("error:");
    console.log(error);
    handleError(error);
  }
  return false;
};
