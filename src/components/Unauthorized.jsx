import { Link } from "react-router-dom";

export const Unauthorized = () => {
  return (
    <div>
        <div>
            <h1>
                Unauthorized
            </h1>
            <p>
                No tienes permiso para acceder a esta página, no has iniciado sesión o no cuentas con el rol necesario.
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

