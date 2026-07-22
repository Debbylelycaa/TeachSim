export default function SkillItem({

    index,

    title,

    description,

    score,

}) {

    const getScoreColor = () => {

        if (score >= 85)
            return "#6BD66B";

        if (score >= 70)
            return "#FFD54A";

        return "#FF8A65";

    };

    return (

        <div className="skill-item">

            <div className="skill-number">

                {index}

            </div>

            <div className="skill-info">

                <h3>

                    {title}

                </h3>

                <p>

                    {description}

                </p>

            </div>

            <div
                className="skill-score"
                style={{
                    backgroundColor: getScoreColor(),
                }}
            >

                {score}

            </div>

        </div>

    );

}