import React, { useEffect, useState } from "react";
import axios from "axios";
import Analysis from "./Analysis";
import SingleSentimentPieCard from "./SingleDocumentAnalysis";
import { useNavigate } from "react-router";
import EngagementSuggPerDoc from "./EngagementSuggPerDoc";
const API = import.meta.env.VITE_BACKEND_URL

const History = () => {
  const [docs, setDocs] = useState([]);
  const [dataLoading, setDataLoading] = useState(true)
  const [isEmpty, setIsEmpty] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchHistory = async () => {
      const res = await axios.get(`${API}/history`, {
        withCredentials: true,
      });
      if (res.data.docs && res.data.docs.length) setDocs(res.data.docs);
      else setIsEmpty(true)
      setDataLoading(false)
    };
    fetchHistory();
  }, []);

  return (
    <>
      <div className="bg-dark text-white p-4 shadow text-center">
        <h2 className="fw-bold">📁 Upload History</h2>
        <p>
          View all your previously uploaded documents, reports, and AI insights.
        </p>
      </div>
      {dataLoading ? (
        <div className="container mt-4 text-center">
          <div className="spinner-border text-primary mb-2"></div>
          <h5 className="text-muted">Loading your documents...</h5>
        </div>
      ) : isEmpty ? (
        <div className="container mt-5 text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
            width="120"
            alt="No docs"
            className="mb-3"
          />
          <h3 className="fw-bold">No Documents Uploaded Yet</h3>
          <p className="text-muted">Start uploading files to generate AI reports.</p>
          <button className="btn btn-danger btn-lg" onClick={() => navigate('/upload')}>
            Upload Now
          </button>
        </div>
      ) : (
        <div className="container mt-4">
          <div className="alert alert-success fw-bold">
            📄 Total Documents: {docs.length}
          </div>
          {docs.map((doc, index) => (
            <div key={doc._id} className="card shadow-lg mb-4 border-0">
              <div className="card-header bg-primary text-white p-3">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="fw-bold mb-0">Document #{index + 1}</h5>
                  <small>
                    {new Date(doc.createdAt).toLocaleDateString()} | {" "}
                    {new Date(doc.createdAt).toLocaleTimeString()}
                  </small>
                </div>
              </div>
              <div className="p-2 bg-light border-bottom">
                <EngagementSuggPerDoc document={doc} />
              </div>
              <div className="card-body">
                <div className="mb-4">
                  {doc.fileType === "application/pdf" ? (
                    <>
                      <span htmlFor="text"
                      className="form-label fw-bold text-primary">
                        Uploaded file URL
                      </span>{" "}
                      <a href={doc.fileUrl} className="text-dark">download here</a>
                    </>
                  ) : (
                    <>
                      <p htmlFor="text"
                      className="form-label fw-bold text-primary">
                        Uploaded image
                      </p>
                      <img
                        src={doc.fileUrl}
                        alt="uploaded"
                        className="img-fluid rounded shadow border"
                        style={{ maxHeight: "250px" }}
                      />
                    </>
                  )}
                </div>
                {doc.analysis && (
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="card p-3 shadow-sm border-0">
                        <h6 className="fw-bold text-primary">Text Analysis</h6>
                        <Analysis document={doc} />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="card p-3 shadow-sm border-0">
                        <h6 className="fw-bold text-primary">Sentiment Overview</h6>
                        <SingleSentimentPieCard document={doc} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default History;
