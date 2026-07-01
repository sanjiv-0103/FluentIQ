function Analytics({ history }) {
  const total = history.length;

  const avgScore =
    total > 0
      ? (history.reduce((sum, item) => sum + item.communication_score, 0) / total).toFixed(2)
      : 0;

  const bestScore =
    total > 0
      ? Math.max(...history.map((item) => item.communication_score))
      : 0;

  const avgWpm =
    total > 0
      ? (history.reduce((sum, item) => sum + item.words_per_minute, 0) / total).toFixed(2)
      : 0;

  return (
    <main className="container">
      <section className="card">
        <h2 className="cardTitle">Analytics</h2>

        <div className="metricsGrid">
          <div className="metricCard">
            <p className="metricLabel">Total Analyses</p>
            <h3 className="metricValue">{total}</h3>
          </div>

          <div className="metricCard">
            <p className="metricLabel">Average Score</p>
            <h3 className="metricValue">{avgScore}</h3>
          </div>

          <div className="metricCard">
            <p className="metricLabel">Best Score</p>
            <h3 className="metricValue">{bestScore}</h3>
          </div>

          <div className="metricCard">
            <p className="metricLabel">Average WPM</p>
            <h3 className="metricValue">{avgWpm}</h3>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Analytics;