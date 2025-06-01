import { Link } from "react-router-dom";
import "../css/AlumnoCard.css";

const AlumnoCard = ({alumno, onDelete}) => (
    <div className="container">
        <div className="card">
         <h3>{alumno.nombre} {alumno.apellido}</h3>
         <p><strong>LU:</strong>{alumno.lu}</p>
         <p><strong>Curso:</strong>{alumno.curso}</p>
         <div className="card-botones">
            <Link to={'/alumnos/${alumno.lu}'}>Ver Detalles</Link>
            <Link to={'/alumnos/${alumno.lu}/editar'}>Editar</Link>
            <button onClick={()=>{
                if(window.confirm("¿Estás seguro de eliminar a ${alumno.nombre}?")){
                    onDelete (alumno.lu);
                }
            }}>Eliminar
            </button>
         </div>
        </div>
    </div>
)

export default AlumnoCard;