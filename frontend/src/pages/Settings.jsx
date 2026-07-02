import { useState } from "react";

function Settings() {
  const [feedbackMode, setFeedbackMode] = useState(
    localStorage.getItem("fluentiq-feedback-mode") || "Balanced"
  );

  const [focusArea, setFocusArea] = useState(
    localStorage.getItem("fluentiq-focus-area") || "Overall Communication"
  );

  const saveSettings = () => {
    localStorage.setItem("fluentiq-feedback-mode", feedbackMode);
    localStorage.setItem("fluentiq-focus-area", focusArea);
    alert("Settings saved successfully.");
  };

  const clearHistory = () => {
    const confirmClear = window.confirm(
      "Are you sure you want to clear FluentIQ history?"
    );

    if (!confirmClear) return;

    localStorage.removeItem("fluentiq-history");
    localStorage.removeItem("fluentiq-reports");

    alert("History cleared successfully.");
  };

  const resetAppData = () => {
    const confirmReset = window.confirm(
      "This will reset all FluentIQ app data. Continue?"
    );

    if (!confirmReset) return;

    localStorage.clear();
    window.location.reload();
  };

  return (
    <main className="container">
      <section className="settings-card">
        <div className="settings-header">
          <div>
            <h2 className="cardTitle">Settings</h2>
            <p className="settings-subtitle">
              Customize feedback preferences and manage FluentIQ app data.
            </p>
          </div>
        </div>

        <div className="settings-grid">
          <div className="settings-section">
            <h3>Feedback Preferences</h3>

            <label>Feedback Mode</label>
            <select
              value={feedbackMode}
              onChange={(e) => setFeedbackMode(e.target.value)}
            >
              <option>Balanced</option>
              <option>Friendly</option>
              <option>Strict</option>
            </select>

            <label>Focus Area</label>
            <select
              value={focusArea}
              onChange={(e) => setFocusArea(e.target.value)}
            >
              <option>Overall Communication</option>
              <option>Grammar</option>
              <option>Fluency</option>
              <option>Pronunciation</option>
              <option>Confidence</option>
              <option>Vocabulary</option>
            </select>
          </div>

          <div className="settings-section">
            <h3>App Theme</h3>

            <label>Theme Mode</label>
            <input type="text" value="Light Mode" readOnly />

            <p className="settings-note">
              Dark mode will be added after full theme support is applied across
              all pages.
            </p>
          </div>

          <div className="settings-section">
            <h3>Data Management</h3>

            <p className="settings-note">
              Manage locally stored FluentIQ history and report data.
            </p>

            <div className="settings-actions">
              <button className="danger-btn" onClick={clearHistory}>
                Clear History
              </button>

              <button className="danger-outline-btn" onClick={resetAppData}>
                Reset App Data
              </button>
            </div>
          </div>

          <div className="settings-section about-section">
            <h3>About FluentIQ</h3>

            <p>
              FluentIQ is an AI-powered English fluency and communication
              analysis platform designed to help users improve speaking
              confidence, grammar, vocabulary, fluency, and pronunciation.
            </p>

            <div className="settings-info">
              <span>Version</span>
              <strong>1.0.0</strong>
            </div>

            <div className="settings-info">
              <span>Project Type</span>
              <strong>AI + NLP + PWA</strong>
            </div>

            <div className="settings-info">
              <span>Status</span>
              <strong>Installable Web App</strong>
            </div>
          </div>
        </div>

        <div className="settings-save-wrapper">
          <button className="primary-btn" onClick={saveSettings}>
            Save Settings
          </button>
        </div>
      </section>
    </main>
  );
}

export default Settings;