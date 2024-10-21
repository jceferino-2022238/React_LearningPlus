import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerOnPage as registerRequest } from "../../services/api";
import toast from "react-hot-toast";

export const useRegisterOnPage = () => {
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const register = async(name, email, password) =>{
        setIsLoading(true)
        const response = await registerRequest({
            name,
            email,
            password
        })
        setIsLoading(false)
        if(response.error){
            return toast.error(
                response.e?.response?.data || 'Ocurrió un error al registrarse'
            )
        }
        const {userDetails} = response.data
        localStorage.setItem('user', JSON.stringify(userDetails))
        navigate('/')
    }
  return (
    register,
    isLoading
  )
}
