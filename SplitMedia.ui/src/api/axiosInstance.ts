import axios from "axios";

// Create an Axios instance with default options
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
  withCredentials: true,
});

export default axiosInstance;