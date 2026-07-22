from faster_whisper import WhisperModel


class WhisperService:

    model = WhisperModel(
        "base",
        device="cpu",
        compute_type="default"
    )

    @classmethod
    def transcribe(cls, audio_path):

        segments, info = cls.model.transcribe(
            audio_path,
            language="id"
        )

        return " ".join(
            segment.text
            for segment in segments
        )