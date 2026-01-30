import React from "react";
import { useNavigate } from "react-router";

const Services = () => {
  const navigate  = useNavigate()

  return (
    <div className="container-fluid p-0">
      <div className="bg-primary text-white py-5">
        <div className="container text-center">
          <h1 className="fw-bold display-5">Our Services</h1>
          <p className="lead mt-3">
            Smart AI-driven services to analyze, improve, and optimize your social media content.
          </p>
        </div>
      </div>

      <div className="container py-5">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow h-100 text-center p-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4712/4712100.png"
                alt="Sentiment Analysis"
                className="mx-auto"
                style={{ width: "80px" }}
              />
              <h5 className="fw-bold mt-3">Sentiment Analysis</h5>
              <p className="text-muted">
                AI analyzes posts and comments to detect emotions and public opinion.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow h-100 text-center p-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png"
                alt="Content Suggestions"
                className="mx-auto"
                style={{ width: "80px" }}
              />
              <h5 className="fw-bold mt-3">Content Suggestions</h5>
              <p className="text-muted">
                AI generates captions, hashtags, and improvement tips for better engagement.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow h-100 text-center p-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1828/1828919.png"
                alt="Analytics"
                className="mx-auto"
                style={{ width: "80px" }}
              />
              <h5 className="fw-bold mt-3">Engagement Analytics</h5>
              <p className="text-muted">
                Visual dashboards showing likes, shares, reach, and audience engagement.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow h-100 text-center p-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1048/1048953.png"
                alt="Image Analysis"
                className="mx-auto"
                style={{ width: "80px" }}
              />
              <h5 className="fw-bold mt-3">Image & OCR Analysis</h5>
              <p className="text-muted">
                Extract text from images and analyze visual content using AI & OCR.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow h-100 text-center p-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/942/942748.png"
                alt="Reports"
                className="mx-auto"
                style={{ width: "80px" }}
              />
              <h5 className="fw-bold mt-3">Smart Reports</h5>
              <p className="text-muted">
                Auto-generated reports for insights, trends, and performance tracking.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow h-100 text-center p-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="AI Automation"
                className="mx-auto"
                style={{ width: "80px" }}
              />
              <h5 className="fw-bold mt-3">AI Automation</h5>
              <p className="text-muted">
                Automated analysis pipelines for continuous content optimization.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark text-white text-center py-5">
        <h2 className="fw-bold">Boost Your Social Media Strategy with Us</h2>
        <p className="lead text-secondary">
          Start using AI-powered content analysis to grow faster.
        </p>
        <button className="btn btn-primary btn-lg mt-2" onClick={() => navigate('/dashboard')}>
          Get Started Now
        </button>
      </div>
    </div>
  );
};

export default Services;
