import tempfile
import os

from fastapi import APIRouter, UploadFile, File, HTTPException

from app.schemas.question import QuestionRequest, QuestionResponse

from app.services.whisper_service import WhisperService
from app.services.llm_service import LLMService

from app.core.supabase_client import supabase

router = APIRouter(
    prefix="/simulation",
    tags=["Simulation"]
)


@router.post("/transcribe")
async def transcribe_audio(
    audio: UploadFile = File(...)
):

    suffix = os.path.splitext(audio.filename)[1]

    with tempfile.NamedTemporaryFile(
        delete=False,
        suffix=suffix
    ) as temp:

        temp.write(await audio.read())
        temp_path = temp.name

    try:

        transcript = WhisperService.transcribe(temp_path)

        return {
            "success": True,
            "transcript": transcript
        }

    except Exception as e:

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )

    finally:

        if os.path.exists(temp_path):

            os.remove(temp_path)


@router.post(
    "/question",
    response_model=QuestionResponse
)
async def generate_question(
    body: QuestionRequest
):

    result = (
        supabase.table("materials")
        .select("*")
        .eq("id", body.material_id)
        .single()
        .execute()
    )

    material = result.data

    question = LLMService.generate_question(
    material_title=material["title"],
    transcript=body.transcript,
)

    return QuestionResponse(
        question=question
    )