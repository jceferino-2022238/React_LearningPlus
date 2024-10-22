import { useEffect } from "react";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { useUserDetails } from "../../shared/hooks/useUserDetails";
import { LinksResources } from "../../components/dashboard/LinksResources";
import { Navbar } from "../../components/navbar/Navbar";

export const DashboardPageAdmin = () => {
    useEffect(() =>{

    })
  return (
    <div>
        <Navbar/>
        <LinksResources/>
    </div>
  )
}
