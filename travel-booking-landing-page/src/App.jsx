import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import AboutUs from './components/AboutUs';
import Destinations from './components/Destinations';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="bg-gray-50 font-sans">
      <Navbar />
      <Hero />
      {/* <AboutUs /> */}
      <Destinations />
      
      <Testimonials />
      <BookingForm />
      <Footer />
    </div>
  );
}
export default App;


