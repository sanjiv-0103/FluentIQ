import { FiMic, FiZap, FiFileText, FiAlertCircle } from "react-icons/fi";

import UploadCard from "../components/UploadCard";
import MetricCard from "../components/MetricCard";
import TranscriptCard from "../components/TranscriptCard";
import FeedbackCard from "../components/FeedbackCard";
import CircleMetric from "../components/CircleMetric";

function Dashboard({
  file,
  loading,
  error,
  setFile,
  handleAnalyze,
  result,
  analytics,
}) {
  return (
    <main className="container">
      <UploadCard
        file={file}
        loading={loading}
        error={error}
        setFile={setFile}
        handleAnalyze={handleAnalyze}
      />

      <section className="metricsGrid">
        <MetricCard icon={<FiMic />} label="Speaking Level" value={result?.speaking_level || "--"} />
        <MetricCard icon={<FiZap />} label="Communication Score" value={result ? `${result.communication_score} / 100` : "-- / 100"} />
        <MetricCard icon={<FiFileText />} label="Words Per Minute" value={result?.words_per_minute || "--"} />
        <MetricCard icon={<FiAlertCircle />} label="Filler Words" value={result?.filler_count ?? "--"} />
      </section>

      <TranscriptCard transcript={result?.transcript} />

      <section className="feedbackGrid">
        <FeedbackCard
          title="Strengths"
          type="strength"
          items={result?.strengths}
        />

        <FeedbackCard
          title="Improvements"
          type="improvement"
          items={result?.improvements}
        />
      </section>

      <section className="card">
        <h2 className="cardTitle">Speaking Analytics</h2>

        <div className="analyticsGrid">
          {analytics.map((item) => (
            <CircleMetric
              key={item.label}
              label={item.label}
              value={item.value}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Dashboard;