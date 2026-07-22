// nanti iconnya kamu insert sendiri
import PdfIcon from "../../assets/icons/upload.svg";

export default function HistoryItem({ history }) {

    const date = history.createdAt
        ? new Date(history.createdAt).toLocaleDateString("id-ID")
        : "-";

    return (

        <div className="history-item">

            <div className="history-info">

                <h2>

                    {history.title}

                </h2>

                <p>

                    {date}

                </p>

            </div>

            <div className="history-action">

                <div className="history-score">

                    {history.score}%

                </div>

                <button className="pdf-button">

                    <img
                        src={PdfIcon}
                        alt=""
                    />

                    PDF

                </button>

            </div>

        </div>

    );

}