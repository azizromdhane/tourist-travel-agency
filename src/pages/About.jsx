import React from 'react'
import ServicesSection from '../components/ServicesSection';

function About() {
  return (
    <div>
        <div className="container-fluid bg-primary py-5 mb-5 hero-header">
    <div className="container py-5">
      <div className="row justify-content-center py-5">
        <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
          <h1 className="display-3 text-white animated slideInDown">
            About Us
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              {/* <li className="breadcrumb-item">
                <a href="/Pages">Pages</a>
              </li> */}
              <li
                className="breadcrumb-item text-white active"
                aria-current="page"
              >
                About
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
        
            {/* About Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div
            className="col-lg-6 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ minHeight: 400 }}
          >
            <div className="position-relative h-100">
              <img
                className="img-fluid position-absolute w-100 h-100"
                src="assets/img/team.jpg"
                alt="Our Team"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <h6 className="section-title bg-white text-start text-primary pe-3">
              About Us
            </h6>
            <h1 className="mb-4 fw-bold" style={{ color: '#2d5c88', fontSize: 36 }}>
              Who We Are
            </h1>
            <p className="mb-4" style={{ fontSize: 18, color: '#333' }}>
              <a href="/" style={{ color: '#2d5c88', fontWeight: 700, textDecoration: 'underline' }}>GTGbooking.com</a> is a leading B2B hotel booking platform dedicated to empowering travel agents and agencies worldwide. Our mission is to simplify hotel reservations and provide the best value for your clients, whether they seek luxury, comfort, or affordability.
            </p>            <h4 className="fw-bold mt-4 mb-2" style={{ color: '#f9a825' }}>Why Choose Us?</h4>
            <ul style={{ fontSize: 17, color: '#2d5c88', marginBottom: 24 }}>
              <li>Access to over 1 million hotels and resorts worldwide</li>
              <li>Exclusive B2B rates and special offers</li>
              <li>Instant online booking and confirmation</li>
              <li>24/7 multilingual support for agents</li>
              <li>Easy payment by credit card or agency account</li>
              <li>Customizable solutions for travel businesses</li>
            </ul>
            <div className="bg-light p-4 rounded shadow-sm mb-4">
              <h5 className="fw-bold mb-2" style={{ color: '#2d5c88' }}>Testimonial</h5>
              <p style={{ fontStyle: 'italic', color: '#555' }}>
                “GTGbooking.com has transformed the way we serve our clients. The platform is fast, reliable, and the support team is always there when we need them!”<br />
                <span style={{ color: '#f9a825', fontWeight: 700 }}>— Sarah, Travel Agency Manager</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* About End */}
    <ServicesSection />
    {/* Team Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Travel Guide
          </h6>
          <h1 className="mb-5">Meet Our Guide</h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 wow fadeInUp d-flex justify-content-center" data-wow-delay="0.1s">
            <div className="team-item d-flex flex-column align-items-center">
              <div className="overflow-hidden d-flex justify-content-center align-items-center" style={{ width: '180px', height: '180px', borderRadius: '50%', overflow: 'hidden', background: '#f9f9f9' }}>
                <img className="img-fluid" src="assets/img/eslam.jpg" alt="Eslam" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp d-flex justify-content-center" data-wow-delay="0.3s">
            <div className="team-item d-flex flex-column align-items-center">
              <div className="overflow-hidden d-flex justify-content-center align-items-center" style={{ width: '180px', height: '180px', borderRadius: '50%', overflow: 'hidden', background: '#f9f9f9' }}>
                <img className="img-fluid" src="assets/img/martina.jpg" alt="Martina" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp d-flex justify-content-center" data-wow-delay="0.5s">
            <div className="team-item d-flex flex-column align-items-center">
              <div className="overflow-hidden d-flex justify-content-center align-items-center" style={{ width: '180px', height: '180px', borderRadius: '50%', overflow: 'hidden', background: '#f9f9f9' }}>
                <img className="img-fluid" src="assets/img/sharaf.jpg" alt="Sharaf" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Team End */}
    </div>
  )
}

export default About