import { useEffect } from "react";
import { useState } from "react";
import { getByIdBlog } from "../../services/api";
import toast from "react-hot-toast";    
export const useGetBlogById = (id) => {
    const [blog, setBlog] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);
    useEffect(() =>{
        const fetchBlog = async () =>{
            setLoading(true);
            try {
                const blogData = await getByIdBlog(id);
                if(blogData.error){
                    toast.error(
                        blogData.e.response?.data || "Error al obtener el blog"
                    )
                } else {
                    setBlog(blogData.data.blog);
                }
            } catch (error) {
                console.error("Error al obtener el blog", error);
                toast.error("Error al obtener el blog")
                setError(error)
            } finally {
                setLoading(false);
            }
        };
        if(id){
            fetchBlog();
        }
    }, [id]);
  return{blog, loading, error}
}

