import TranscriptIcon from "../../assets/images/icon_transcript.png";
import MicIcon from "../../assets/images/icon_mic_white.png";

export default function TranscriptPanel({

    phase,

    transcript,

    isRecording,

    onStartRecording,

    onStopRecording,

}) {

    const disabled = phase !== "presentation";

    return (

        <div className="transcript-panel">

            <div className="transcript-header">

                <div className="transcript-title">

                    <img
                        src={TranscriptIcon}
                        alt=""
                        className="transcript-icon"
                    />

                    <span>Transkripsi Real-Time</span>

                </div>

                <button
                    className={`record-btn ${isRecording ? "recording" : ""}`}
                    disabled={disabled}
                    onClick={
                        isRecording
                            ? onStopRecording
                            : onStartRecording
                    }
                >

                    <img
                        src={MicIcon}
                        alt=""
                    />

                    <span>

                        {
                            disabled
                                ? "Selesai"
                                : isRecording
                                    ? "Merekam..."
                                    : "Mulai"
                        }

                    </span>

                </button>

            </div>

            <div className="transcript-divider"></div>

            <div className="transcript-content">

                {
                    transcript.length > 0
                        ? transcript
                        : "Silakan mulai menjelaskan materi. Transkripsi akan muncul secara real-time selama sesi presentasi."
                }

            </div>

        </div>

    );

}