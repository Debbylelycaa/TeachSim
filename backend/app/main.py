from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import health, materials

app = FastAPI(title="TeachSim API")

# CORS: izinin frontend (Vite, port 5173) buat manggil API ini.
# Kalau nanti deploy, ganti allow_origins ke domain production.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Tiap fitur punya router sendiri, didaftarin di sini.
# Nambah fitur baru (sessions, scores) tinggal bikin router baru
# di app/routers/, lalu include di sini — main.py tetap ringkas.
app.include_router(health.router)
app.include_router(materials.router)
