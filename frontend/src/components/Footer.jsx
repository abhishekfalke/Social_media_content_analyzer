import './Footer.css'
import { NavLink } from 'react-router'

function Footer() {
  return (
    <footer className="bg-light footer text-dark pt-4 mt-5">
      <div className="container">
        <div className="row pb-4 text-center">

          <div className="col-md-4 ps-4 pe-4">
            <h5>Social Media Content Analyzer</h5>
            <p className="small">
              AI-powered web application that analyzes content and suggests engagement improvements.
            </p>
          </div>

          <div className="col-md-4 ps-4 pe-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled routes">
              <NavLink to='/' className='text-dark'><li>Home</li></NavLink>
              <NavLink to="/contact" className="text-dark"><li>Contact</li></NavLink>
              <NavLink to="/about" className="text-dark"><li>About us</li></NavLink>
              <NavLink to="/services" className="text-dark"><li>Our services</li></NavLink>
            </ul>
          </div>

          <div className="col-md-4 ps-4 pe-4 tech-stack">
            <h5>Tech Stack</h5>
            <ul className="list-unstyled">
              <li><a href="https://www.mongodb.com/docs/" className="text-dark">MongoDB</a></li>
              <li><a href="" className="text-dark">React</a></li>
              <li><a href="" className="text-dark">Node.js</a></li>
              <li><a href="" className="text-dark">Express</a></li>
            </ul>
          </div>

        </div>

        <div className='row text-center p-4 border-top'>
          <div className='col-6'>
            <span className="mb-0">© 2026 Social Media Content Analyzer | All Rights Reserved</span>
          </div>
          <div className='col-6 social-links'>
            <a href="/facebook"> <i className="fa-brands fa-facebook"></i></a>
            <a href="/twitter"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="/instagram"><i className="fa-brands fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

