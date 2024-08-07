import { NavLink } from "react-router-dom"

import './NavBar.css'
import { useState } from "react"

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = () => {
        setIsOpen(!isOpen)
    }
  return (
    <nav className="navbar">
        <div className="logo">MAX FLORES</div>
        <div className={`items ${isOpen ? 'open' : ''}`}>
            <NavLink to="/micv/home">Home</NavLink>
            <NavLink to="/micv/repositorio">Repositorio</NavLink>
            <NavLink to="/micv/contacto">Contacto</NavLink>
        </div>
        <div className={`icono ${isOpen ? 'open' : ''}`} onClick={handleOpen}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </nav>
  )
}

export default NavBar