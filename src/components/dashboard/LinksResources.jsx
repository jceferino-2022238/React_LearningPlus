import { ImProfile } from "react-icons/im";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaBookReader } from "react-icons/fa";
import { Link } from "react-router-dom";
export const LinksResources = () => {
  return (
    <div>
        <div>
            <FaBookReader/>
            <h2>Blogs</h2>
            <Link
                to="/blogsGrid"
            >
                Ver Blogs
            </Link>
        </div>
        <div>
            <IoDocumentTextOutline/>
            <h2>Cursos</h2>
            <Link
                to="/cursosGrid"
            >
                Ver Cursos
            </Link>
        </div>
        <div>
            <ImProfile/>
            <h2>Perfiles</h2>
            <Link
                to="/perfilesGrid"
            >
                Ver Perfiles
            </Link>
        </div>
    </div>
  )
}

