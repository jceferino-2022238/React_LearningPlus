import { useNavigate } from "react-router-dom";
import { useUserDetails } from "../../shared/hooks/useUserDetails";
const NavButton = ({text, onClickHandler}) =>{
    return(
        <span onClick={onClickHandler}>
            {text}
        </span>
    )
}
export const Navbar = () => {
    const {isLogged, logout} = useUserDetails()
    const navigate= useNavigate()
    const handleNavigateToAuthPage = () =>{
        navigate('/')
    }
    const handleNavigateToSettingsPage = () =>{
        navigate('/settings')
    }
    const handleNavigateToContactPage = () =>{
        navigate('/contact')
    }
    const handleLogout = () =>{
        logout()
    }
  return (
    <div>
      <img src="../../../src/assets/LEARNINGP-LOGO.png" alt="LOGO-MAIN" />
      <div>
        <NavButton text='Contacto' onClickHandler={handleNavigateToContactPage}/>
        {!isLogged ? (
            <NavButton text='Login' onClickHandler={handleNavigateToAuthPage}/>
        ) : (
            <div>
                <NavButton text='Mi Cuenta' onClickHandler={handleNavigateToSettingsPage}/>
                <NavButton text='Logout' onClickHandler={handleLogout}/>
            </div>
        )}
      </div>
    </div>
  )
}
