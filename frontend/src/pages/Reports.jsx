import jsPDF from "jspdf";

function Reports({ result }) {
  const downloadPDF = () => {
    if (!result) return;

    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("FluentIQ Communication Report", 20, 20);

    doc.setFontSize(12);
    doc.text(`Filename: ${result.filename}`, 20, 35);
    doc.text(`Speaking Level: ${result.speaking_level}`, 20, 45);
    doc.text(`Communication Score: ${result.communication_score} / 100`, 20, 55);
    doc.text(`Fluency: ${result.fluency_score}%`, 20, 65);
    doc.text(`Confidence: ${result.confidence_score}%`, 20, 75);
    doc.text(`Vocabulary: ${result.vocabulary_score}%`, 20, 85);
    doc.text(`Grammar: ${result.grammar_score}%`, 20, 95);
    doc.text(`Pronunciation: ${result.pronunciation_score}%`, 20, 105);
    doc.text(`Words Per Minute: ${result.words_per_minute}`, 20, 115);
    doc.text(`Filler Words: ${result.filler_count}`, 20, 125);

    doc.setFontSize(14);
    doc.text("Transcript", 20, 145);

    doc.setFontSize(11);
    const transcriptLines = doc.splitTextToSize(result.transcript, 170);
    doc.text(transcriptLines, 20, 155);

    let y = 155 + transcriptLines.length * 7 + 10;

    doc.setFontSize(14);
    doc.text("Strengths", 20, y);
    y += 10;

    doc.setFontSize(11);
    result.strengths.forEach((item) => {
      doc.text(`- ${item}`, 25, y);
      y += 8;
    });

    y += 5;
    doc.setFontSize(14);
    doc.text("Improvements", 20, y);
    y += 10;

    doc.setFontSize(11);
    result.improvements.forEach((item) => {
      doc.text(`- ${item}`, 25, y);
      y += 8;
    });

    doc.save("FluentIQ_Communication_Report.pdf");
  };

  if (!result) {
    return (
      <main className="container">
        <section className="card">
          <h2 className="cardTitle">Communication Report</h2>
          <p>Analyze a speech first to generate your report.</p>
        </section>
      </main>
    );
  }

  return (
    <main className="container">
      <section className="card">
        <h2 className="cardTitle">AI Communication Report</h2>

        <div className="metricsGrid">
          <div className="metricCard">
            <p className="metricLabel">Speaking Level</p>
            <h3 className="metricValue">{result.speaking_level}</h3>
          </div>

          <div className="metricCard">
            <p className="metricLabel">Communication Score</p>
            <h3 className="metricValue">{result.communication_score}/100</h3>
          </div>

          <div className="metricCard">
            <p className="metricLabel">Fluency</p>
            <h3 className="metricValue">{result.fluency_score}%</h3>
          </div>

          <div className="metricCard">
            <p className="metricLabel">Confidence</p>
            <h3 className="metricValue">{result.confidence_score}%</h3>
          </div>
        </div>

        <button className="primaryBtn" onClick={downloadPDF}>
          Download PDF Report
        </button>
      </section>

      <section className="card">
        <h2 className="cardTitle">Transcript</h2>
        <div className="transcriptBox">{result.transcript}</div>
      </section>

      <section className="feedbackGrid">
        <div className="card">
          <h2 className="greenTitle">Strengths</h2>
          <ul className="list">
            {result.strengths.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h2 className="orangeTitle">Improvements</h2>
          <ul className="list">
            {result.improvements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Reports;