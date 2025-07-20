import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5">
      <div className="container mb-5">
        <div className="row text-center text-md-start">
          {/* Contact Form */}
          <div className="col-md-4 mb-4">
            <h4>Contact Us</h4>
            <p className="text-muted">
              We'd love to hear from you. Fill out the form below.
            </p>
            <form className="row g-2">
              <div className="col-12 col-md-6">
                <input type="text" className="form-control" placeholder="Your Name" />
              </div>
              <div className="col-12 col-md-6">
                <input type="email" className="form-control" placeholder="Your Email" />
              </div>
              <div className="col-12">
                <textarea className="form-control" rows="3" placeholder="Your Message"></textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary mt-2 px-4">Send</button>
              </div>
            </form>
          </div>

          {/* Support Section */}
          <div className="col-md-4 mb-4">
            <h4>Technical Support</h4>
            <p className="text-muted">Need help with your booking or account?</p>
            <ul className="list-unstyled">
              <li>Email: <a href="mailto:support@travelgo.com" className="text-white">support@travelgo.com</a></li>
              <li>Phone: <a href="tel:+201234567890" className="text-white">+20 123 456 7890</a></li>
              <li>Live Chat: 24/7 Available</li>
            </ul>
          </div>

          {/* Destinations & Social */}
          <div className="col-md-4 mb-4">
            <h4>TRAVEL GO</h4>
            <p className="text-muted">Explore the world with ease and style.</p>

            <h5 className="mt-4">Popular Destinations</h5>
            <ul className="list-unstyled">
              <li>Paris, France</li>
              <li>Rome, Italy</li>
              <li>Tokyo, Japan</li>
              <li>New York, USA</li>
            </ul>

            <h5 className="mt-4">Follow us</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-white fs-4"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white fs-4"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-white fs-4"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-white fs-4"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-secondary text-center py-3">
        <p className="mb-0">&copy; 2025 TRAVEL GO. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
