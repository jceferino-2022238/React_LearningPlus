import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login as loginRequest } from "../../services/api";
import toast from "react-hot-toast";

export const useLogin = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)

    const login = async(email, password) =>{
        setIsLoading(true)

        const response = await loginRequest({
            email,
            password
        })

        setIsLoading(false)
        if(response.error){
            return toast.error(
                response.e?.response?.data || 'Ocurrió un error al iniciar sesión'
            )
        }

        const { userDetails } = response.data

        localStorage.setItem('user', JSON.stringify(userDetails))
        switch(userDetails.role){
            case "DEFAULT_ADMIN" || "ADMIN_ROLE":
                navigate('/dashboard/admin');
                break;
            case "EDITOR_ROLE":
                navigate("/dashboard/editor");
                break;
            case "USER_ROLE":
                navigate("/dashboard");
                break;
            default:
                navigate('/');
        }
    }
    return {
        login,
        isLoading
    };
};

