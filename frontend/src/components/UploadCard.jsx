import { FiUploadCloud, FiMusic, FiTrash2 } from "react-icons/fi";
import { motion } from "framer-motion";
import Recorder from "./Recorder";

function UploadCard({ file, loading, error, setFile, handleAnalyze }) {
  const removeFile = () => {
    setFile(null);
  };

  return (
    <motion.section
      className="uploadCard"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className="sectionTitle">Upload Your Speech</h2>

      <p className="muted">
        Upload or record an audio file and receive instant AI-powered communication feedback.
      </p>

      <Recorder setFile={setFile} />

      <label className="dropBox">
        <FiUploadCloud size={42} color="#7c3aed" />
        <strong>Drag & Drop Audio</strong>
        <span>or click to browse</span>

        <input
          type="file"
          accept="audio/*"
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />
      </label>

      {file && (
        <div className="selectedFileCard">
          <div className="fileIcon">
            <FiMusic />
          </div>

          <div className="fileInfo">
            <strong>{file.name}</strong>
            <span>Audio File</span>
          </div>

          <button className="removeFileBtn" onClick={removeFile}>
            <FiTrash2 />
          </button>
        </div>
      )}

      <button
        className="primaryBtn"
        disabled={loading}
        onClick={handleAnalyze}
      >
        {loading ? "Analyzing..." : "Analyze Speech"}
      </button>

      {error && <p className="error">{error}</p>}
    </motion.section>
  );
}

export default UploadCard;