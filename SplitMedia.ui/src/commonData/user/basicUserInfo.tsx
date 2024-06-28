
import { AxiosResponse } from 'axios';
import axiosInstanceSecure from '../../api/axiosInstanceSecure';
import { iBasicUserInfo } from './iIBasicUserInfo';
import isLoggedIn from './isLoggedIn';



export default async function basicUserInfo(): Promise<iBasicUserInfo | null> {
    
    try{
        const loggedIn = await isLoggedIn();
        if(!loggedIn) {return null};

         const lsBasicUserInfo: iBasicUserInfo =  JSON.parse(localStorage.getItem("basicUuserInfo") + '');

         if (lsBasicUserInfo){
            return lsBasicUserInfo;
         }

        const response: AxiosResponse<iBasicUserInfo> = await axiosInstanceSecure.get("/GetBasicUser");
        const apiBasicUserInfo: iBasicUserInfo = response.data;
        localStorage.setItem("basicUuserInfo", JSON.stringify(apiBasicUserInfo));

        return apiBasicUserInfo;

    } catch(e){
        console.log('getBasicUserInfo ERROR: ' + e);
    };

    return null;
};
