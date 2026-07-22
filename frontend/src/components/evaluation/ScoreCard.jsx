export default function ScoreCard({

    score,

    title,

    date,

    duration,

    scoreImage,

}) {

    const badge =
        score >= 85
            ? "Sangat Baik"
            : score >= 70
            ? "Baik"
            : "Perlu Latihan";

    return (

        <div className="evaluation-hero">

            <div className="evaluation-score">

                <img
                    src={scoreImage}
                    alt=""
                />

            </div>

            <div className="evaluation-title">

                <h1>

                    {title}

                </h1>

                <p>

                    {date}
                    {" • "}
                    Durasi: {duration}

                </p>

            </div>

            <div className="evaluation-badge">

                {badge}

            </div>

        </div>

    );

}