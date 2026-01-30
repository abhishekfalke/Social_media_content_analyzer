function EngagementSuggestions({ documents }) {
  let pos = 0, neg = 0, neu = 0;

  documents.forEach(doc => {
    const s = doc.analysis.score;
    if (s > 0) pos++;
    else if (s < 0) neg++;
    else neu++;
  });

  const total = documents.length;
  const posPercent = (pos / total) * 100;
  const negPercent = (neg / total) * 100;

  let suggestion = "";

  if (posPercent > 60)
    suggestion = "Your content performs well. Post similar content and use call-to-action questions.";

  else if (negPercent > 40)
    suggestion = "Users show negative sentiment. Improve content quality and respond to comments.";

  else
    suggestion = "Content is neutral. Use emotional or interactive content like polls and questions.";

  return (
    <div className="card shadow m-5">
      <div className="card-header bg-primary text-white">
        📌 Engagement Suggestions
      </div>
      <div className="card-body">
        <p>{suggestion}</p>
      </div>
    </div>
  );
}

export default EngagementSuggestions;
