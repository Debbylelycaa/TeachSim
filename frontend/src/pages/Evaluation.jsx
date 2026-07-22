import { useLocation } from "react-router-dom";
import "../styles/evaluation.css";


import MainLayout from "../components/layout/MainLayout";

import Background from "../assets/images/auth_bg.png";
import Grid from "../assets/images/auth_grid.png";
import Grass from "../assets/images/grass.png";

import ScoreCard from "../components/evaluation/ScoreCard";
import SkillItem from "../components/evaluation/SkillItem";
import TipsCard from "../components/evaluation/TipsCard";

// sementara pakai png
import ScoreCircle from "../assets/images/score_82.png";

export default function Evaluation() {

  const location = useLocation();

  const title = location.state?.title ?? "Matematika — Persamaan Linear";

  const score = 82;

  const skills = [
    {
      title: "Membuka Pelajaran",
      description: "Apersepsi & motivasi awal sudah sangat baik.",
      score: 87,
    },

    {
      title: "Menjelaskan Konsep",
      description: "Gunakan lebih banyak contoh visual konkret.",
      score: 74,
    },

    {
      title: "Keterampilan Bertanya",
      description: "Pertanyaan HOTS sudah baik, tingkatkan frekuensi.",
      score: 82,
    },

    {
      title: "Memberi Penguatan",
      description: "Pujian verbal positif perlu ditingkatkan.",
      score: 68,
    },

    {
      title: "Mengelola Kelas",
      description: "Pengelolaan waktu sudah sangat efisien.",
      score: 90,
    },

    {
      title: "Membimbing Diskusi",
      description: "Masih perlu latihan memfasilitasi diskusi kelompok.",
      score: 65,
    },

    {
      title: "Menutup Pelajaran",
      description: "Kesimpulan dan refleksi sudah terstruktur.",
      score: 85,
    },

    {
      title: "Variasi Mengajar",
      description: "Variasi aktivitas sudah cukup menarik.",
      score: 79,
    },
  ];

  const tips = [
    "Fokus pada teknik memberi penguatan positif di sesi berikutnya.",

    "Latih fasilitasi diskusi dengan pertanyaan terbuka (open-ended).",

    "Pertahankan pengelolaan kelas yang sudah sangat baik!",
  ];

  return (
    <MainLayout background={Background} grid={Grid} grass={Grass} isLoggedIn>
      <div className="evaluation-container">
        {/* HERO */}

        <ScoreCard
          score={score}
          title={title}
          date="15 April 2026"
          duration="25 menit"
          scoreImage={ScoreCircle}
        />

        <div className="evaluation-content">
          {/* LEFT */}

          <div className="skill-card">
            <h2>8 Keterampilan Dasar Mengajar</h2>

            <div className="divider" />

            {skills.map((skill, index) => (
              <SkillItem
                key={index}
                index={index + 1}
                title={skill.title}
                description={skill.description}
                score={skill.score}
              />
            ))}
          </div>

          {/* RIGHT */}

          <TipsCard

    tips={tips}

/>
        </div>
      </div>
    </MainLayout>
  );
}
