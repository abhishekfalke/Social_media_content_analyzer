import { Link, NavLink, useNavigate } from "react-router";
import "./Navbar.css";
import logo from "../assets/logo.webp";
import axios from "axios";
const API = import.meta.env.VITE_BACKEND_URL

function DashboardNavbar() {
  const navigate = useNavigate();

  const Logout = async () => {
    console.log('API: ', API);

    const res = await axios.post(`${API}/logout`, {}, {
      withCredentials: true
    });
    console.log(res)
    navigate("/login");
  };

  return (
    <nav className="navbar border-bottom sticky-top">
      <img src={logo} alt="logo_image" />
      <ul>
        <NavLink to="/dashboard" className="navlink"><li>Dashboard</li></NavLink>
        <NavLink to="/upload" className="navlink"><li>Upload</li></NavLink>
        <NavLink to="/history" className="navlink"><li>History</li></NavLink>
        <NavLink to="/" className="navlink"><li>Go to Home</li></NavLink>
      </ul>
      <div className="go_to_container">
        <button onClick={Logout}>LOGOUT</button>
      </div>
    </nav>
  );
}

export default DashboardNavbar;
