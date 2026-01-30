import { Outlet, ScrollRestoration } from 'react-router'
import Footer from '../components/Footer'
import './Layout.css'
import DashboardNavbar from '../components/DashboardNavbar'

function DashboardLayout() {
  return (
    <div className='layout-container'>
      <DashboardNavbar />
      <ScrollRestoration />
      <div className='content'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default DashboardLayout