import { ReactMediaRecorder } from "react-media-recorder";
import { FiMic, FiSquare, FiCheckCircle } from "react-icons/fi";

function Recorder({ setFile }) {
  const convertBlobToFile = async (mediaBlobUrl) => {
    const response = await fetch(mediaBlobUrl);
    const blob = await response.blob();

    const recordedFile = new File([blob], "recorded_speech.webm", {
      type: "audio/webm",
    });

    setFile(recordedFile);
  };

  return (
    <div className="recorderBox">
      <h3 className="recorderTitle">Record Your Voice</h3>

      <ReactMediaRecorder
        audio
        render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
          <div>
            <p className="recordStatus">
              Status: <span>{status}</span>
            </p>

            <div className="recorderActions">
              <button className="recordBtn" onClick={startRecording}>
                <FiMic /> Start Recording
              </button>

              <button className="stopBtn" onClick={stopRecording}>
                <FiSquare /> Stop
              </button>
            </div>

            {mediaBlobUrl && (
              <div className="audioPreview">
                <audio src={mediaBlobUrl} controls />

                <button
                  className="useRecordingBtn"
                  onClick={() => convertBlobToFile(mediaBlobUrl)}
                >
                  <FiCheckCircle /> Use This Recording
                </button>
              </div>
            )}
          </div>
        )}
      />
    </div>
  );
}

export default Recorder;