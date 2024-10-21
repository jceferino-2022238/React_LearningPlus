import { useState } from "react";
import { logout as logoutHandler} from "./useLogout";

export const getUserDetails = () => {
    const userDetails = localStorage.getItem("user");
    if(userDetails){
        return JSON.parse(userDetails)
    }
    return null;
}

export const useUserDetails = () => {
    const [userDetails, setUserDetails] = useState(getUserDetails());
    const logout = () =>{
        logoutHandler();
    }
    return {
        isLogged: Boolean(userDetails),
        name: userDetails?.user ? userDetails.name : "Guest",
        logout
    }
}


