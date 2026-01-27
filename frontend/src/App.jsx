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

function App() {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/*' element={<NotFound />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Route>
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
