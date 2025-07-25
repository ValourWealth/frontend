import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/full-transparent.png";
import SecondNav from "../components/secondNav";
import "../styles/navbar.css";
import "../styles/variable.css";
import ForexTicker from "./forexTicker";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const closeNavbar = () => setIsOpen(false);

  return (
    <>
      {/* forex ticker component */}
      <ForexTicker />
      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            <img
              src={logo}
              alt="ValourWealth Logo"
              height="40"
              className="me-2"
            />
          </Link>

          <div className="login_mbl d-flex">
            <button
              className={`navbar-toggler ${isOpen ? "" : "collapsed"}`}
              type="button"
              onClick={handleToggle}
              aria-controls="navbarNav"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* Login and demo  Button */}
            {/* <button className="btn-login-mobile d-lg-none d-md-block me-2">
              <a href="/login" className="text-decoration-none text-white">Login</a>
             </button> */}
            <button className="btn-login-mobile d-lg-none d-md-block">
              <a
                href="/request-a-demo"
                className="text-decoration-none text-white"
              >
                Request Demo
              </a>
            </button>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/affiliate" onClick={closeNavbar}>
                Affiliate
              </Link>
            </li> */}
          </div>

          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={closeNavbar}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/features" onClick={closeNavbar}>
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" onClick={closeNavbar}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/customer-support"
                  onClick={closeNavbar}
                >
                  Customer Support
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/affiliate"
                  onClick={closeNavbar}
                >
                  Affiliate
                </Link>
              </li>
              {/* <li className="nav-item"><Link className="nav-link" to="/our-analyst" onClick={closeNavbar}>Our Analysts</Link></li> */}
              <li className="nav-item">
                <Link
                  className="theme_btn d-lg-block d-none mx-2"
                  to="/request-a-demo"
                  onClick={closeNavbar}
                >
                  Request Demo
                </Link>
              </li>
              <li className="nav-item">
                <Link className="theme_btn" to="/login" onClick={closeNavbar}>
                  My Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Second Navbar (Header Below) */}
      <SecondNav />
    </>
  );
};

export default Navbar;
