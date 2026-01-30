import React from "react";

const About = () => {
  return (
    <div className="container-fluid p-0">
      <div className="bg-secondary text-white py-5">
        <div className="container text-center">
          <h1 className="fw-bold display-5">About Social Media Content Analyzer</h1>
          <p className="lead text-light mt-3">
            An AI-powered platform to analyze social media content and provide smart insights.
          </p>
        </div>
      </div>

      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984"
              className="img-fluid rounded shadow"
              alt="About AI"
            />
          </div>
          <div className="col-md-6">
            <h2 className="fw-bold">What is This Project?</h2>
            <p className="text-muted mt-3">
              Social Media Content Analyzer is a smart AI-based system that helps
              users understand social media posts, comments, and images. It
              provides sentiment analysis, engagement insights, and content
              improvement suggestions.
            </p>
            <p className="text-muted">
              This project is designed for students, marketers, and content creators
              who want to optimize their social media strategy with data-driven insights.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-light py-5">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow p-3">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt="Mission"
                  className="mx-auto"
                  style={{ width: "70px" }}
                />
                <h5 className="fw-bold mt-3">Our Mission</h5>
                <p className="text-muted">
                  To help users analyze social media content easily and improve their online presence.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow p-3">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135673.png"
                  alt="Vision"
                  className="mx-auto"
                  style={{ width: "70px" }}
                />
                <h5 className="fw-bold mt-3">Our Vision</h5>
                <p className="text-muted">
                  To build intelligent tools that make social media analytics accessible for everyone.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow p-3">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4712/4712100.png"
                  alt="Technology"
                  className="mx-auto"
                  style={{ width: "70px" }}
                />
                <h5 className="fw-bold mt-3">Technology</h5>
                <p className="text-muted">
                  Built using React, Node.js, Machine Learning, and NLP techniques for real-time analysis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <h2 className="text-center fw-bold mb-4">Meet the Developer</h2>

        <div className="row justify-content-center">
          <div className="col-md-4 text-center">
            <div className="card shadow p-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
                className="rounded-circle mx-auto"
                style={{ width: "120px" }}
                alt="Developer"
              />
              <h5 className="fw-bold mt-3">Abhishek Falke</h5>
              <p className="text-muted">Full Stack Developer & AI Enthusiast</p>
              <p className="text-muted">
                Developed this project to explore AI-driven analytics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
