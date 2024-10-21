export const validateUsername = (name) =>{
    const regex = /^\S{3,10}$/
    
    return regex.test(name)
}
export const validateUsernameMessage = 'El username debe de contener entre 3 y 10 caracteres, sin espacios'