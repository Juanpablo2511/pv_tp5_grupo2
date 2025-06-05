import React , {useState} from "react";
import AlumnoCard from "../components/AlumnoCard";


const ListaAlumnos = ({alumnos, eliminarAlumno }) => {
    
    return (
        <div>
            <h2>Lista de Alumnos</h2>
            {alumnos.length === 0 ? (
                <p>No hay alumnos registrados</p> ) : (
                    alumnos.map(alumno => (
                        <AlumnoCard key={alumno.lu} alumno={alumno} onDelete={eliminarAlumno} />
                ))
            )}
            
        
        </div>
    )
}

export default ListaAlumnos;
