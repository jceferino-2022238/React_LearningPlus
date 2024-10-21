import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerOnPage} from "../../services/api";
import toast from "react-hot-toast";

export const useRegisterOnPage = () => {
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const register = async(name, email, password) =>{
        setIsLoading(true)
        try {
            const response = await registerOnPage({
                name,
                email,
                password
            })
            setIsLoading(false)
            if(response.error){
                if(response.error.response && response.error.response.status === 400 && response.error.response.data.includes
                    ('email already registered')){
                        return toast.error("El correo ya está registrado")
                    }
            }   
            toast.success("Registro exitoso")
            navigate("/")
        } catch (error) {
            setIsLoading(false)
            toast.error("Ocurrió un error al registrar el usuario");
        }
    }
    return {
        register,
        isLoading
    }
}
