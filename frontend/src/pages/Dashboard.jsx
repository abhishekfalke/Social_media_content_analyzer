import { useEffect, useState } from "react";
import { useNavigate, Link, NavLink } from "react-router";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import './dashboard.css'
import AllDocAnalysis from "./AllDocumentAnalysis";
import EngagementSuggestions from "./EngagementSuggestions";

const Dashboard = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [count, setCount] = useState(0)
  const [dataLoading, setDataLoading] = useState(true)
  const [docs, setDocs] = useState([]);

   useEffect(() => {
    const verifyUser = async () => {
      try {
        const { data } = await axios.get("http://localhost:8080", {
          withCredentials: true,
        });
        const { status, user } = data
        console.log(data);
        setUsername(user)
        if (!status) {
          navigate("/login")
        } else {
          toast.success('Welcome', {
            position: "top-left",
          });
        }
      } catch (error) {
        navigate("/login")
      }
    };

    verifyUser();
  }, []);

  useEffect(() => {
    const fetchDocuments = async () => {
      const res = await axios.get('http://localhost:8080/history', {
        withCredentials: true
      })
      if (res.data.docs) {
        setCount(res.data.docs.length) 
        setDocs(res.data.docs)
        setDataLoading(false)
      }
    }
    fetchDocuments()
  }, [])

  const Logout = async () => {
    await axios.post("http://localhost:8080/logout", {}, {
      withCredentials: true
    })
    navigate("/login");
  };
  return (
    <>
      <div>
        <div className="bg-primary text-white p-4 shadow text-center">
          <h2 className="fw-bold">Welcome {username} to your Dashboard</h2>
          <p className="text-light">
            Upload your content and get AI-powered engagement insights and reports.
          </p>
        </div>
      </div>

      <div className="row bg-secondary text-white text-start py-5">
        <div className="col-6 ps-5 pe-0 border-end">
            <h2 className="fw-bold">📤 Upload Content</h2>
            <p>New to social media? Upload posts, images, or PDFs and get AI-generated reports and engagement ideas.</p>
            <button className="btn btn-outline-light btn-lg mt-2" onClick={() => navigate('/upload')}>
              Upload Now
            </button>
        </div>
        <div className="col-6 ps-5 pe-0">
            <h2 className="fw-bold">📁 View History</h2>
            <p>View all previously uploaded files, reports, and AI engagement suggestions.</p>
            <button className="btn btn-outline-light btn-lg mt-2" onClick={() => navigate('/history')}>
              View History
            </button>
        </div>
      </div>

      {
        dataLoading ? (
          <div className="container mt-4 text-center">
            <div className="spinner-border text-primary mb-2"></div>
            <h5 className="text-muted">Loading data...please wait</h5>
          </div>
        ) : docs && docs.length ? (
          <div className="container mt-5">
            <h3 className="fw-bold text-danger mb-3">
              Overall Report Based on Your Uploads
            </h3>
            <div className="card shadow p-3 mb-4">
              <AllDocAnalysis documents={docs} />
            </div>
            <h3 className="fw-bold text-danger mt-4">
              Engagement Suggestions from Recent Reports
            </h3>
            <div className="card shadow p-3">
              <EngagementSuggestions documents={docs} />
            </div>
          </div>
        ) : (
          <div className="text-center mt-5">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
              width="120"
              alt="No data"
              className="mb-3"
            />
            <h4 className="fw-bold">No Reports Available Yet</h4>
            <p className="text-muted">
              Start by uploading your first social media content.
            </p>
            <button
              className="btn btn-primary btn-lg mt-2"
              onClick={() => navigate('/upload')}
            >
              Generate Your First Report
            </button>
          </div>
        )
      }
      <ToastContainer />
    </>
  );
};

export default Dashboard;
