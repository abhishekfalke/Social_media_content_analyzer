import { Pie, Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement
);

function AllDocAnalysis({ documents }) {
  if (!documents || documents.length === 0) return <p>No data</p>;

  let pos = 0, neg = 0, neu = 0;

  documents.forEach(doc => {
    const score = doc.analysis.score;
    if (score > 0) pos++;
    else if (score < 0) neg++;
    else neu++;
  });

  const pieData = {
    labels: ["Positive", "Negative", "Neutral"],
    datasets: [
      {
        data: [pos, neg, neu],
        backgroundColor: ["#198754", "#dc3545", "#6c757d"],
      },
    ],
  };

  const sortedDocs = [...documents].sort(
    (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
  );

  const lineLabels = sortedDocs.map(d =>
    new Date(d.createdAt).toLocaleDateString()
  );
  const lineScores = sortedDocs.map(d => d.analysis.score);

  const lineData = {
    labels: lineLabels,
    datasets: [
      {
        label: "Sentiment Score",
        data: lineScores,
        borderWidth: 2,
      },
    ],
  };

  const dateCount = {};

  documents.forEach(doc => {
    const date = new Date(doc.createdAt).toLocaleDateString();
    dateCount[date] = (dateCount[date] || 0) + 1;
  });

  const barLabels = Object.keys(dateCount);
  const barCounts = Object.values(dateCount);

  const barData = {
    labels: barLabels,
    datasets: [
      {
        label: "Uploads",
        data: barCounts,
      },
    ],
  };

  return (
    <div className="container mt-4">
      <h5 className="mb-3">📊 User Analytics Dashboard</h5>

      <div className="row">

        <div className="col-md-12 mb-3">
          <div className="card shadow">
            <div className="card-header bg-dark text-white">
              Sentiment Distribution
            </div>
            <div className="card-body">
              <Pie data={pieData} />
            </div>
          </div>
        </div>

        <div className="col-md-12 mb-3">
          <div className="card shadow">
            <div className="card-header bg-dark text-white">
              Sentiment Over Time
            </div>
            <div className="card-body">
              <Line data={lineData} />
            </div>
          </div>
        </div>

        <div className="col-md-12 mb-3">
          <div className="card shadow">
            <div className="card-header bg-dark text-white">
              Upload Activity
            </div>
            <div className="card-body">
              <Bar data={barData} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AllDocAnalysis;
