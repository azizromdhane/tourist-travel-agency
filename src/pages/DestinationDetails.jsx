import React from 'react';
import { useParams } from 'react-router-dom';

const DESTINATIONS = {
  paris: {
    name: 'Paris',
    mainPhoto: '/assets/img/pariss.jpg',
    description: 'Experience the romance of Paris, stroll along the Seine, visit the Eiffel Tower, and enjoy world-class cuisine and art.',
    places: [
      { name: 'Eiffel Tower', photo: '/assets/img/tour.jpg', desc: 'The iconic symbol of Paris, offering breathtaking views of the city.' },
      { name: 'Louvre Museum', photo: '/assets/img/louvre.jpg', desc: 'The world’s largest art museum and a historic monument.' },
      { name: 'Montmartre', photo: '/assets/img/Montmartre.jpg', desc: 'A charming district known for its artistic history and the Sacré-Cœur.' },
    ],
    hotels: [
      { name: 'Hotel Le Meurice', photo: '/assets/img/Hotel Le Meurice.jpg', rating: 5 },
      { name: 'Hotel Lutetia', photo: '/assets/img/Hotel Lutetia.jpg', rating: 5 },
      { name: 'Hotel Regina Louvre', photo: '/assets/img/Hotel Regina Louvre.jpg', rating: 4 },
    ],
  },
  london: {
    name: 'London',
    mainPhoto: '/assets/img/london.jpg',
    description: 'Discover the charm of London, from historic landmarks like Big Ben and Buckingham Palace to vibrant markets and world-class museums.',
    places: [
      { name: 'Big Ben', photo: '/assets/img/london-bigben.jpg', desc: 'The famous clock tower and a symbol of London.' },
      { name: 'Buckingham Palace', photo: '/assets/img/london-buckingham.jpg', desc: 'The official residence of the British monarch.' },
      { name: 'Tower Bridge', photo: '/assets/img/london-towerbridge.jpg', desc: 'A combined bascule and suspension bridge in London.' },
    ],
    hotels: [
      { name: 'The Ritz London', photo: '/assets/img/london-hotel1.jpg', rating: 5 },
      { name: 'The Savoy', photo: '/assets/img/london-hotel2.jpg', rating: 5 },
      { name: 'The Langham', photo: '/assets/img/london-hotel3.jpg', rating: 4 },
    ],
  },
  dubai: {
    name: 'Dubai',
    mainPhoto: '/assets/img/dubaii.jpg',
    description: 'Marvel at Dubai’s futuristic skyline, luxury shopping, desert adventures, and world-famous attractions like the Burj Khalifa.',
    places: [
      { name: 'Burj Khalifa', photo: '/assets/img/dubai-burj.jpg', desc: 'The tallest building in the world.' },
      { name: 'Palm Jumeirah', photo: '/assets/img/dubai-palm.jpg', desc: 'A man-made island in the shape of a palm tree.' },
      { name: 'Dubai Mall', photo: '/assets/img/dubai-mall.jpg', desc: 'One of the world’s largest shopping malls.' },
    ],
    hotels: [
      { name: 'Burj Al Arab', photo: '/assets/img/dubai-hotel1.jpg', rating: 5 },
      { name: 'Atlantis The Palm', photo: '/assets/img/dubai-hotel2.jpg', rating: 5 },
      { name: 'Jumeirah Beach Hotel', photo: '/assets/img/dubai-hotel3.jpg', rating: 4 },
    ],
  },
  newyork: {
    name: 'New York',
    mainPhoto: '/assets/img/new yorkk.jpg',
    description: 'Explore the city that never sleeps, from the Statue of Liberty and Central Park to Broadway shows and iconic skyscrapers.',
    places: [
      { name: 'Statue of Liberty', photo: '/assets/img/ny-liberty.jpg', desc: 'A symbol of freedom and the United States.' },
      { name: 'Central Park', photo: '/assets/img/ny-centralpark.jpg', desc: 'A large public park in the center of Manhattan.' },
      { name: 'Times Square', photo: '/assets/img/ny-timessquare.jpg', desc: 'The bustling heart of the city, known for its bright lights.' },
    ],
    hotels: [
      { name: 'The Plaza', photo: '/assets/img/ny-hotel1.jpg', rating: 5 },
      { name: 'The Peninsula', photo: '/assets/img/ny-hotel2.jpg', rating: 5 },
      { name: 'The Knickerbocker', photo: '/assets/img/ny-hotel3.jpg', rating: 4 },
    ],
  },
  kuwait: {
    name: 'Kuwait',
    mainPhoto: '/assets/img/kuwaitt.jpg',
    description: 'Visit Kuwait for a blend of modern architecture, rich culture, and beautiful Arabian Gulf coastline.',
    places: [
      { name: 'Kuwait Towers', photo: '/assets/img/kuwait-towers.jpg', desc: 'The most famous landmark in Kuwait.' },
      { name: 'Grand Mosque', photo: '/assets/img/kuwait-mosque.jpg', desc: 'The largest mosque in Kuwait.' },
      { name: 'Souk Al-Mubarakiya', photo: '/assets/img/kuwait-souk.jpg', desc: 'A traditional market in the heart of Kuwait City.' },
    ],
    hotels: [
      { name: 'Jumeirah Messilah Beach', photo: '/assets/img/kuwait-hotel1.jpg', rating: 5 },
      { name: 'The Regency', photo: '/assets/img/kuwait-hotel2.jpg', rating: 5 },
      { name: 'Symphony Style Hotel', photo: '/assets/img/kuwait-hotel3.jpg', rating: 4 },
    ],
  },
  maldives: {
    name: 'Maldives',
    mainPhoto: '/assets/img/Maldivess.jpg',
    description: 'Experience paradise on earth with crystal-clear waters, white sandy beaches, and luxurious resorts in the Maldives.',
    places: [
      { name: 'Male City', photo: '/assets/img/maldives-male.jpg', desc: 'The capital city of Maldives.' },
      { name: 'Maafushi Island', photo: '/assets/img/maldives-maafushi.jpg', desc: 'A popular local island for tourists.' },
      { name: 'Sun Island', photo: '/assets/img/maldives-sun.jpg', desc: 'A beautiful resort island.' },
    ],
    hotels: [
      { name: 'Soneva Fushi', photo: '/assets/img/maldives-hotel1.jpg', rating: 5 },
      { name: 'Gili Lankanfushi', photo: '/assets/img/maldives-hotel2.jpg', rating: 5 },
      { name: 'Baros Maldives', photo: '/assets/img/maldives-hotel3.jpg', rating: 4 },
    ],
  },
};

