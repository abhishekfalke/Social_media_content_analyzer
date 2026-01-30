import { Link, NavLink, useNavigate } from "react-router";
import "./Navbar.css";
import logo from "../assets/logo.webp";
import axios from "axios";
import { useEffect, useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const Logout = async () => {
    await axios.post("http://localhost:8080/logout", {}, {
      withCredentials: true
    });
    navigate("/login");
  };

  useEffect(() => {
    const verifyUser = async () => {
      const { data } = await axios.get(
        "http://localhost:8080",
        { withCredentials: true }
      );

      const { status } = data;
      setIsLoggedIn(status);
    };

    verifyUser();
  }, []);

  return (
    <nav className="navbar border-bottom sticky-top">
      <img src={logo} alt="logo_image" />
        <ul>
          <NavLink to="/" className="navlink"><li>Home</li></NavLink>
          <NavLink to="/about" className="navlink"><li>About Us</li></NavLink>
          <NavLink to="/contact" className="navlink"><li>Contact</li></NavLink>
          <NavLink to="/services" className="navlink"><li>Our Services</li></NavLink>
        </ul>
        {
          isLoggedIn ? 
          <div className="go_to_container">
            <Link to="/dashboard" className="go_to btn btn-outline-primary">Go to dashboard</Link>
            <button onClick={Logout}>LOGOUT</button>
          </div> :
          <div className="go_to_container">
            <button onClick={() => navigate("/signup")}>Get Started</button>
            <Link to="/login" className="login">Login</Link>
          </div>
        }
    </nav>
  );
}

export default Navbar;
