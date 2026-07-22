import { useNavigate } from "react-router-dom";

export default function TipsCard({ tips }) {

    const navigate = useNavigate();

    return (

        <div className="tips-section">

            <div className="tips-card">

                <h2>

                    Tips-Tips

                </h2>

                <div className="divider"></div>

                {

                    tips.map((tip, index) => (

                        <div
                            key={index}
                            className="tip-item"
                        >

                            {tip}

                        </div>

                    ))

                }

            </div>

            <button
                className="retry-btn"
                onClick={() => navigate("/simulation")}
            >

                COBA LAGI

            </button>

            <button
                className="history-btn"
                onClick={() => navigate("/history")}
            >

                RIWAYAT

            </button>

        </div>

    );

}