import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="navbar">
        <div className="logo"></div>
        <div className="items">
            <NavLink to="/micv/home">Home</NavLink>
            <NavLink to="/micv/repositorio">Repositorio</NavLink>
        </div>
    </nav>
  )
}

export default NavBar