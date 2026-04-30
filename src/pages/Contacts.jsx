import React from 'react';


function Contacts() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">

        {/* 🔹 Left Side - Form */}
        <div className="col-md-6">
          <h2 className="mb-4">Contact Us</h2>

          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="Enter your name" />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Enter your email" />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="4" placeholder="Your message"></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>

        {/* 🔹 Right Side - Image */}
        <div className="col-md-6 text-center">
           <img
              src="https://thumbs.dreamstime.com/b/woman-clothing-store-young-72249675.jpg"
              alt="About"
              className="img-fluid rounded "
            />
        </div>

      </div>
    </div>
  );
}

export default Contacts;