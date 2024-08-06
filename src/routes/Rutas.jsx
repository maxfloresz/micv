import { Navigate, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Repositorio from "../pages/Repositorio"

const Rutas = () => {
  return (
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/respositorio" element={ <Repositorio />} />
        <Route path="" element={ <Navigate to="/home" />} />
    </Routes>
  )
}

export default Rutas