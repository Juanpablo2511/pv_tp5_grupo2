import { Link } from "react-router-dom"
import "../css/NavBar-header.css";
import React from "react";

export default function NavBar() {
  return (
    <header className="navbar-header">
        <nav className="navbar-contenido">
          <h1 className="titulo">Gestión de Alumnos</h1>
          <ul className="links">
           <li><Link to="/">Inicio</Link></li>
           <li><Link to="/acerca">Acerca de</Link></li>
           <li><Link to="/alumnos">Lista de Alumnos</Link></li>
           <li><Link to="/alumnos/nuevo">Nuevo Alumno</Link></li>
          </ul>
        </nav>
    </header>
  )
}