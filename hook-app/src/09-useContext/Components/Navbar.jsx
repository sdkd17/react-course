import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">

        <Link to="/home" className="navbar-brand">MainApp</Link>
        
        
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink 
                to="/home"
                className={ ({ isActive }) =>  `nav-link ${ isActive ? 'active' : '' }` }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/about" 
                className={ ({ isActive }) =>  `nav-link ${ isActive ? 'active' : '' }` }
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink 
              to="/login" 
              className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }` }
            >
              LogIn
            </NavLink>
            </li>
            
          </ul>
        </div>
      
    </nav>
  )
}
