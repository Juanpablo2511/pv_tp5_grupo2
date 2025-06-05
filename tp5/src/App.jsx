
import React , {useState} from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ListaAlumnos from "./pages/ListaAlumnos";
import Acerca from "./pages/Acerca";
import NavBar from "./components/NavBar";
import DetalleAlumno from "./pages/DetalleAlumno"
import EditarAlumno from "./pages/EditarAlumno";
import NuevoAlumno from "./pages/NuevoAlumno";

export default function App() {
  const [alumnos,setAlumnos] = useState([
    {
        lu:"APU00999",
        nombre:"Maria Eugenia",
        apellido: "Diaz",
        curso: "Tercero",
        email: "mariadiaz@gmail.com",
        domicilio: "Av. Congreso 125",
        telefono: "3886489657",
    },
    {
        lu:"APU001",
        nombre:"Nadia Evangelina",
        apellido: "Fernandez",
        curso: "Tercero",
        email: "nadia@gmail.com",
        domicilio: "Av.Peron 120",
        telefono: "3886980987",
    },
    {
        lu:"APU002",
        nombre:"Juan Pablo",
        apellido: "Farfan",
        curso: "Tercero",
        email: "juan@gmail.com",
        domicilio: "Av. ",
        telefono: "3885123956",
    },
    {
        lu:"APU003",
        nombre:"Matias",
        apellido: "Quispe",
        curso: "Tercero",
        email: "matias@gmail.com",
        domicilio: "Av. ",
        telefono: "3885984372",
    },
    

  ])

  const editarAlumno = (lu, nuevosDatos) =>{
    setAlumnos (
      alumnos.map ((alumno)=>
      alumno.lu === lu ? { ...alumno, ...nuevosDatos} : alumno )
    )
   }

  const eliminarAlumno = (lu) => {
    setAlumnos(alumnos.filter(alumno => alumno.lu !== lu));
  }

  const agregarAlumno =(nuevoAlumno) =>{
    setAlumnos([...alumnos, nuevoAlumno]);
  }

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alumnos" element={<ListaAlumnos alumnos={alumnos} eliminarAlumno={eliminarAlumno}/>} />
        <Route path="/alumnos/:lu" element={<DetalleAlumno alumnos={alumnos}/>} />
        <Route path="/alumnos/:lu/editar" element={<EditarAlumno alumnos={alumnos} editarAlumno={editarAlumno}/>} />
        <Route path="/alumnos/nuevo" element={<NuevoAlumno agregarAlumno={agregarAlumno} />} />
        <Route path="/acerca" element={<Acerca />} />
      </Routes>
    </div>
  )
}




