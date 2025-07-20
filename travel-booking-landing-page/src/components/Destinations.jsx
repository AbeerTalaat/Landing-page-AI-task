import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Destinations() {
  return (
    <div className="container my-5">
      {/* Destinations Section */}
      <h2 className="text-center mb-4">Top Destinations</h2>
      <div className="row">
        {[
          { title: 'Paris', image: '/images/paris.jpg' },
          { title: 'Tokyo', image: '/images/tokyo.jpg' },
          { title: 'Rome', image: '/images/rome.jpg' }
        ].map((dest, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-0 hover-shadow" style={{ cursor: 'pointer', transition: 'transform 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
              <img src={dest.image} className="card-img-top" alt={dest.title} />
              <div className="card-body text-center">
                <h5 className="card-title">{dest.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Why Choose Us Section */}
      <div className="my-5 py-4 px-3 bg-light rounded">
        <h2 className="text-center mb-4">Why Choose Us</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <i className="bi bi-star-fill text-warning" style={{ fontSize: '2rem' }}></i>
            <h5 className="mt-2">Top Rated Service</h5>
            <p>We offer exceptional service backed by thousands of positive reviews.</p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="bi bi-geo-alt-fill text-danger" style={{ fontSize: '2rem' }}></i>
            <h5 className="mt-2">Best Destinations</h5>
            <p>Explore breathtaking destinations with exclusive deals and comfort.</p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="bi bi-wallet2 text-success" style={{ fontSize: '2rem' }}></i>
            <h5 className="mt-2">Affordable Prices</h5>
            <p>Travel without worries. We provide the best experiences at fair prices.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-4">
          <h4 className="mb-3">Ready to explore the world?</h4>
          <button className="btn btn-primary btn-lg">
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  );
}
