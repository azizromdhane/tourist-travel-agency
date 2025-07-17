import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ServicesSection from '../components/ServicesSection';

export default function Home() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (window.$ && window.$.fn.datetimepicker) {
      window.$('#datetime').datetimepicker();
    }
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      // Format: lowercase, remove spaces
      const dest = search.trim().toLowerCase().replace(/\s+/g,'');
      navigate(`/destination/${dest}`);
    }
  };

  return (
    <div>
      <div
        className="container-fluid py-5 mb-5 hero-header"
        style={{
          background: `linear-gradient(90deg, rgba(45,92,136,0.65) 0%, rgba(249,168,37,0.45) 100%), url('assets/img/booki.jpg') center center / cover no-repeat`,
          position: 'relative',
          minHeight: 320,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="container py-5" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h1
                className="display-3 text-white mb-3 animated slideInDown"
                style={{
                  textShadow: '0 4px 24px rgba(45,92,136,0.18), 0 2px 8px rgba(249,168,37,0.10)',
                  background: 'rgba(0,0,0,0.10)',
                  borderRadius: 12,
                  display: 'inline-block',
                  padding: '0.25em 1em'
                }}
              >
                Enjoy Your Vacation With Us
              </h1>
              <p
                className="fs-4 text-white mb-4 animated slideInDown"
                style={{
                  textShadow: '0 2px 8px rgba(45,92,136,0.12)',
                  background: 'rgba(0,0,0,0.08)',
                  borderRadius: 8,
                  display: 'inline-block',
                  padding: '0.25em 1em'
                }}
              >
                Plan your dream vacation with us and explore the world’s most beautiful destinations.
              </p>
              <div className="position-relative w-75 mx-auto animated slideInDown">
                <form onSubmit={handleSearch} className="position-relative w-75 mx-auto animated slideInDown">
                  <input
                    className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5"
                    type="text"
                    placeholder="Eg: Paris"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2"
                    style={{ marginTop: 7 }}
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
            {/* About Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{ minHeight: 400 }}>
            <div className="position-relative h-100">
              <img
                className="img-fluid position-absolute w-100 h-100"
                src="assets/img/team1.jpg"
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
              About Us
            </h1>
            <p className="mb-4" style={{ fontSize: 18, color: '#333' }}>
              Looking for a hotel reservation system? Our <b>B2B platform</b> offers over <b>1 million lodging options</b> to choose from, with online booking and special offers to help you secure the best hotel price. Whether you're searching for budget hotels or luxury resorts, our platform makes it easy to reserve accommodation with confidence and ease.<br /><br />
              <a href="/" style={{ color: '#2d5c88', fontWeight: 700, textDecoration: 'underline' }}>GTGbooking.com</a> is the B2B booking portal for travel agents and agencies looking to book the best hotels for their clients.<br /><br />
              Use your credit card to pay for your client’s reservation and get <b>instant confirmation</b>!
            </p>
            <a className="btn btn-primary py-3 px-5 mt-2" href="/about">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* About End */}
    {/* Service Start */}
    <ServicesSection />
    {/* Service End */}
    {/* Destination Start */}
    <div className="container-xxl py-5 destination">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Destinations
          </h6>
          <h1 className="mb-5">Our Top Destinations</h1>
        </div>
        <div className="row g-4 justify-content-center">
          {/* London */}
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
            <div className="card border-0 shadow h-100">
              <img src="assets/img/london.jpeg" className="card-img-top" alt="London" style={{ height: 220, objectFit: 'cover' }} />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">London</h5>
                <p className="card-text">Discover the charm of London, from historic landmarks like Big Ben and Buckingham Palace to vibrant markets and world-class museums.</p>
                <a href="/destinations/london" className="btn btn-primary btn-sm mt-2">View Details</a>
              </div>
            </div>
          </div>
          {/* Maldives */}
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.2s">
            <div className="card border-0 shadow h-100">
              <img src="assets/img/maldives.jpg" className="card-img-top" alt="Maldives" style={{ height: 220, objectFit: 'cover' }} />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">Maldives</h5>
                <p className="card-text">Experience paradise on earth with crystal-clear waters, white sandy beaches, and luxurious resorts in the Maldives.</p>
                <a href="/destinations/maldives" className="btn btn-primary btn-sm mt-2">View Details</a>
              </div>
            </div>
          </div>
          {/* New York */}
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
            <div className="card border-0 shadow h-100">
              <img src="assets/img/new york.jpg" className="card-img-top" alt="New York" style={{ height: 220, objectFit: 'cover' }} />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">New York</h5>
                <p className="card-text">Explore the city that never sleeps, from the Statue of Liberty and Central Park to Broadway shows and iconic skyscrapers.</p>
                <a href="/destinations/newyork" className="btn btn-primary btn-sm mt-2">View Details</a>
              </div>
            </div>
          </div>
          {/* Kuwait */}
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.4s">
            <div className="card border-0 shadow h-100">
              <img src="assets/img/kuwait.jpg" className="card-img-top" alt="Kuwait" style={{ height: 220, objectFit: 'cover' }} />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">Kuwait</h5>
                <p className="card-text">Visit Kuwait for a blend of modern architecture, rich culture, and beautiful Arabian Gulf coastline.</p>
                <a href="/destinations/kuwait" className="btn btn-primary btn-sm mt-2">View Details</a>
              </div>
            </div>
          </div>
          {/* Dubai */}
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.5s">
            <div className="card border-0 shadow h-100">
              <img src="assets/img/dubai.jpg" className="card-img-top" alt="Dubai" style={{ height: 220, objectFit: 'cover' }} />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">Dubai</h5>
                <p className="card-text">Marvel at Dubai’s futuristic skyline, luxury shopping, desert adventures, and world-famous attractions like the Burj Khalifa.</p>
                <a href="/destinations/dubai" className="btn btn-primary btn-sm mt-2">View Details</a>
              </div>
            </div>
          </div>
          {/* Paris */}
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
            <div className="card border-0 shadow h-100">
              <img src="assets/img/paris.jpg" className="card-img-top" alt="Paris" style={{ height: 220, objectFit: 'cover' }} />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">Paris</h5>
                <p className="card-text">Experience the romance of Paris, stroll along the Seine, visit the Eiffel Tower, and enjoy world-class cuisine and art.</p>
                <a href="/destinations/paris" className="btn btn-primary btn-sm mt-2">View Details</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Destination Start */}
    {/* Package Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Packages
          </h6>
          <h1 className="mb-5">Awesome Packages</h1>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="package-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/package-1.jpg" alt="" />
              </div>
              <div className="d-flex border-bottom">
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-map-marker-alt text-primary me-2" />
                  Thailand
                </small>
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-calendar-alt text-primary me-2" />3 days
                </small>
                <small className="flex-fill text-center py-2">
                  <i className="fa fa-user text-primary me-2" />2 Person
                </small>
              </div>
              <div className="text-center p-4">
                <p>
                  Discover the wonders of Thailand with our exclusive package. Enjoy beautiful beaches, vibrant cities, and unforgettable cultural experiences.
                </p>
                <div className="d-flex justify-content-center mb-2">
                  <a
                    href="#"
                    className="btn btn-sm btn-primary px-3 border-end"
                    style={{ borderRadius: "30px 0 0 30px" }}
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="package-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/package-2.jpg" alt="" />
              </div>
              <div className="d-flex border-bottom">
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-map-marker-alt text-primary me-2" />
                  Indonesia
                </small>
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-calendar-alt text-primary me-2" />3 days
                </small>
                <small className="flex-fill text-center py-2">
                  <i className="fa fa-user text-primary me-2" />2 Person
                </small>
              </div>
              <div className="text-center p-4">
                <p>
                  Explore the magic of Indonesia. From tropical islands to rich traditions, this package offers the perfect getaway for adventure and relaxation.
                </p>
                <div className="d-flex justify-content-center mb-2">
                  <a
                    href="#"
                    className="btn btn-sm btn-primary px-3 border-end"
                    style={{ borderRadius: "30px 0 0 30px" }}
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="package-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/package-3.jpg" alt="" />
              </div>
              <div className="d-flex border-bottom">
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-map-marker-alt text-primary me-2" />
                  Malaysia
                </small>
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-calendar-alt text-primary me-2" />3 days
                </small>
                <small className="flex-fill text-center py-2">
                  <i className="fa fa-user text-primary me-2" />2 Person
                </small>
              </div>
              <div className="text-center p-4">
                <p>
                  Experience the best of Malaysia. Enjoy stunning landscapes, delicious cuisine, and a unique blend of modern and traditional attractions.
                </p>
                <div className="d-flex justify-content-center mb-2">
                  <a
                    href="#"
                    className="btn btn-sm btn-primary px-3 border-end"
                    style={{ borderRadius: "30px 0 0 30px" }}
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Package End */}
    {/* Booking Start */}
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="booking p-5">
          <div className="row g-5 align-items-center">
            <div className="col-md-6 text-white">
              <h6 className="text-white text-uppercase">Booking</h6>
              <h1 className="text-white mb-4">Online Booking</h1>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <a className="btn btn-outline-light py-3 px-5 mt-2" href="">
                Read More
              </a>
            </div>
            <div className="col-md-6">
              <h1 className="text-white mb-4">Book A Tour</h1>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control bg-transparent"
                        id="name"
                        placeholder="Your Name"
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control bg-transparent"
                        id="email"
                        placeholder="Your Email"
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="form-floating date"
                      id="date3"
                      data-target-input="nearest"
                    >
                      <input
                        type="text"
                        className="form-control bg-transparent datetimepicker-input"
                        id="datetime"
                        placeholder="Date & Time"
                        data-target="#date3"
                        data-toggle="datetimepicker"
                      />
                      <label htmlFor="datetime">Date &amp; Time</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <select
                        className="form-select bg-transparent"
                        id="select1"
                      >
                        <option value={1}>Destination 1</option>
                        <option value={2}>Destination 2</option>
                        <option value={3}>Destination 3</option>
                      </select>
                      <label htmlFor="select1">Destination</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control bg-transparent"
                        placeholder="Special Request"
                        id="message"
                        style={{ height: 100 }}
                        defaultValue={""}
                      />
                      <label htmlFor="message">Special Request</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-outline-light w-100 py-3"
                      type="submit"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Booking Start */}
    {/* Process Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Process
          </h6>
          <h1 className="mb-5">3 Easy Steps</h1>
        </div>
        <div className="row gy-5 gx-4 justify-content-center">
          <div
            className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="position-relative border border-primary pt-5 pb-4 px-4">
              <div
                className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                style={{ width: 100, height: 100 }}
              >
                <i className="fa fa-globe fa-3x" style={{ color: '#2d5c88', background: '#f9a825', borderRadius: '50%', padding: 16 }} />
              </div>
              <h5 className="mt-4">Choose a Destination</h5>
              <hr className="w-25 mx-auto bg-primary mb-1" />
              <hr className="w-50 mx-auto bg-primary mt-0" />
              <p className="mb-0">
                Select your dream destination from our wide range of options and start planning your perfect trip.
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="position-relative border border-primary pt-5 pb-4 px-4">
              <div
                className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                style={{ width: 100, height: 100 }}
              >
                <i className="fa fa-dollar-sign fa-3x" style={{ color: '#f9a825', background: '#2d5c88', borderRadius: '50%', padding: 16 }} />
              </div>
              <h5 className="mt-4">Pay Online</h5>
              <hr className="w-25 mx-auto bg-primary mb-1" />
              <hr className="w-50 mx-auto bg-primary mt-0" />
              <p className="mb-0">
                Pay securely online in US Dollars (USD) or UAE Dirham (AED) using your preferred payment method.
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <div className="position-relative border border-primary pt-5 pb-4 px-4">
              <div
                className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                style={{ width: 100, height: 100 }}
              >
                <i className="fa fa-plane fa-3x" style={{ color: '#2d5c88', background: '#f9a825', borderRadius: '50%', padding: 16 }} />
              </div>
              <h5 className="mt-4">Fly Today</h5>
              <hr className="w-25 mx-auto bg-primary mb-1" />
              <hr className="w-50 mx-auto bg-primary mt-0" />
              <p className="mb-0">
                Get ready to travel! Enjoy a seamless journey and unforgettable experiences with us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Process Start */}
    {/* Team Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Travel Guide
          </h6>
          <h1 className="mb-5">Meet Our Guide</h1>
        </div>
        <div className="row g-4" style={{transform: 'translateX(100px)'}}>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/eslam.jpg" alt="" />
              </div>
              <div
                className="position-relative d-flex justify-content-center"
                style={{ marginTop: "-19px" }}
              >
              </div>
          
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="team-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/martina.jpg" alt="" />
              </div>
              <div
                className="position-relative d-flex justify-content-center"
                style={{ marginTop: "-19px" }}
              >
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="team-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/sharaf.jpg" alt="" />
              </div>
              <div
                className="position-relative d-flex justify-content-center"
                style={{ marginTop: "-19px" }}
              >

              </div>
            
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="team-item">
            
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Team End */}
    {/* Testimonial Start */}
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="text-center">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Testimonial
          </h6>
          <h1 className="mb-5">How You Use Our System</h1>
          <div className="mb-5 d-flex justify-content-center" style={{transform: 'translateX(30px)'}}>
            <div style={{maxWidth: '700px', width: '100%'}}>
              <iframe
                src="https://drive.google.com/file/d/1-juYkEbxyc0ZTRrAgK-aLo9qF9gWRs1K/preview"
                width="100%"
                height="400"
                allow="autoplay"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 0.5rem 1rem rgba(0,0,0,0.08)',
                  width: '100%',
                  minHeight: 300,
                  border: 'none'
                }}
                title="How You Use Our System Video"
              />
            </div>
          </div>
        </div>
        <div className="owl-carousel testimonial-carousel position-relative">
          <div className="testimonial-item bg-white text-center border p-4">
            <img
              className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
              src="assets/img/testimonial-1.jpg"
              style={{ width: 80, height: 80 }}
            />
            <h5 className="mb-0">John Doe</h5>
            <p>New York, USA</p>
            <p className="mb-0">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
              amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
          </div>
          <div className="testimonial-item bg-white text-center border p-4">
            <img
              className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
              src="assets/img/testimonial-2.jpg"
              style={{ width: 80, height: 80 }}
            />
            <h5 className="mb-0">John Doe</h5>
            <p>New York, USA</p>
            <p className="mt-2 mb-0">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
              amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
          </div>
          <div className="testimonial-item bg-white text-center border p-4">
            <img
              className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
              src="assets/img/testimonial-3.jpg"
              style={{ width: 80, height: 80 }}
            />
            <h5 className="mb-0">John Doe</h5>
            <p>New York, USA</p>
            <p className="mt-2 mb-0">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
              amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
          </div>
          <div className="testimonial-item bg-white text-center border p-4">
            <img
              className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
              src="assets/img/testimonial-4.jpg"
              style={{ width: 80, height: 80 }}
            />
            <h5 className="mb-0">John Doe</h5>
            <p>New York, USA</p>
            <p className="mt-2 mb-0">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
              amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* Testimonial End */}  
    </div>
  )
}
