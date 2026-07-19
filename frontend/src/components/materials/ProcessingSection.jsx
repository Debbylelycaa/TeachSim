import "./processing-section.css";

import PdfIcon from "../../assets/icons/pdf.svg";

export default function ProcessingSection({ queue = [] }) {

    if (queue.length === 0) {
        return null;
    }

    return (

        <section className="processing-section">

            <div className="processing-header">

                <div className="processing-spinner"></div>

                <h2>Sedang diproses</h2>

            </div>

            <div className="processing-list">

                {queue.map((item) => (

                    <div
                        key={item.id}
                        className="processing-item"
                    >

                        <div className="processing-top">

                            <div className="processing-file">

                                <div className="processing-pdf-icon">
                                    PDF
                                </div>

                                <span className="processing-name">

                                    {item.name}

                                </span>

                            </div>

                            <span className="processing-percent">

                                {item.progress}%

                            </span>

                        </div>

                        <div className="processing-progress">

                            <div
                                className="processing-progress-fill"
                                style={{
                                    width: `${item.progress}%`,
                                }}
                            />

                        </div>

                    </div>

                ))}

            </div>

        </section>

    );

}