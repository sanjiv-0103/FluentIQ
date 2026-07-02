# 🎤 FluentIQ – AI-Powered Communication Coach

> Analyze spoken English using AI and Machine Learning to evaluate communication skills, fluency, speaking level, and receive personalized feedback.

---

## 🚀 Overview

FluentIQ is an end-to-end AI-powered communication assessment platform designed to help students and job seekers improve their English speaking skills.

The application accepts recorded or uploaded speech, transcribes it using Whisper, extracts speech features, predicts communication quality using trained Machine Learning models, and generates personalized feedback through an intuitive dashboard.

---

## ✨ Features

- 🎙️ Live voice recording
- 📁 Audio file upload
- 📝 Speech-to-text transcription (Whisper)
- 🧠 ML-based speaking level prediction
- 📊 Communication score prediction
- 📈 Speech analytics
  - Words Per Minute
  - Filler Words
  - Speaking Level
  - Communication Score
- 💬 AI-generated feedback
- 📄 Downloadable analysis report
- 🌓 Dark / Light mode
- 📱 Responsive UI
- 🐳 Docker support
- ⚙️ GitHub Actions CI/CD

---

## 🖥️ Application Screenshots

### Dashboard

![Dashboard](reports/screenshots/dashboard.png)

### Analysis Result

![Analysis](reports/screenshots/result.png)

### Report

![Report](reports/screenshots/report.png)

---

## 🏗️ Project Architecture

```
                User
                  │
                  ▼
        React + Vite Frontend
                  │
                  ▼
            FastAPI Backend
                  │
      ┌───────────┴────────────┐
      ▼                        ▼
Speech-to-Text           Feature Extraction
 (Groq Whisper)         (Librosa + NLP)
      │                        │
      └───────────┬────────────┘
                  ▼
         Machine Learning Models
                  │
                  ▼
      Feedback & Analytics Engine
                  │
                  ▼
            Beautiful Dashboard
```

---

## 🧠 Machine Learning Pipeline

1. Audio Upload
2. Speech Transcription
3. Audio Feature Extraction
4. NLP Feature Extraction
5. Speaking Level Classification
6. Communication Score Regression
7. Speech Analytics
8. AI Feedback Generation

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- JavaScript
- CSS

### Backend

- FastAPI
- Python

### Machine Learning

- Scikit-learn
- Librosa
- NumPy
- Pandas

### Speech Processing

- Groq Whisper
- NLP

### DevOps

- Docker
- Docker Compose
- GitHub Actions

---

# 📂 Project Structure

```
FluentIQ/
│
├── app/
│   ├── api/
│   │   └── routes.py
│   │
│   ├── schemas/
│   │
│   ├── services/
│   │   ├── feature_extractor.py
│   │   ├── feedback_generator.py
│   │   ├── predictor.py
│   │   ├── speech_metrics.py
│   │   └── speech_to_text.py
│   │
│   ├── uploads/
│   ├── utils/
│   ├── __init__.py
│   └── main.py
│
├── data/
│   ├── processed/
│   ├── raw/
│   └── samples/
│
├── frontend/
│   ├── public/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── AnalyticsCard.jsx
│   │   │   ├── CircleMetric.jsx
│   │   │   ├── FeedbackCard.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── MetricCard.jsx
│   │   │   ├── Recorder.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── TranscriptCard.jsx
│   │   │   └── UploadCard.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Analytics.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── History.jsx
│   │   │   ├── Reports.jsx
│   │   │   └── Settings.jsx
│   │   │
│   │   ├── styles/
│   │   │   ├── dashboard.css
│   │   │   └── globals.css
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   └── vite.config.js
│
├── input/
|
├── .github/
|     ├── workflows/
│           ├── ci.yml
|     
├── Dockerfile
|
├── models/
│   ├── communication_score_regressor_improved.pkl
│   ├── speech_level_classifier_improved.pkl
│   ├── speech_level_classifier.pkl
│   └── wpm_regressor.pkl
│
├── notebooks/
│   ├── 01_Project_Planning.ipynb
│   ├── 02_Data_Exploration.ipynb
│   ├── 03_Build_Dataset.ipynb
│   ├── 04_Model_Training.ipynb
│   ├── 05_Model_Evaluation.ipynb
│   ├── 06_Speech_Inference.ipynb
│   └── 07_Model_Improvement.ipynb
│
├── reports/
│   └── screenshots/
|
├── .gitignore
├── README.md
└── requirements.txt
```

---
## ⚡ Running Locally

### Backend

```bash
pip install -r requirements.txt

python -m uvicorn app.main:app --reload
```

### Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## 🐳 Run with Docker

```bash
docker compose up --build
```

---

## ⚙️ Continuous Integration

GitHub Actions automatically:

- Installs dependencies
- Checks Python code
- Builds React application
- Validates project after every push

---

## 🎯 Future Improvements

- Better pronunciation analysis
- Confidence detection
- Pause analysis
- Grammar scoring
- Model retraining pipeline

---

## 👨‍💻 Author

**B Sanjiv**

Artificial Intelligence & Machine Learning Student

SRM Institute of Science and Technology
