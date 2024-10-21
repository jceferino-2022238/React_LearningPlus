import { useEffect } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { useUserDetails } from "../../shared/hooks/useUserDetails";

export const DashboardPage = () =>{
    const {isLogged} = useUserDetails();
    return(
        <div>
            <Navbar/>
        </div>
    )
}