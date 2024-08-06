import { Navigate, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Repositorio from "../pages/Repositorio"

const Rutas = () => {
  return (
    <Routes>
        <Route path="/micv/home" element={<Home />} />
        <Route path="/micv/respositorio" element={ <Repositorio />} />
        <Route path="/micv" element={ <Navigate to="/micv/home" />} />
    </Routes>
  )
}

export default Rutas