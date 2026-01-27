import Navbar from '../components/navbar'
import { Outlet, ScrollRestoration } from 'react-router'
import Footer from '../components/Footer'
import './Layout.css'

function Layout() {
  return (
    <div className='layout-container'>
      <Navbar />
      <ScrollRestoration />
      <div className='content'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout