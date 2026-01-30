import './App.css'
import { createBrowserRouter, createRoutesFromElements, Routes, Route, RouterProvider } from 'react-router'
import Layout from './layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import 'react-toastify/dist/ReactToastify.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import NotFound from './components/NotFound'
import AuthLayout from './layout/AuthLayout'
import Dashboard from './pages/Dashboard'
import DashboardLayout from './layout/DashboardLayout'
import Upload from './pages/Upload'
import History from './pages/History'
import Error from './components/Error'

function App() {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
        </Route>

        <Route element={<DashboardLayout />} errorElement={<Error />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/upload' element={<Upload />} />
          <Route path='/history' element={<History />} />
        </Route>


        <Route element={<AuthLayout />} errorElement={<Error />}>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Route>

        <Route path='/*' element={<NotFound />} />
      </>
    )
  )
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
