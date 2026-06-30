import joblib
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parents[2]
MODEL_DIR = BASE_DIR / "models"

classifier = joblib.load(MODEL_DIR / "speech_level_classifier_improved.pkl")
regressor = joblib.load(MODEL_DIR / "communication_score_regressor_improved.pkl")

def predict_from_features(features):
    predicted_level = classifier.predict(features)[0]
    predicted_score = regressor.predict(features)[0]

    return {
        "speaking_level": str(predicted_level),
        "communication_score": round(float(predicted_score), 2)
    }