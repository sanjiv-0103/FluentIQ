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


def correct_speaking_level(predicted_level, predicted_score, feature_dict):
    word_count = feature_dict.get("word_count", 0)
    duration = feature_dict.get("duration_seconds", 0)
    wpm = feature_dict.get("words_per_minute", 0)

    # Very short speeches should not be marked as Advanced
    if word_count < 30:
        return "Beginner"

    # Short speeches can only be Beginner or Intermediate
    if word_count < 80:
        if predicted_score >= 65 and 80 <= wpm <= 160:
            return "Intermediate"
        return "Beginner"

    # Advanced requires enough content, good score, good pace, and enough duration
    if (
        predicted_score >= 85
        and word_count >= 80
        and duration >= 30
        and 100 <= wpm <= 160
    ):
        return "Advanced"

    # Normal intermediate range
    if predicted_score >= 60:
        return "Intermediate"

    return "Beginner"


def predict_from_features(features, feature_dict=None):
    load_models()

    predicted_level = classifier.predict(features)[0]
    predicted_score = regressor.predict(features)[0]
    predicted_score = round(float(predicted_score), 2)

    if feature_dict is not None:
        predicted_level = correct_speaking_level(
            predicted_level,
            predicted_score,
            feature_dict
        )

    return {
        "speaking_level": str(predicted_level),
        "communication_score": predicted_score,
    }