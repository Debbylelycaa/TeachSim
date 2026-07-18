<div align="center">

# TeachSim

### AI-Powered Adaptive Microteaching Simulation Platform

Empowering future educators through intelligent teaching simulations, real-time feedback, and AI-assisted pedagogical evaluation.

![Status](https://img.shields.io/badge/status-under%20development-yellow)
![License](https://img.shields.io/badge/license-MIT-green)
![Version](https://img.shields.io/badge/version-0.1.0-blue)

</div>

---

## About

TeachSim is an AI-powered microteaching platform designed to help pre-service teachers practice teaching independently through interactive simulations.

Unlike conventional microteaching, TeachSim provides:

-  Voice-to-Voice AI Student Simulation
- Adaptive HOTS Question Generation
- Automatic Pedagogical Evaluation
- Teaching Performance Report
- Learning Progress Tracking

The platform aims to provide accessible, objective, and scalable teaching practice for future educators, including those in low-resource environments.

---

## Features

- Authentication with Supabase
- Teaching material management
- PDF learning material upload
- AI-generated student questions
- Voice-based teaching simulation
- Automatic speech transcription
- AI pedagogical assessment
- Performance history
- Downloadable evaluation report

---

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS

### Backend

- FastAPI
- Python

### Database & Authentication

- Supabase Auth
- PostgreSQL

### AI Services

- OpenAI Whisper
- Gemini API
- PyMuPDF
- MathPix OCR (Fallback)

### Deployment

- Vercel (Frontend)
- Railway (Backend)
- Supabase

---

## System Architecture

```text
                React + Vite
                      │
                REST API
                      │
                  FastAPI
      ┌──────────┬───────────┬──────────┐
      │          │           │          │
 Supabase     Whisper     Gemini     Storage
(Auth/DB)       STT         LLM     Supabase
```

---

## Project Structure

```text
teachsim/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── ...
│
├── backend/
│   ├── app/
│   ├── api/
│   ├── services/
│   ├── models/
│   └── ...
│
├── docs/
│
└── README.md
```

---

## Getting Started

### Clone Repository

```bash
git clone https://github.com/debbylelycaa/teachsim.git
cd teachsim
```

---

### Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend will run at

```
http://localhost:5173
```

---

### Backend

```bash
cd backend

python -m venv venv
```

Windows

```bash
venv\Scripts\activate
```

Linux / macOS

```bash
source venv/bin/activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run server

```bash
uvicorn app.main:app --reload
```

Backend will run at

```
http://localhost:8000
```

---

## Team

**TeachSim Development Team**

- Hafizh Dhiya Ulhaq
- Debby Lelyca Rohdearni Damanik
- Dianne Dini Al-haq
- Khalilah Atika Akmal

---

## AI Disclosure

This project utilizes Generative AI during the development process.

AI was used as an engineering assistant for:

- architecture planning
- brainstorming
- technical discussion
- code generation assistance
- documentation drafting

All generated outputs were reviewed, validated, and modified by the development team before implementation.

---

## License

This project is developed for the **Lomba Inovasi Digital Mahasiswa (LIDM) 2026**.
