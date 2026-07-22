from pydantic import BaseModel


class QuestionRequest(BaseModel):
    material_id: str
    transcript: str


class QuestionResponse(BaseModel):
    question: str