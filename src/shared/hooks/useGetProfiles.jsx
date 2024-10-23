import { useState } from "react";
import { useEffect } from "react";
import { getProfiles } from "../../services/api";
import toast from "react-hot-toast";

export const useGetProfiles = () => {
    const [ profiles, setProfiles] = useState([])
    const [ loading, setLoading] = useState(true)
    const [ error, setError] = useState(null)
    const obtenerProfiles = async () =>{
        setLoading(true)
        try {
            const profilesData = await getProfiles()
            if(profilesData.error){
                toast.error(
                    profilesData.e.response?.data || "Error al obtener los perfiles"
                )
            } else {
                setProfiles(profilesData.data.profile)
            }
        } catch (error) {
            console.error("Error al obtener los perfiles: ", error)
            toast.error("Error al obtener los perfiles");
        } finally {
            setLoading(false)
        }
    }
    useEffect(() =>{
        obtenerProfiles()
    }, [])
    return{profiles, loading, error, obtenerProfiles}
}
