import uuid
from fastapi import APIRouter, Depends, UploadFile, File, HTTPException
from app.dependencies.auth import get_current_user
from app.core.supabase_client import supabase
from app.schemas.material import MaterialResponse

router = APIRouter(prefix="/materials", tags=["materials"])

BUCKET_NAME = "materials"
ALLOWED_TYPES = {"application/pdf"}


@router.post("/upload", response_model=MaterialResponse)
async def upload_material(
    file: UploadFile = File(...),
    user: dict = Depends(get_current_user),  # <-- endpoint ini otomatis protected
):
    if file.content_type not in ALLOWED_TYPES:
        raise HTTPException(status_code=400, detail="Cuma file PDF yang didukung")

    file_bytes = await file.read()

    storage_path = f"{user['id']}/{uuid.uuid4()}_{file.filename}"

    supabase.storage.from_(BUCKET_NAME).upload(
        storage_path,
        file_bytes,
        {"content-type": file.content_type},
    )

    result = supabase.table("materials").insert({
        "user_id": user["id"],
        "title": file.filename,
        "file_path": storage_path,
        "extracted_text": None,
    }).execute()

    return result.data[0]


@router.get("", response_model=list[MaterialResponse])
def list_materials(user: dict = Depends(get_current_user)):
    result = (
        supabase.table("materials")
        .select("*")
        .eq("user_id", user["id"])
        .order("created_at", desc=True)
        .execute()
    )

    for item in result.data:
        try:
            signed = (
                supabase.storage
                .from_(BUCKET_NAME)
                .create_signed_url(
                    item["file_path"],
                    60 * 60,
                )
            )

            item["file_url"] = signed["signedURL"]

        except Exception as e:
            print(f"Signed URL gagal untuk {item['title']}: {e}")
            item["file_url"] = None

    return result.data
