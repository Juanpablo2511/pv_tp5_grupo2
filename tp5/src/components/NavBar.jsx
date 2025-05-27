import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <ul className="flex gap-4">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/acerca">Acerca de</Link></li>
        <li><Link to="/alumnos">Lista de Alumnos</Link></li>
        <li><Link to="/alumnos/nuevo">Nuevo Alumno</Link></li>
      </ul>
    </nav>
  )
}