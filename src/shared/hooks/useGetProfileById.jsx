import { useEffect } from "react";
import { useState } from "react";
import { getByIdProfile } from "../../services/api";
import toast from "react-hot-toast";

export const useGetProfileById = (id) => {
    const [profile, setProfile] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);
    useEffect(() =>{
        const fetchProfile = async () =>{
            setLoading(true);
            try {
                const profileData = await getByIdProfile(id);
                if(profileData.error){
                    toast.error(
                        profileData.e.response?.data || "Error al obtener el perfil"
                    )
                } else {
                    setProfile(profileData.data.profile)
                }
            } catch (error) {
                console.error("Error al obtener el perfil", error);
                toast.error("Error al obtener el blog")
                setError(error)
            } finally {
                setLoading(false)
            }
        };
        if(id){
            fetchProfile();
        }
    }, [id])
  return{profile, loading, error}
}

