import React from 'react';
import './Hero.css'; // هنستخدم ملف CSS خارجي علشان الخلفية والستايلات الخاصة

export default function Hero() {
  return (
    <section className="hero-section d-flex align-items-center justify-content-center text-white text-center">
      <div className="bg-dark bg-opacity-75 p-5 rounded shadow">
        <h2 className="display-4 fw-bold">Explore the World with TravelGo</h2>
        <p className="mt-3 fs-5">Book your dream vacation today</p>
        <button className="btn btn-primary btn-lg mt-4">Start Booking</button>
      </div>
    </section>
  );
}
