import { Link } from "react-router-dom";
export const NotFound = () =>{
    return(
        <div>
            <div>
                <h1>
                    Página no encontrada :c
                </h1>
                <p>
                    Lamentamos informarte qué la página qué estabas buscando no está disponible por el momento, intenta
                    de nuevo más tarde o comunícate con nuestro equipo de LearningPlus.
                </p>
            </div>
            <div>
                <Link
                    to="/dashboard"
                >
                    Regresar
                </Link>
            </div>
        </div>
    )
}