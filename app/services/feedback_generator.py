def generate_feedback(speaking_level, communication_score, words_per_minute):
    strengths = []
    improvements = []

    if words_per_minute >= 120 and words_per_minute <= 170:
        strengths.append("Your speaking pace is clear and natural.")
    elif words_per_minute < 120:
        improvements.append("Try speaking slightly faster to improve fluency.")
    else:
        improvements.append("Try slowing down slightly for better clarity.")

    if communication_score >= 80:
        strengths.append("Your overall communication score is strong.")
    elif communication_score >= 60:
        improvements.append("Your communication is decent, but can be improved with better clarity and confidence.")
    else:
        improvements.append("Focus on improving fluency, clarity, and confidence.")

    if speaking_level == "Advanced":
        strengths.append("You show strong speaking patterns.")
    elif speaking_level == "Intermediate":
        strengths.append("You have a good base and can improve with practice.")
    else:
        improvements.append("Practice short structured answers to improve speaking confidence.")

    return {
        "strengths": strengths,
        "improvements": improvements
    }