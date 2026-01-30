import React from "react";
import hero_img from '../assets/hero_img.jpg'
import { useNavigate } from "react-router";

const Home = () => {
  const navigate  = useNavigate()

  return (
    <div className="container-fluid p-0">
      <div className="bg-dark text-white py-5">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-md-6">
              <h1 className="fw-bold display-5">
                Social Media Content Analysis System
              </h1>
              <p className="lead text-secondary mt-3">
                Analyze posts, comments, and images to understand sentiment and get
                engagement suggestions.
              </p>

              <div className="mt-4">
                <button className="btn btn-primary btn-lg fs-5 me-3" onClick={() => navigate('/dashboard')}>
                  Go to Dashboard
                </button>
                <button className="btn btn-outline-light fs-5 btn-lg" onClick={() => navigate('/about')}>
                  Learn More
                </button>
              </div>
            </div>

            <div className="col-md-6 text-center">
              <img
                src={hero_img}
                className="img-fluid rounded shadow"
                alt="AI Analysis"
              />
            </div>

          </div>
        </div>
      </div>

      <div className="container py-5">
        <h2 className="text-center fw-bold mb-5">Key Features</h2>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow h-100 text-center p-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4712/4712100.png"
                className="card-img-top mx-auto"
                style={{ width: "80px" }}
                alt="Sentiment"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Sentiment Analysis</h5>
                <p className="card-text text-muted">
                  Detect positive, negative, and neutral sentiment in social media content.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow h-100 text-center p-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png"
                className="card-img-top mx-auto"
                style={{ width: "80px" }}
                alt="Content Suggestion"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Content Suggestions</h5>
                <p className="card-text text-muted">
                  Get AI-generated captions, hashtags, and post improvement tips.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow h-100 text-center p-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1828/1828919.png"
                className="card-img-top mx-auto"
                style={{ width: "80px" }}
                alt="Reports"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Analytics Reports</h5>
                <p className="card-text text-muted">
                  Visualize engagement metrics and detailed reports.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="bg-primary text-white text-center py-5">
        <h2 className="fw-bold">Start Analyzing Your Content Today</h2>
        <p className="lead">Upload your social media data and get instant insights.</p>
        <button className="btn btn-light btn-lg mt-2" onClick={() => navigate('/dashboard')}>
          Get Started Free
        </button>
      </div>
    </div>
  );
};

export default Home;
