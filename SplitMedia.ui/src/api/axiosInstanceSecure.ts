import axios from "axios";
import refreshAccessToken from "./refreshAccessToken";

// Create an Axios instance with default options
const axiosInstanceSecure = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_BASE_URL
});

// Request interceptor for API calls
axiosInstanceSecure.interceptors.request.use(
  async config => {
  const controller = new AbortController();

  const accessToken = document.cookie
    .split("; ")
    .find((row) => row.startsWith("accessToken="))
    ?.split("=")[1];

  const refreshToken = document.cookie
    .split("; ")
    .find((row) => row.startsWith("refreshToken="))
    ?.split("=")[1];


  if (!accessToken && !refreshToken) {
    console.log('Aborting');
    controller.abort();
    controller.signal;
    return config;
  };

  config.headers.Authorization = 'Bearer ' + accessToken;
  config.headers.Accept = 'application/json';

  return config;
},
  error => {
    Promise.reject(error)
});

// Response interceptor for API calls
axiosInstanceSecure.interceptors.response.use((response) => {
  console.log('response here' + response.data);
  return response
}, async function (error) {
  const originalRequest = error.config;
  console.log('Error status: ' + error.response.status);
  if (error.response.status === 401) {
    return Promise.reject('authError');
  }
  if (error.response.status === 403 && !originalRequest._retry) {
    originalRequest._retry = true;

    const accessToken = await refreshAccessToken();            
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
    return axiosInstanceSecure(originalRequest);
  }
  return Promise.reject(error);
});



export default axiosInstanceSecure;