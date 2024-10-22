import { useEffect } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { useUserDetails } from "../../shared/hooks";
import { LinksResources } from "../../components/dashboard/LinksResources";

export const DashboardPageEditor = () => {
    useEffect(() =>{

    })
  return (
    <div>
        <Navbar/>
        <LinksResources/>
    </div>
  )
}

