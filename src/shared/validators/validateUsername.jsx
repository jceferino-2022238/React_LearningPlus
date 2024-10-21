export const validateUsername = (username) =>{
    const regex = /^\S{3,10}$/
    
    return regex.text(username)
}
export const validateUsernameMessage = 'El username debe de contener entre 3 y 10 caracteres, sin espacios'