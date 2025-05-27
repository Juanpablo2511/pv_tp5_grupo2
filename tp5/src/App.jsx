import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Acerca from "./pages/Acerca"
import NavBar from "./components/NavBar"

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acerca" element={<Acerca />} />
      </Routes>
    </div>
  )
}
