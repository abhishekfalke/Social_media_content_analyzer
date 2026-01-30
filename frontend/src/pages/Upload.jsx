import React, { useState } from "react";
import axios from "axios";
import Analysis from "./Analysis";
import SingleSentimentPieCard from "./SingleDocumentAnalysis";
import EngagementSuggPerDoc from "./EngagementSuggPerDoc";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(false)

  const handleUpload = async (e) => {
    e.preventDefault();
    setLoading(true)
    const formData = new FormData();
    formData.append("file", file);

    const res = await axios.post("http://localhost:8080/upload", formData, {
      withCredentials: true,
    });
    if (res.data.status) {
      console.log("idhar aaya");
      setData(res.data.doc)
      setStatus(true)
      setLoading(false)
    }
    else {
      console.log("nahi idhar aaya");
    }
  };

  return (
    <>
      {loading ? (
        <div className="container mt-5 text-center">
          <div className="card shadow p-4 border-0">
            <div className="spinner-border text-primary mb-3" role="status"></div>
            <h3 className="fw-bold text-primary">Uploading & Analyzing...</h3>
            <p className="text-muted">
              This may take a few seconds. Please wait while AI processes your file.
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-dark text-white p-5 text-center">
          <h2 className="fw-bold mb-2">Upload Your Document</h2>
          <p className="text-light">
            Upload images, PDFs, or text files to generate AI-powered reports and engagement insights.
          </p>
          <form onSubmit={handleUpload} className="mt-5">
            <div className="mb-3">
              <input
                type="file"
                className="form-control form-control-lg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <button className="btn btn-primary btn-lg w-100">
              Upload & Analyze
            </button>
          </form>
        </div>
      )}
      {status && !loading && (
        <div className="container mt-5">
          <div className="card shadow-lg p-4 border-0">
            <h2 className="fw-bold text-success mb-3">
              Report Generated ✅
            </h2>
            <p className="text-muted">
              Below is the analysis and engagement suggestions for your uploaded content.
            </p>
            <div className="mt-3">
              <Analysis document={data} />
            </div>
            <div className="mt-4">
              <SingleSentimentPieCard document={data} />
            </div>
            <div className="mt-4">
              <EngagementSuggPerDoc document={data} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Upload;
