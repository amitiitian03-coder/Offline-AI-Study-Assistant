function SummaryCard({ summary }) {
  return (
    <div className="summary-card">
      <h2>AI Summary</h2>

      {summary ? (
        <p>{summary}</p>
      ) : (
        <p>No summary generated yet.</p>
      )}
    </div>
  );
}

export default SummaryCard;