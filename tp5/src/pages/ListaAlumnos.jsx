import React , {useState} from "react";
import AlumnoCard from "../components/AlumnoCard";
import { alumnos as alumnosData } from "../data/alumnos";

const ListaAlumnos = () => {
    const [alumnos,setAlumnos]= useState (alumnosData);
    
    const handleDelete = (lu) =>{
        setAlumnos(alumnos.filter(alumno => alumno.lu !==lu));
    }

    return (
        <div>
            <h2>Lista de Alumnos</h2>
            {alumnos.map(alumno => (
                <AlumnoCard key={alumno.lu} alumno={alumno} onDelete={handleDelete} />
            ))}
        </div>
    )
}

export default ListaAlumnos;