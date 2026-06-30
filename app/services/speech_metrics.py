FILLER_WORDS = [
    "um", "uh", "umm", "uhh",
    "like", "actually", "basically",
    "you know", "i mean", "so"
]


def analyze_speech_metrics(transcript, words_per_minute, communication_score):
    transcript_lower = transcript.lower()
    words = transcript_lower.split()

    filler_count = 0
    detected_fillers = []

    for filler in FILLER_WORDS:
        count = transcript_lower.count(filler)
        if count > 0:
            filler_count += count
            detected_fillers.append({
                "filler": filler,
                "count": count
            })

    total_words = len(words)
    unique_words = len(set(words))

    vocabulary_score = 0
    if total_words > 0:
        vocabulary_score = min(100, round((unique_words / total_words) * 100, 2))

    if 120 <= words_per_minute <= 170:
        fluency_score = 88
    elif words_per_minute < 120:
        fluency_score = 72
    else:
        fluency_score = 68

    fluency_score = max(0, fluency_score - filler_count * 3)

    confidence_score = round(
        min(100, max(0, communication_score - filler_count * 2)),
        2
    )

    grammar_score = 85
    if total_words < 8:
        grammar_score = 65
    elif filler_count > 3:
        grammar_score = 75

    pronunciation_score = round(
        min(100, max(0, communication_score - 3)),
        2
    )

    return {
        "filler_count": filler_count,
        "detected_fillers": detected_fillers,
        "fluency_score": fluency_score,
        "confidence_score": confidence_score,
        "vocabulary_score": vocabulary_score,
        "grammar_score": grammar_score,
        "pronunciation_score": pronunciation_score
    }