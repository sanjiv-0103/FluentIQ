import joblib
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parents[2]
MODEL_DIR = BASE_DIR / "models"

classifier = None
regressor = None


def load_models():
    global classifier, regressor

    if classifier is None:
        classifier = joblib.load(MODEL_DIR / "speech_level_classifier_improved.pkl")

    if regressor is None:
        regressor = joblib.load(MODEL_DIR / "communication_score_regressor_improved.pkl")


def predict_from_features(features):
    load_models()

    predicted_level = classifier.predict(features)[0]
    predicted_score = regressor.predict(features)[0]

    return {
        "speaking_level": str(predicted_level),
        "communication_score": round(float(predicted_score), 2),
    }