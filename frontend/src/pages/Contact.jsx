import React from "react";

const Contact = () => {
  return (
    <div className="container-fluid p-0">
      <div className="bg-dark text-white py-5">
        <div className="container text-center">
          <h1 className="fw-bold display-5">Contact Us</h1>
          <p className="lead text-secondary mt-3">
            Have questions or feedback? Get in touch with us.
          </p>
        </div>
      </div>

      <div className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1527430253228-e93688616381"
              className="img-fluid rounded shadow"
              alt="Contact"
            />
          </div>
          <div className="col-md-6">
            <h2 className="fw-bold mb-3">Send Us a Message</h2>
            <form onSubmit={(e) => {
                  e.preventDefault()
                  alert('Currently unavailable!')
                }
              }>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-lg w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-light py-5">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md-4">
              <div className="card shadow h-100 p-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                  alt="Email"
                  className="mx-auto"
                  style={{ width: "60px" }}
                />
                <h5 className="fw-bold mt-3">Email</h5>
                <p className="text-muted">abhishekfalke999@gmail.com</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow h-100 p-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
                  alt="Phone"
                  className="mx-auto"
                  style={{ width: "60px" }}
                />
                <h5 className="fw-bold mt-3">Phone</h5>
                <p className="text-muted">+91 78238 35535</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow h-100 p-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
                  alt="Location"
                  className="mx-auto"
                  style={{ width: "60px" }}
                />
                <h5 className="fw-bold mt-3">Location</h5>
                <p className="text-muted">Nagpur, Maharashtra, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
