import axios from "axios";
//import refreshAccessToken from "./refreshAccessToken";
//import { useAuth } from "../Context/useAuth";

// Create an Axios instance with default options
const axiosInstanceSecure = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_BASE_URL
});

// Request interceptor for API calls
axiosInstanceSecure.interceptors.request.use(
  async config => {
  const controller = new AbortController();
  const token = localStorage.getItem("accessToken");

  if (!token) {
    console.log('Aborting no auth token!');
    controller.abort();
    controller.signal;
    return config;
  };

  config.headers.Authorization = 'Bearer ' + token;
  config.headers.Accept = 'application/json';

  return config;
},
  error => {
    Promise.reject(error)
});


// Response interceptor for API calls
axiosInstanceSecure.interceptors.response.use((response) => {
  console.log('response here ' + response.data);
  return response
}, async function (error) {
  try { 
  //const originalRequest = error.config;
  console.log('Error status: ' + error.response.status);
  if (error.response.status === 401 || error.response.status === 403) {
    // todo: put some code in to check the refresh token
    window.location.href = '/logout';
  }

}
  catch(e){
    console.log('Interceptor error');
  } 
  return Promise.reject(error);
});



export default axiosInstanceSecure;