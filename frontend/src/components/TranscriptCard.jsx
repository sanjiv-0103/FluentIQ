function TranscriptCard({ transcript }) {
  return (
    <div className="card">
      <h2 className="cardTitle">Transcript</h2>

      <div className="transcriptBox">
        {transcript || "Your transcript will appear here after analysis."}
      </div>
    </div>
  );
}

export default TranscriptCard;