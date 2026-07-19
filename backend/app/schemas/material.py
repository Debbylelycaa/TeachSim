from pydantic import BaseModel
from datetime import datetime
from uuid import UUID


class MaterialResponse(BaseModel):
    id: UUID
    title: str
    file_path: str
    file_url: str | None = None
    extracted_text: str | None = None
    created_at: datetime