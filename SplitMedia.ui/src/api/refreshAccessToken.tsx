import axios from "axios";
import { useCookies } from 'react-cookie';

const axiosRefreshInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
    withCredentials: true,
  });

  type AuthToken = {
    tokenType: string;
    accessToken: string;
    expiresIn: number;
    refreshToken: string;
  }

const refreshAccessToken = async () => {

    const [,setCookie] = useCookies(['refreshToken']);
    const [cookies] = useCookies(['refreshToken']);

    if(cookies.refreshToken) {

        const response = await axiosRefreshInstance.post("/refesh", '{"refreshToken":"' + cookies.refreshToken + '"}');

        const authData: AuthToken = response.data;
      
        setCookie('refreshToken', authData.refreshToken, {secure: true, httpOnly: true});

        return authData.accessToken;
    }
    return null;
}

export default refreshAccessToken;
