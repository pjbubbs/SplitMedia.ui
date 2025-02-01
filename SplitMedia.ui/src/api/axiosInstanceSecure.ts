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

  //const { token } = useAuth();

    //const token = 'CfDJ8IPrVL8er8dNua7o_Nj_M_0g2bDcbAaR3tyvZ5IaRQ9LHAxOqT79Gg2oAu6wVTfTwtJhPhEpycKltFSml_lNMlQtlWgF4px5DoS8vNK_g1CS_dodK_pKXDA-4nuZUuD3pwyy97Z6YNgYLg_uG4KsH8Ja5udJ3iAJmbTYupNKeX7VSFLFt4dwjDIFwjGtqOJHx1MciN4fcC_zgL-b-DaNyY3jPM33GXj2mQ4mU4_cKFfRO7em4v_R8_1pwX02H4dAx5b4bMMlbPam0rVudoloVasux8i-VMDuUun35gBrVHVNV_MX93cqM9qnxneyH5CTXGut_VFGVFEcgDA--dej1TH1HA43WumODuPdEeCT3YfrAvsgXLVCiPmav5NrsoDCzT4Kd0fxjzetvO4zWuYTG6z_7WDCVDm8p8uyTDyeBWVVRnsjMWDuMmvRu1wVp1k_7mWxb2_8eNq5TdSUOwaS0sXsZdHe9VVw6ykxkI9PdtXCOiEPT2YXeRDcJwM4wPcb7McfX2yrN5vmOO6OHo_cN9DUtW7GQubuspIlYJkkW1BgZZgjNyCYmUbInybxlzO94NZEwoW1VU7L-GwJMqh9EaoNSsTsP4keoT_q9M2xYuEKQAyvG0gvEHoq41vnMm8XiBW6zDwgaugbajswm2IDryrrhUKL2TDLbh4yJwPDujJ4qc1yELUk5vQGjaJ3W45G5A';
    const token = localStorage.getItem("accessToken");
    console.log(token);



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