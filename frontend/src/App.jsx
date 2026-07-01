import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
import Analytics from "./pages/Analytics";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

import "./styles/dashboard.css";

function App() {
  const [activePage, setActivePage] = useState("dashboard");
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const [history, setHistory] = useState(() => {
    const savedHistory = localStorage.getItem("fluentiq_history");
    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    if (!file) {
      setError("Please choose an audio file first.");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("https://fluentiq-api.onrender.com/analyze", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Analysis failed. Please try again.");
      }

      const data = await response.json();

      setResult(data);

      setHistory((prev) => {
        const updatedHistory = [data, ...prev];
        localStorage.setItem("fluentiq_history", JSON.stringify(updatedHistory));
        return updatedHistory;
      });
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const openHistoryItem = (item) => {
    setResult(item);
    setActivePage("dashboard");
  };

  const analytics = [
    {
      label: "Fluency",
      value: result ? result.fluency_score : 0,
    },
    {
      label: "Confidence",
      value: result ? result.confidence_score : 0,
    },
    {
      label: "Vocabulary",
      value: result ? result.vocabulary_score : 0,
    },
    {
      label: "Grammar",
      value: result ? result.grammar_score : 0,
    },
    {
      label: "Pronunciation",
      value: result ? result.pronunciation_score : 0,
    },
  ];

  return (
    <div className="app-layout">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      <div className="main">
        <Header setActivePage={setActivePage} />

        {activePage === "dashboard" && (
          <Dashboard
            file={file}
            loading={loading}
            error={error}
            setFile={setFile}
            handleAnalyze={handleAnalyze}
            result={result}
            analytics={analytics}
          />
        )}

        {activePage === "history" && (
          <History history={history} openHistoryItem={openHistoryItem} />
        )}

        {activePage === "analytics" && <Analytics history={history} />}

        {activePage === "reports" && <Reports result={result} />}

        {activePage === "settings" && <Settings />}
      </div>
    </div>
  );
}

export default App;