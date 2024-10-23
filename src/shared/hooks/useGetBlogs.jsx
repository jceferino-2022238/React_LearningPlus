import { useState } from "react";
import { useEffect } from "react";
import { getBlogs } from "../../services/api";
import toast from "react-hot-toast";
export const useGetBlogs = () =>{
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const obtenerBlogs = async () =>{
        setLoading(true)
        try {
            const blogsData = await getBlogs()
            if(blogsData.error){
                toast.error(
                    blogsData.e.response?.data || "Error al obtener los blogs"
                )
            }else{
                setBlogs(blogsData.data.blog)
            }
        } catch (error) {
            console.error("Error al obtener los blogs: ", error);
            toast.error("Error al obtener los blogs");
        } finally{
            setLoading(false)
        }
    }
    useEffect(() =>{
        obtenerBlogs()
    }, [])
    return{blogs, loading, error, obtenerBlogs}
}