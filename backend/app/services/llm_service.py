from google import genai

from app.config import settings


client = genai.Client(
    api_key=settings.gemini_api_key
)


class LLMService:

    @staticmethod
    def generate_question(
        material_title: str,
        transcript: str
    ) -> str:

        prompt = f"""
Kamu adalah dosen pembimbing microteaching.

Materi:
{material_title}

Transkrip presentasi mahasiswa:
{transcript}

Berdasarkan materi dan presentasi tersebut,
buat SATU pertanyaan yang relevan.

Jawab hanya pertanyaannya saja.
"""

        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt
        )

        return response.text.strip()