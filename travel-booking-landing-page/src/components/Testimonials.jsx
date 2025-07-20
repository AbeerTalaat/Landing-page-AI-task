import React from 'react';

function Testimonials() {
  const reviews = [
    {
      name: "Sarah M.",
      comment: "It was the best vacation ever! Everything was organized perfectly.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "James T.",
      comment: "Super friendly support and great hotel choices. Highly recommend!",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Linda B.",
      comment: "Loved the trip! Easy booking and fantastic experience overall.",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  return (
    <section className="bg-light py-5 text-center">
      <div className="container">
        <h3 className="fw-bold mb-5">What Our Travelers Say</h3>
        <div className="row">
          {reviews.map((review, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm text-start p-3">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={review.img}
                    alt={review.name}
                    className="rounded-circle me-3"
                    style={{ width: '56px', height: '56px', objectFit: 'cover' }}
                  />
                  <h5 className="mb-0">{review.name}</h5>
                </div>
                <p className="fst-italic text-muted">“{review.comment}”</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
