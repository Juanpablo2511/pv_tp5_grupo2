// src/pages/EditarAlumno.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function EditarAlumno({ alumnos, editarAlumno }) {
  const { lu } = useParams();
  const alumnoExistente = alumnos.find((a) => a.lu === lu);

  const [formData, setFormData] = useState(alumnoExistente || {});
  const navigate = useNavigate();

  useEffect(() => {
    if (!alumnoExistente) navigate("/Alumnos");
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    editarAlumno(lu, formData);
    navigate("/Alumnos");
  };

  if (!alumnoExistente) return null;

  return (
    <div>
      <h2>Editar Alumno: {lu}</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((campo) => (
          <div key={campo}>
            <label>{campo.toUpperCase()}:</label>
            <input
              type="text"
              name={campo}
              value={formData[campo]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
}
