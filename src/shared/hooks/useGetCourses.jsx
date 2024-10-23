import { useState } from "react";
import { useEffect } from "react";
import { getCourses } from "../../services/api";
import toast from "react-hot-toast";

export const useGetCourses = () => {
    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const obtenerCourses = async () => {
        setLoading(true)
        try {
            const coursesData = await getCourses()
            if(coursesData.error){
                toast.error(
                    coursesData.e.response?.data || "Error al obtener los cursos"
                )
            } else {
                setCourses(coursesData.data.course)
            }
        } catch (error) {
            console.error("Error al obtener los cursos: ", error);
            toast.error("Error al obtener los cursos");
        } finally {
            setLoading(false)
        }
    }
    useEffect(() =>{
        obtenerCourses()
    }, [])
  return{courses, loading, error, obtenerCourses}
}
