function History({ history, openHistoryItem }) {
  return (
    <main className="container">
      <section className="card">
        <h2 className="cardTitle">History</h2>

        {history.length === 0 ? (
          <p>No speech analysis history yet.</p>
        ) : (
          history.map((item, index) => (
            <div
              key={index}
              className="historyCard"
              onClick={() => openHistoryItem(item)}
              style={{ cursor: "pointer" }}
            >
              <strong>{item.filename}</strong>
              <p>Level: {item.speaking_level}</p>
              <p>Score: {item.communication_score}/100</p>
              <p>WPM: {item.words_per_minute}</p>
              <p style={{ color: "#7c3aed", fontWeight: "700" }}>
                Click to view report
              </p>
            </div>
          ))
        )}
      </section>
    </main>
  );
}

export default History;