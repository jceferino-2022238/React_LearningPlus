import axios from "axios";
import { logout } from "../shared/hooks/useLogout";

const apiClient =  axios.create({
    baseURL: 'http:/localhost:8080/learningPlus/v1',
    timeout: 5000
})

apiClient.interceptors.request.use(
    (config) =>{
        const userDetails = localStorage.getItem('user')
        if(userDetails){
            const token = JSON.parse(userDetails).token
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (e) =>{
        return Promise.reject(e)
    }
)

export const login = async (data) =>{
    try {
        return await apiClient.post('/auth/login')
    } catch (e) {
        return{
            error: true,
            e
        }
    }
}

export const registerOnPage = async (data) =>{
    try {
        return await apiClient.post("/users/")
    } catch (error) {
        return{
            error: true,
            e
        }
    }
}