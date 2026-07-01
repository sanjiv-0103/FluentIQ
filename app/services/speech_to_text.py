import whisper

model = None


def load_whisper_model():
    global model

    if model is None:
        model = whisper.load_model("tiny")

    return model


def transcribe_audio(audio_path):
    whisper_model = load_whisper_model()
    result = whisper_model.transcribe(str(audio_path))
    return result["text"].strip()