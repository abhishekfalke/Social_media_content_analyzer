import { Link, NavLink, useNavigate } from 'react-router'
import './Navbar.css'
import logo from '../assets/logo.webp'

function Navbar() {
  const navigate = useNavigate()

  return (
    <nav className='navbar border-bottom sticky-top'>
      <img src={logo} alt="logo_image" />
      <ul>
        <NavLink to='/' className='navlink'><li>Home</li></NavLink>
        <NavLink to='/about' className='navlink'><li>About</li></NavLink>
        <NavLink to='/contact' className='navlink'><li>Contact</li></NavLink>
        <NavLink to='/services' className='navlink'><li>Services</li></NavLink>
        <NavLink to='/dashboard' className='navlink'><li>Dashboard</li></NavLink>
      </ul>
      <div className='me-4'>
        <button onClick={() => navigate('/signup')}>Get Started</button>
        <Link to={"/login"} className='/login'>Login</Link>
      </div>
    </nav>
  )
}

export default Navbar