import React , {useState} from "react";
import AlumnoCard from "../components/AlumnoCard";
import Titulo from "../components/Titulo";


const ListaAlumnos = ({alumnos, eliminarAlumno }) => {
    
    return (
        <div>
            <Titulo texto="Lista de Alumnos" />
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