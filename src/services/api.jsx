import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:8080/learningPlus/v1',
    timeout: 5000
})

apiClient.interceptors.request.use(
    (config) =>{
        const userDetails = localStorage.getItem('user')

        if(userDetails){
            const token =  JSON.parse(userDetails).token
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (e) =>{
        return Promise.reject(e)
    }
)


export const login = async (data) => {
    try{
        
        return await apiClient.post('/auth/login', data)
    }catch(e){
        console.log(e)
        return{
            error: true,
            e
        }
    }
}

export const registerOnPage = async (data) => {
    try{
        return await apiClient.post('/users/', data)
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const getCourses = async () =>{
    try {
        return await apiClient.get("/course");
    } catch (error) {
        return{ error: true, e}
    }
}

export const getByIdCourse = async (id) => {
    try {
        return await apiClient.get(`/course/${id}`)
    } catch (error) {
        return { error: true, e}
    }
}

export const getProfiles = async () =>{
    try {
        return await apiClient.get("/profile")
    } catch (error) {
        return { error: true, e}
    }
}

export const getByIdProfile = async (id) => {
    try {
        return await apiClient.get(`/profile/${id}`)
    } catch (error) {
        return { error: true, e}
    }
}

export const getBlogs = async () => {
    try {
        return await apiClient.get("/blog")
    } catch (error) {
        return { error: true, e}
    }
}

export const getByIdBlog = async (id) => {
    try {
        return await apiClient.get(`/blog/${id}`)
    } catch (error) {
        return { error: true, e}
    }
}