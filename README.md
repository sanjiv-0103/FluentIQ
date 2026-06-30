# 🎙️ FluentIQ – AI Communication Coach

FluentIQ is an AI-powered communication coaching platform that analyzes spoken English and provides detailed feedback on communication skills. The application combines speech recognition, machine learning, and an interactive dashboard to help users improve fluency, confidence, pronunciation, grammar, and overall speaking ability.

---

## 🚀 Features

- 🎤 Voice Recording
- 📤 Audio Upload (Drag & Drop)
- 📝 Automatic Speech Transcription
- 📊 AI Communication Score
- 🗣 Speaking Level Prediction
- ⚡ Words Per Minute Calculation
- 🚫 Filler Word Detection
- 💡 Personalized Strengths & Improvements
- 📈 Speaking Analytics Dashboard
- 📄 Downloadable PDF Reports
- 🕒 Analysis History
- 🎨 Modern Responsive UI

---

## 🖼️ Application Screenshots

### Dashboard

![Dashboard](reports/screenshots/dashboard.png)

### History

![History](reports/screenshots/history.png)

### Analytics

![Analytics](reports/screenshots/analytics.png)

### Reports

![Reports](reports/screenshots/reports.png)

### PDF Report

![PDF](reports/screenshots/pdf.png)

---

# 🏗️ System Architecture

```
              User
                │
                ▼
        React Frontend
                │
      Upload / Record Audio
                │
                ▼
          FastAPI Backend
                │
      Speech-to-Text (Whisper)
                │
      Feature Extraction
                │
      AI Communication Scoring
                │
      Feedback Generation
                │
                ▼
 Dashboard • History • PDF Reports
```

---

# ⚙️ Tech Stack

## Frontend

- React.js
- Vite
- CSS3
- React Icons
- Framer Motion
- jsPDF

## Backend

- FastAPI
- Python
- Uvicorn

## AI / Machine Learning

- OpenAI Whisper
- Librosa
- NumPy
- Speech Processing
- Natural Language Processing (NLP)

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
│
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

# 🔄 Workflow

1. User uploads or records audio.
2. Audio is sent to the FastAPI backend.
3. Whisper converts speech into text.
4. Speech features are extracted.
5. AI evaluates communication quality.
6. Dashboard displays:
   - Communication Score
   - Speaking Level
   - WPM
   - Filler Words
   - Analytics
   - Strengths
   - Improvements
7. User can download a PDF report or view previous analyses.

---

# 💻 Installation

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/FluentIQ.git
```

## Backend

```bash
cd FluentIQ

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

python -m uvicorn app.main:app --reload
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# 📊 Sample Output

- Speaking Level
- Communication Score
- Transcript
- Words Per Minute
- Filler Words
- Confidence Score
- Grammar Score
- Vocabulary Score
- Pronunciation Score
- Personalized Feedback

---

# 🎯 Future Enhancements

- User Authentication
- Cloud Database
- Progress Tracking
- Interview Mode
- Multi-language Support
- Mobile Application

---

# 👨‍💻 Developer

**B Sanjiv**

AI & Machine Learning Student

Passionate about Artificial Intelligence, Machine Learning, NLP, Speech Processing, and Full Stack AI Applications.
