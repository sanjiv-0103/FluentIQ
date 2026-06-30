from fastapi import APIRouter, UploadFile, File
import pandas as pd
import shutil
from pathlib import Path

from app.services.predictor import predict_from_features
from app.services.speech_to_text import transcribe_audio
from app.services.feature_extractor import extract_features
from app.services.feedback_generator import generate_feedback
from app.services.speech_metrics import analyze_speech_metrics

router = APIRouter()

UPLOAD_DIR = Path("app/uploads")
UPLOAD_DIR.mkdir(exist_ok=True)


@router.get("/")
def home():
    return {
        "message": "Welcome to FluentIQ API",
        "status": "running"
    }


@router.get("/health")
def health_check():
    return {
        "status": "healthy"
    }


@router.get("/test-predict")
def test_predict():
    sample_features = pd.DataFrame([{
        "duration_seconds": 6.5,
        "word_count": 18,
        "words_per_minute": 165,
        "average_rms_energy": 0.04,
        "average_zero_crossing_rate": 0.09,
        "spectral_centroid": 1500,
        "spectral_bandwidth": 1400,
        "mfcc_1": -300,
        "mfcc_2": 20,
        "mfcc_3": -2,
        "mfcc_4": -2,
        "mfcc_5": 1,
        "mfcc_6": -1,
        "mfcc_7": 0.5,
        "mfcc_8": -0.5,
        "mfcc_9": 1.2,
        "mfcc_10": -1.1,
        "mfcc_11": 0.3,
        "mfcc_12": -0.2,
        "mfcc_13": 0.1
    }])

    prediction = predict_from_features(sample_features)

    return {
        "message": "Test prediction successful",
        "prediction": prediction
    }


@router.post("/upload")
async def upload_audio(file: UploadFile = File(...)):
    file_path = UPLOAD_DIR / file.filename

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return {
        "filename": file.filename,
        "saved_to": str(file_path),
        "status": "Upload Successful"
    }


@router.post("/transcribe")
async def transcribe_uploaded_audio(file: UploadFile = File(...)):
    file_path = UPLOAD_DIR / file.filename

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    transcript = transcribe_audio(file_path)

    return {
        "filename": file.filename,
        "transcript": transcript,
        "status": "Transcription Successful"
    }


@router.post("/analyze")
async def analyze_audio(file: UploadFile = File(...)):
    file_path = UPLOAD_DIR / file.filename

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    transcript = transcribe_audio(file_path)

    features_df, feature_values = extract_features(file_path, transcript)

    prediction = predict_from_features(features_df)

    feedback = generate_feedback(
        prediction["speaking_level"],
        prediction["communication_score"],
        feature_values["words_per_minute"]
    )

    speech_metrics = analyze_speech_metrics(
        transcript,
        feature_values["words_per_minute"],
        prediction["communication_score"]
    )

    return {
        "filename": file.filename,
        "transcript": transcript,
        "speaking_level": prediction["speaking_level"],
        "communication_score": prediction["communication_score"],
        "duration_seconds": round(float(feature_values["duration_seconds"]), 2),
        "word_count": int(feature_values["word_count"]),
        "words_per_minute": round(float(feature_values["words_per_minute"]), 2),
        "strengths": feedback["strengths"],
        "improvements": feedback["improvements"],
        "filler_count": speech_metrics["filler_count"],
        "detected_fillers": speech_metrics["detected_fillers"],
        "fluency_score": speech_metrics["fluency_score"],
        "confidence_score": speech_metrics["confidence_score"],
        "vocabulary_score": speech_metrics["vocabulary_score"],
        "grammar_score": speech_metrics["grammar_score"],
        "pronunciation_score": speech_metrics["pronunciation_score"],
        "status": "Analysis Successful"
    }