export default function DestinationDetails() {
  const { destination } = useParams();
  const data = DESTINATIONS[destination];

  if (!data) return <div className="container py-5"><h2>Destination not found</h2></div>;

  return (
    <div className="container py-5">
      <h1 className="mb-4 fw-bold text-primary">{data.name}</h1>
      <div style={{ width: '100%', maxHeight: 400, overflow: 'hidden', borderRadius: '0.5rem', boxShadow: '0 0.5rem 1rem rgba(0,0,0,0.1)' }}>
        <img
          src={data.mainPhoto}
          alt={data.name}
          className="img-fluid w-100"
          style={{ height: 400, width: '100%', objectFit: 'cover', objectPosition: 'center' }}
          loading="lazy"
        />
      </div>
      <p className="lead mb-5">{data.description}</p>
      <h3 className="mb-3 text-secondary">Top Places to Visit</h3>
      <div className="row g-4 mb-5">
        {data.places.map((place, idx) => (
          <div className="col-md-4" key={idx}>
            <div className="card h-100 border-0 shadow-sm">
              <img src={place.photo} alt={place.name} className="card-img-top" style={{ height: 180, objectFit: 'cover' }} loading="lazy" />
              <div className="card-body">
                <h5 className="card-title">{place.name}</h5>
                <p className="card-text">{place.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h3 className="mb-3 text-secondary">Recommended Hotels</h3>
      <div className="row g-4">
        {data.hotels.map((hotel, idx) => (
          <div className="col-md-4" key={idx}>
            <div className="card h-100 border-0 shadow-sm">
              <img src={hotel.photo} alt={hotel.name} className="card-img-top" style={{ height: 180, objectFit: 'cover' }} loading="lazy" />
              <div className="card-body">
                <h5 className="card-title">{hotel.name}</h5>
                <div className="mb-2">
                  {[...Array(hotel.rating)].map((_, i) => (
                    <i key={i} className="fa fa-star text-warning"></i>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 