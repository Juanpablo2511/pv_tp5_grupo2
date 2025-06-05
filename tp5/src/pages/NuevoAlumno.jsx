// src/pages/NuevoAlumno.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import "../css/NuevoAlumno.css"
import { Link } from 'react-router-dom';
export default function NuevoAlumno({agregarAlumno}) {
  const [alumno, setAlumno] = useState({
    id: "",
    nombre: "",
    apellido: "",
    curso: "",
    email: "",
    domicilio: "",
    telefono: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setAlumno({ ...alumno, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarAlumno(alumno);
    // Aquí deberías guardar el alumno en algún almacenamiento o estado global
    alert("Alumno guardado");
    navigate("/Alumnos");
  };

  return (
    <div className="formulario">
    <form  onSubmit={handleSubmit}>
       <h4>Nuevo Alumno</h4>
       <input className="control" name="id" placeholder="LU" type="text" onChange={handleChange} required />
       <input className="control" name="nombre" placeholder="Nombre" type="text"  onChange={handleChange} required />
       <input className="control" name="apellido" placeholder="Apellido" type="text"  onChange={handleChange} required />
       <input className="control" name="curso" placeholder="Curso" type="text"  onChange={handleChange} />
       <input className="control" name="email" placeholder="Email" type="email" onChange={handleChange} />
       <input className="control" name="domicilio" placeholder="Domicilio" type="text"  onChange={handleChange} />
       <input className="control" name="telefono" placeholder="Teléfono" type="text"  onChange={handleChange} />
       <button className="boton" type="submit">Guardar</button>
       <div className="link-volver">
       <Link to="/Alumnos">← Volver a la lista</Link>
       </div>
    </form>
</div>
    
  );
}
