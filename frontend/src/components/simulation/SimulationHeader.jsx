import { useNavigate } from "react-router-dom";

export default function SimulationHeader({
    title,
    timeLeft,
}) {

    const navigate = useNavigate();

    const formatTime = (seconds) => {

        const minute = Math.floor(seconds / 60);
        const second = seconds % 60;

        return `${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}`;
    };

    return (

        <div className="simulation-header">

            <div className="simulation-material">
                {title}
            </div>

            <button
                className="change-material-btn"
                onClick={() => navigate("/materials")}
            >
                Ganti Materi
            </button>

            <div className="simulation-timer">
                {formatTime(timeLeft)}
            </div>

        </div>

    );
}