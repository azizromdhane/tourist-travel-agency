import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
         {/* Spinner Start */}
    {/* <div
      id="spinner"
      className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
    >
      <div
        className="spinner-border text-primary"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div> */}
    {/* Spinner End */}

    {/* Topbar Start */}
    <div className="container-fluid bg-dark px-5 d-none d-lg-block">
      <div className="row gx-0">
        <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
          <div
            className="d-inline-flex align-items-center"
            style={{ height: 45 }}
          >
            <small className="me-3 text-light">
              <i className="fa fa-map-marker-alt me-2" />
              Binary Tower 20 Floor,
office #86 Business Bay
Dubai,UAE
            </small>
            <small className="me-3 text-light">
              <i className="fa fa-phone-alt me-2" />
              +971 502 885382
            </small>
            <small className="text-light">
              <i className="fa fa-envelope-open me-2" />
              info@gtgbooking.com
            </small>
          </div>
        </div>
        <div className="col-lg-4 text-center text-lg-end">
          <div
            className="d-inline-flex align-items-center"
            style={{ height: 45 }}
          >
            <a
              className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              href="https://www.facebook.com/profile.php?id=61565885264265&rdid=a5hmNEX1bSuSJdq4&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1G4h5pyS1L%2F#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f fw-normal" />
            </a>
            <a
              className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              href="https://www.linkedin.com/in/gtg-booking-com-58158a305/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in fw-normal" />
            </a>
            <a
              className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              href="https://www.instagram.com/gtgbooking"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram fw-normal" />
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* Topbar End */}
    {/* Navbar & Hero Start */}
    <div className="container-fluid position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        <Link to="/" className="navbar-brand p-0 d-flex align-items-center justify-content-center" style={{ minHeight: 90 }}>
          <img
            src="https://www.gtgbooking.com/project_folder/project_otrams/assets/theme_2//images/gtgbooking_logo.svg"
            className="img-responsive sitelogo"
            alt="GTG Booking logo"
            title="GTG Booking"
            style={{ maxHeight: 80, width: 'auto', display: 'block' }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <Link to="/" className="nav-item nav-link">
              Home
            </Link>
            <Link to="/About" className="nav-item nav-link">
              About
            </Link>
            <Link to="/Services" className="nav-item nav-link">
              Services
            </Link>
            <Link to="/Packages" className="nav-item nav-link">
              Packages
            </Link>
            <div className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </Link>
              <div className="dropdown-menu m-0">
                <Link to="/Destination" className="dropdown-item">
                  Destination
                </Link>
                <Link to="/Booking" className="dropdown-item">
                  Booking
                </Link>
                <Link to="/Team" className="dropdown-item">
                  Travel Guides
                </Link>
                <Link to="/Testimonial" className="dropdown-item">
                  Testimonial
                </Link>
                <Link to="/Error" className="dropdown-item">
                  404 Page
                </Link>
              </div>
            </div>
            <Link to="/Contact" className="nav-item nav-link">
              Contact
            </Link>
          </div>
          <a href="https://www.gtgbooking.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary rounded-pill py-2 px-4">
            Go to System
          </a>
        </div>
      </nav>
    </div>
    {/* Navbar & Hero End */}
    </div>
  )
}

export default Header