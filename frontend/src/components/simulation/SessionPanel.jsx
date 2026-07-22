import SpeakerIcon from "../../assets/images/icon_speaker.png";

export default function SessionPanel({

    phase,

    question,

}) {

    const disabled = phase !== "question";

    return (

        <div
            className={`session-panel ${disabled ? "disabled" : ""}`}
        >

            <div className="session-header">

                <div className="session-title">

                    <img
                        src={SpeakerIcon}
                        alt=""
                    />

                    <span>Pertanyaan 1</span>

                </div>

                <button
                    className="qa-button"
                    disabled={disabled}
                >
                    Q&A
                </button>

            </div>

            <div className="session-divider"></div>

            <div className="question-box">

                {
                    phase === "generating"
                        ? "AI sedang menyusun pertanyaan..."
                        : question || "Menunggu sesi tanya jawab dimulai."
                }

            </div>

            <button
                className="answer-button"
                disabled={disabled}
            >

                {
                    disabled
                        ? "Menunggu..."
                        : "Jawab"
                }

            </button>

        </div>

    );

}