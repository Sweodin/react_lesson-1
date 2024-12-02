import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='navbar'>
            <div className='nav-content'>
                <Link to="/" className='nav-brand'>
                    The store for your pleasure
                </Link>
                <ul className='nav-links'>
                    <li>
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                            end
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/about" 
                            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/contact" 
                            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                        >
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/fun" 
                            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                        >
                            Fun
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/color" 
                            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                        >
                            Color
                        </NavLink>
                        </li>
                        <li>
                        <NavLink 
                            to="/TodoList" 
                            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                        >
                            To do List
                        </NavLink>
                    </li>
                    
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;