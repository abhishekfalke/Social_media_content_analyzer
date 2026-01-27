import { Outlet, useNavigate } from 'react-router'
import './AuthLayout.css'
import logo from '../assets/logo.webp'

function AuthLayout() {
  const navigate = useNavigate()
  
  return (
    <div>
      <div className='navbar border-bottom sticky-top'>
        <img src={logo} alt="logo_image" />
        <button onClick={() => navigate('/')}>Go to home page</button>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout