import React from 'react';

export default function ServicesSection() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Services
          </h6>
          <h1 className="mb-5">Our Services</h1>
        </div>
        <div className="row g-4">
          {/* Hotels */}
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item rounded pt-3 text-center" style={{background: 'var(--light)', boxShadow: '0 0 45px rgba(45,92,136,0.08)'}}>
              <div className="p-4">
                <i className="fa fa-hotel fa-3x mb-4" style={{color: 'var(--primary)', background: 'var(--secondary)', borderRadius: '50%', padding: 16}} />
                <h5 style={{color: 'var(--primary)'}}>Hotels</h5>
                <p style={{color: '#333'}}>
                  Book from over 1 million hotels and resorts worldwide at exclusive B2B rates. Enjoy instant confirmation, flexible payment options, and 24/7 support for travel agents and agencies.
                </p>
              </div>
            </div>
          </div>
          {/* Transfer */}
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.2s">
            <div className="service-item rounded pt-3 text-center" style={{background: 'var(--light)', boxShadow: '0 0 45px rgba(45,92,136,0.08)'}}>
              <div className="p-4">
                <i className="fa fa-shuttle-van fa-3x mb-4" style={{color: 'var(--primary)', background: 'var(--secondary)', borderRadius: '50%', padding: 16}} />
                <h5 style={{color: 'var(--primary)'}}>Transfer</h5>
                <p style={{color: '#333'}}>
                  Arrange seamless transfers for your clients from airport to hotel or from hotel to airport. Reliable, comfortable, and always on time, for a stress-free travel experience.
                </p>
              </div>
            </div>
          </div>
          {/* Activities */}
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item rounded pt-3 text-center" style={{background: 'var(--light)', boxShadow: '0 0 45px rgba(45,92,136,0.08)'}}>
              <div className="p-4">
                <i className="fa fa-map-marked-alt fa-3x mb-4" style={{color: 'var(--primary)', background: 'var(--secondary)', borderRadius: '50%', padding: 16}} />
                <h5 style={{color: 'var(--primary)'}}>Activities</h5>
                <p style={{color: '#333'}}>
                  Offer your clients unforgettable experiences: city tours, excursions, adventure activities, and cultural events, all bookable directly through our platform.
                </p>
              </div>
            </div>
          </div>
          {/* Packages */}
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
            <div className="service-item rounded pt-3 text-center" style={{background: 'var(--light)', boxShadow: '0 0 45px rgba(45,92,136,0.08)'}}>
              <div className="p-4">
                <i className="fa fa-gift fa-3x mb-4" style={{color: 'var(--primary)', background: 'var(--secondary)', borderRadius: '50%', padding: 16}} />
                <h5 style={{color: 'var(--primary)'}}>Packages</h5>
                <p style={{color: '#333'}}>
                  Create and book complete travel packages including hotels, transfers, and activities. Tailor-made solutions for every client, with the best value and convenience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 