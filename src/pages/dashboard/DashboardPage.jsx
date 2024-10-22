import { useEffect } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { useUserDetails } from "../../shared/hooks/useUserDetails";
import { LinksResources } from "../../components/dashboard/LinksResources";
export const DashboardPage = () =>{
    const {isLogged} = useUserDetails();

    useEffect(() =>{
        
    })
    return(
        <div>
            <Navbar/>
            <LinksResources/>
        </div>
    )
}