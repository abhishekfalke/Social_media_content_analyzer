import { NavLink } from 'react-router'
import './Navbar.css'
import logo from '../assets/logo.webp'

function Navbar() {
  return (
    <nav className='navbar border-bottom sticky-top'>
      <img src={logo} alt="logo_image" />
      <ul>
        <NavLink to='/' className='navlink'><li>Home</li></NavLink>
        <NavLink to='/about' className='navlink'><li>About</li></NavLink>
        <NavLink to='/contact' className='navlink'><li>Contact</li></NavLink>
        <NavLink to='/services' className='navlink'><li>Services</li></NavLink>
        <NavLink to='/login' className='navlink'><li>Login</li></NavLink>
        <NavLink to='/signup' className='navlink'><li>Signup</li></NavLink>
      </ul>
      <button>Get Started</button>
    </nav>
  )
}

export default Navbar