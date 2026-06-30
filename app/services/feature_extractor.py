import librosa
import pandas as pd


FEATURE_COLUMNS = [
    "duration_seconds",
    "word_count",
    "words_per_minute",
    "average_rms_energy",
    "average_zero_crossing_rate",
    "spectral_centroid",
    "spectral_bandwidth",
    "mfcc_1", "mfcc_2", "mfcc_3", "mfcc_4", "mfcc_5",
    "mfcc_6", "mfcc_7", "mfcc_8", "mfcc_9", "mfcc_10",
    "mfcc_11", "mfcc_12", "mfcc_13"
]


def extract_features(audio_path, transcript):
    y, sr = librosa.load(audio_path, sr=None)

    duration_seconds = librosa.get_duration(y=y, sr=sr)

    words = transcript.split()
    word_count = len(words)

    if duration_seconds > 0:
        words_per_minute = word_count / (duration_seconds / 60)
    else:
        words_per_minute = 0

    average_rms_energy = librosa.feature.rms(y=y).mean()
    average_zero_crossing_rate = librosa.feature.zero_crossing_rate(y).mean()

    spectral_centroid = librosa.feature.spectral_centroid(y=y, sr=sr).mean()
    spectral_bandwidth = librosa.feature.spectral_bandwidth(y=y, sr=sr).mean()

    mfccs = librosa.feature.mfcc(y=y, sr=sr, n_mfcc=13)
    mfcc_means = mfccs.mean(axis=1)

    feature_dict = {
        "duration_seconds": duration_seconds,
        "word_count": word_count,
        "words_per_minute": words_per_minute,
        "average_rms_energy": average_rms_energy,
        "average_zero_crossing_rate": average_zero_crossing_rate,
        "spectral_centroid": spectral_centroid,
        "spectral_bandwidth": spectral_bandwidth,
    }

    for i in range(13):
        feature_dict[f"mfcc_{i+1}"] = mfcc_means[i]

    feature_df = pd.DataFrame([feature_dict])
    feature_df = feature_df[FEATURE_COLUMNS]

    return feature_df, feature_dict