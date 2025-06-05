// src/pages/DetalleAlumno.jsx
import { useParams, Link } from "react-router-dom";

export default function DetalleAlumno({ alumnos }) {
  const { lu } = useParams();
  const alumno = alumnos.find((a) => a.lu === lu);

  if (!alumno) return <p>Alumno no encontrado</p>;

  return (
    <div>
      <h2>Detalle del Alumno: {alumno.nombre} {alumno.apellido}</h2>
      <ul>
        <li><b>LU:</b> {alumno.lu}</li>
        <li><b>Curso:</b> {alumno.curso}</li>
        <li><b>Email:</b> {alumno.email}</li>
        <li><b>Domicilio:</b> {alumno.domicilio}</li>
        <li><b>Teléfono:</b> {alumno.telefono}</li>
      </ul>
      <Link to="/Alumnos">← Volver a la lista</Link>
    </div>
  );
}
