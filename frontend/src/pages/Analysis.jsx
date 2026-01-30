import React from "react";

function Analysis({ document }) {
  const data = document?.analysis;
  if (!data) return null;

  const sentiment =
    data.score > 0 ? "Positive" :
    data.score < 0 ? "Negative" :
    "Neutral";

  const sentimentClass =
    sentiment === "Positive" ? "text-success" :
    sentiment === "Negative" ? "text-danger" :
    "text-secondary";

  return (
    <div className="container mt-4">

      <div className="card">
        <div className="card-header bg-dark text-white">
          <h5 className="mb-0">📊 Analysis Report</h5>
        </div>

        <div className="card-body p-0">
          <table className="table table-bordered table-striped table-hover mb-0">
            <thead className="table-dark">
              <tr>
                <th style={{ width: "30%" }}>Key</th>
                <th>Value</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td><b>Overall Score</b></td>
                <td>{data.score}</td>
              </tr>

              <tr>
                <td><b>Sentiment</b></td>
                <td className={sentimentClass}>
                  <b>{sentiment}</b>
                </td>
              </tr>

              <tr>
                <td><b>Positive Words</b></td>
                <td>
                  {data.positive.map((word, index) => (
                    <span
                      key={index}
                      className="badge bg-success me-1 mb-1"
                    >
                      {word}
                    </span>
                  ))}
                </td>
              </tr>

              <tr>
                <td><b>Positive Words Count</b></td>
                <td>{data.positive.length}</td>
              </tr>

              <tr>
                <td><b>Negative Words</b></td>
                <td>
                  {data.negative.map((word, index) => (
                    <span
                      key={index}
                      className="badge bg-danger me-1 mb-1"
                    >
                      {word}
                    </span>
                  ))}
                </td>
              </tr>

              <tr>
                <td><b>Negative Words Count</b></td>
                <td>{data.negative.length}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

export default Analysis;
