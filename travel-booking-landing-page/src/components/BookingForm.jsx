import React from 'react';

function BookingForm() {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <h3 className="text-center fw-bold mb-4 fs-2">Book Your Trip</h3>
        <form className="bg-light p-5 rounded-4 shadow mx-auto" style={{ maxWidth: '600px' }}>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Full Name" />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Destination" />
          </div>
          <div className="mb-4">
            <input type="date" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Submit Booking
          </button>
        </form>
      </div>
    </section>
  );
}

export default BookingForm;
