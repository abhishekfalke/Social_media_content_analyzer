import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Layout from './layout/layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import 'react-toastify/dist/ReactToastify.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import NotFound from './components/NotFound'

function App() {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='services' element={<Services />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
