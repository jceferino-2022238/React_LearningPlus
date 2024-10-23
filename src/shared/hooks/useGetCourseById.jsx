import { useEffect } from "react";
import { useState } from "react";
import { getByIdCourse } from "../../services/api";
import toast from "react-hot-toast";

export const useGetCourseById = (id) => {
    const [course, setCourse] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);
    useEffect(() =>{
        const fetchCourse = async () =>{
            setLoading(true)
            try {
                const courseData = await getByIdCourse(id);
                if(courseData.error){
                    toast.error(
                        courseData.e.response?.data || "Error al obtener el curso"
                    )
                } else {
                    setCourse(courseData.data.course);
                }
            } catch (error) {
                console.error("Error al obtener el curso", error);
                toast.error("Error al obtener el curso")
                setError(error)
            } finally {
                setLoading(false)
            }
        };
        if(id){
            fetchCourse();
        }
    }, [id])
  return{course, loading, error}
}