import React from 'react'

export default function Footer() {
  return (
    <div>
           {/* Footer Start */}
    <div
      className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        {/* Ajout du logo comme dans le Header */}
        <div className="row mb-4 justify-content-center">
          <div className="col-auto">
            <a href="/" className="navbar-brand p-0 d-flex align-items-center justify-content-center" style={{ minHeight: 90 }}>
              <img
                src="https://www.gtgbooking.com/project_folder/project_otrams/assets/theme_2//images/gtgbooking_logo.svg"
                className="img-responsive sitelogo"
                alt="GTG Booking logo"
                title="GTG Booking"
                style={{ maxHeight: 80, width: 'auto', display: 'block' }}
              />
            </a>
          </div>
        </div>
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-3">Company</h4>
            <a className="btn btn-link" href="/">
              About Us
            </a>
            <a className="btn btn-link" href="/">
              Contact Us
            </a>
            <a className="btn btn-link" href="/">
              Privacy Policy
            </a>
            <a className="btn btn-link" href="/">
              Terms &amp; Condition
            </a>
            <a className="btn btn-link" href="/">
              FAQs &amp; Help
            </a>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-3">Contact</h4>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt me-3" />
              Binary Tower 20 Floor,
office #86 Business Bay
Dubai,UAE
            </p>
            <p className="mb-2">
              <i className="fa fa-phone-alt me-3" />
              +971 502 885382
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope me-3" />
              info@gtgbooking.com
            </p>
            <div className="d-flex pt-2">
              {/* Liens sociaux identiques au Header */}
              <a
                className="btn btn-outline-light btn-social me-2"
                href="https://www.facebook.com/profile.php?id=61565885264265&rdid=a5hmNEX1bSuSJdq4&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1G4h5pyS1L%2F#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f fw-normal" />
              </a>
              <a
                className="btn btn-outline-light btn-social me-2"
                href="https://www.linkedin.com/in/gtg-booking-com-58158a305/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in fw-normal" />
              </a>
              <a
                className="btn btn-outline-light btn-social me-2"
                href="https://www.instagram.com/gtgbooking"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram fw-normal" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-3">Gallery</h4>
            <div className="row g-2 pt-2">
              <div className="col-4">
                <img
                  className="img-fluid bg-light p-1"
                  src="assets/img/package-1.jpg"
                  alt=""
                />
              </div>
              <div className="col-4">
                <img
                  className="img-fluid bg-light p-1"
                  src="assets/img/package-2.jpg"
                  alt=""
                />
              </div>
              <div className="col-4">
                <img
                  className="img-fluid bg-light p-1"
                  src="assets/img/package-3.jpg"
                  alt=""
                />
              </div>
              <div className="col-4">
                <img
                  className="img-fluid bg-light p-1"
                  src="assets/img/package-2.jpg"
                  alt=""
                />
              </div>
              <div className="col-4">
                <img
                  className="img-fluid bg-light p-1"
                  src="assets/img/package-3.jpg"
                  alt=""
                />
              </div>
              <div className="col-4">
                <img
                  className="img-fluid bg-light p-1"
                  src="assets/img/package-1.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-3">Newsletter</h4>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div
              className="position-relative mx-auto"
              style={{ maxWidth: 400 }}
            >
              <input
                className="form-control border-primary w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
              />
              <button
                type="button"
                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              ©{" "}
              <a className="border-bottom" href="#">
                GTG-BOOKING
              </a>
              , All Right Reserved.
              Designed By{" "}
              <a className="border-bottom" href="https://github.com/ParasSalunke">
                Paras Salunke
              </a>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <a href="/">Home</a>
                <a href="/">Cookies</a>
                <a href="/">Help</a>
                <a href="/">FQAs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Footer End */}
    </div>
  )
}
