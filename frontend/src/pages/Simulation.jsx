import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import SimulationHeader from "../components/simulation/SimulationHeader";
import Classroom from "../components/simulation/Classroom";
import TranscriptPanel from "../components/simulation/TranscriptPanel";
import SessionPanel from "../components/simulation/SessionPanel";
import MicPanel from "../components/simulation/MicPanel";

import Background from "../assets/images/auth_bg.png";
import Grid from "../assets/images/auth_grid.png";
import Grass from "../assets/images/grass.png";

import "../styles/simulation.css";

import {
  transcribeAudio,
  generateQuestion,
} from "../services/simulationService";

export default function Simulation() {
  const { materialId } = useParams();

  const [material, setMaterial] = useState(null);

  const [phase, setPhase] = useState("presentation");

  const [timeLeft, setTimeLeft] = useState(60);

  const [transcript, setTranscript] = useState("");

  const [question, setQuestion] = useState("");

  const [isRecording, setIsRecording] = useState(false);

  const mediaRecorderRef = useRef(null);

  const audioChunksRef = useRef([]);

  const streamRef = useRef(null);
  const navigate = useNavigate();

  // ==========================
  // Ambil Data Materi
  // ==========================

  useEffect(() => {
    async function fetchMaterial() {
      const { data, error } = await supabase
        .from("materials")
        .select("*")
        .eq("id", materialId)
        .single();

      if (error) {
        console.error(error);
        return;
      }

      setMaterial(data);
    }

    fetchMaterial();
  }, [materialId]);

  // ==========================
  // Timer
  // ==========================

  useEffect(() => {
    if (phase !== "presentation") return;

    if (timeLeft <= 0) {
      finishPresentation();

      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, phase]);

  // ==========================
  // Presentation
  // ==========================

  async function startPresentation() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });

      streamRef.current = stream;

      const recorder = new MediaRecorder(stream);

      audioChunksRef.current = [];

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      recorder.onstop = handleRecordingFinished;

      recorder.start();

      mediaRecorderRef.current = recorder;

      setIsRecording(true);
    } catch (err) {
      console.error(err);
    }
  }

  function stopPresentation() {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }

    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
    }

    setIsRecording(false);
  }

  async function handleRecordingFinished() {
    try {
      const blob = new Blob(
        audioChunksRef.current,

        {
          type: "audio/webm",
        },
      );

      const transcriptResult = await transcribeAudio(blob);

      setTranscript(transcriptResult.transcript);

      setPhase("generating");

      const questionResult = await generateQuestion(
        materialId,

        transcriptResult.transcript,
      );

      console.log(questionResult);
      console.log(questionResult.question);
      console.log(typeof questionResult.question);
      console.log(questionResult.question.length);
      console.log(JSON.stringify(questionResult.question));

      setQuestion(questionResult.question);

      setPhase("question");
    } catch (err) {
      console.error(err);
    }
  }

const finishPresentation = () => {

    navigate("/evaluation", {
        state: {
            title: material.title
        }
    });

};

  return (
    <MainLayout background={Background} grid={Grid} grass={Grass} isLoggedIn>
      <div className="simulation-container">
        <SimulationHeader
          title={material?.title || "Memuat Materi..."}
          timeLeft={timeLeft}
        />

        <Classroom phase={phase} />

        <TranscriptPanel
          phase={phase}
          transcript={transcript}
          isRecording={isRecording}
          onStartRecording={startPresentation}
          onStopRecording={stopPresentation}
        />

        <div className="simulation-bottom">
          <SessionPanel phase={phase} question={question} />

          <MicPanel phase={phase} onClick={finishPresentation} />
        </div>
      </div>
    </MainLayout>
  );
}
