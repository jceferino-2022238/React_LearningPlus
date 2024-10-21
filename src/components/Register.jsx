import { useState } from "react";
import { Input } from "./Input";
import { emailValidationMessage,
    passwordValidationMessage,
    passwordConfirmationMessage,
    validateUsernameMessage,
    validatePasswordConfirm,
    validateUsername,
    validateEmail,
    validatePassword
 } from "../shared/validators";
import { useRegisterOnPage } from "../shared/hooks";
export const Register = ({switchAuthHandler}) =>{
    const {register, isLoading} = useRegisterOnPage();
    const [formState, setFormState] =useState({
        name:{
            value:"",
            isValid: false,
            showError: false,
        },
        email: {
            value:"",
            isValid: false,
            showError: false,
        },
        password:{
            value:"",
            isValid: false,
            showError: false
        },
        passwordConfir:{
            value:"",
            isValid: false,
            showError: false,
        },
    });
    const handleInputValueChange = (value, field) =>{
        setFormState((prevState) =>({
            ...prevState,
            [field]:{
                ...prevState[field],
                value,
            },
        }));
    };
    const handleInputValidationOnBlur = (value, field) =>{
        let isValid = false;
        switch(field){
            case "name":
                isValid = validateUsername(value);
                break;
            case "email":
                isValid = validateEmail(value);
                break;
            case "password":
                isValid = validatePassword(value);
                break;
            case "passwordConfir":
                isValid = validatePasswordConfirm(formState.password.value, value);
                break;
            default:
                break;
        }
        setFormState((prevState) =>({
            ...prevState,
            [field]:{
                ...prevState[field],
                isValid,
                showError: !isValid,
            },
        }));
    };

    const handleRegister = (event) =>{
        event.preventDefault();
        console.log(formState);
        register(
            formState.name.value,
            formState.email.value,
            formState.password.value
        );
    };

    const isSubmitButtonDisabled =
        isLoading ||
        !formState.name.isValid ||
        !formState.email.isValid ||
        !formState.password.isValid ||
        !formState.passwordConfir.isValid;
    
    return(
        <div className="register-container">
            <img src="../../src/assets/LEARNINGP-LOGO.png"/>
            <form className="auth-form">
                <Input
                    field="name"
                    label="Name"
                    value={formState.name.value}
                    onChangeHandler={handleInputValueChange}
                    type="text"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.name.showError}
                    validationMessage={validateUsernameMessage}
                />
                <Input
                    field="email"
                    label="Email"
                    value={formState.email.value}
                    onChangeHandler={handleInputValueChange}
                    type="text"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.email.showError}
                    validationMessage={emailValidationMessage}
                />
                <Input
                    field="password"
                    label="Password"
                    value={formState.password.value}
                    onChangeHandler={handleInputValueChange}
                    type="text"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.password.showError}
                    validationMessage={passwordValidationMessage}
                />
                <Input
                    field="passwordConfir"
                    label="Password Confirmation"
                    value={formState.passwordConfir.value}
                    onChangeHandler={handleInputValueChange}
                    type="text"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.passwordConfir.showError}
                    validationMessage={passwordConfirmationMessage}
                />
                <button onClick={handleRegister} disabled={isSubmitButtonDisabled}>
                    Registrarse
                </button>
            </form>
            <span onClick={switchAuthHandler} className="auth-form-switch-label">
                ¿Ya tienes una cuenta? ¡Inicia sesión acá!
            </span>
        </div>
    )
}