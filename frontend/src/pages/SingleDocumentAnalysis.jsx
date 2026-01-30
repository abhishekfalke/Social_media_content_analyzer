import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function SingleSentimentPieCard({ document }) {
  const dataObj = document?.analysis;
  if (!dataObj) return null;

  const positiveCount = dataObj.positive.length;
  const negativeCount = dataObj.negative.length;
  const neutralCount =
    dataObj.tokens.length - (positiveCount + negativeCount);

  const chartData = {
    labels: ["Positive Words", "Negative Words", "Neutral Words"],
    datasets: [
      {
        data: [positiveCount, negativeCount, neutralCount],
        backgroundColor: ["#198754", "#dc3545", "#6c757d"],
      },
    ],
  };

  return (
    <div className="card mt-4">
      <div className="card-header bg-dark text-white">
        <h5 className="mb-0">📊 Chart representation</h5>
      </div>

      <div className="card-body text-center">
        <div style={{ maxWidth: "300px", margin: "auto" }}>
          <Pie data={chartData} />
        </div>

        <div className="mt-3">
          <span className="badge bg-success me-2">
            Positive: {positiveCount}
          </span>

          <span className="badge bg-danger me-2">
            Negative: {negativeCount}
          </span>

          <span className="badge bg-secondary">
            Neutral: {neutralCount}
          </span>
        </div>
      </div>
    </div>
  );
}

export default SingleSentimentPieCard;
