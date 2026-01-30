function EngagementSuggPerDoc({ document }) {
  if (!document || !document.analysis) return null;

  const score = document.analysis.score;
  const textLength = document.text?.length || 0;
  const hour = new Date(document.createdAt).getHours();

  let suggestion = "";

  // Sentiment-based suggestion
  if (score > 0) {
    suggestion =
      "This content received positive sentiment. Post similar content and add call-to-action questions to boost engagement.";
  } 
  else if (score < 0) {
    suggestion =
      "Negative sentiment detected. Improve content quality and respond to audience feedback.";
  } 
  else {
    suggestion =
      "Neutral sentiment detected. Add emotional or interactive content like polls or questions.";
  }

  // Text length suggestion
  if (textLength < 50) {
    suggestion += " Consider adding more descriptive text to increase engagement.";
  }

  // Time-based suggestion
  if (hour < 10 || hour > 22) {
    suggestion += " Try posting between 6 PM and 10 PM for higher engagement.";
  }

  return (
    <>
      <div className="alert alert-info">
        <b>Engagement Suggestion:</b> {suggestion}
      </div>
    </>
  );
}

export default EngagementSuggPerDoc;
