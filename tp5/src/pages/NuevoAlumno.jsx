// src/pages/NuevoAlumno.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom"

export default function NuevoAlumno() {
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
    <form onSubmit={handleSubmit}>
      <input name="id" placeholder="LU" onChange={handleChange} required />
      <input name="nombre" placeholder="Nombre" onChange={handleChange} required />
      <input name="apellido" placeholder="Apellido" onChange={handleChange} required />
      <input name="curso" placeholder="Curso" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="domicilio" placeholder="Domicilio" onChange={handleChange} />
      <input name="telefono" placeholder="Teléfono" onChange={handleChange} />
      <button type="submit">Guardar</button>
    </form>
  );
}
