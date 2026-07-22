import BoyStudent from "../../assets/images/student_boy.png";
import GirlStudent from "../../assets/images/student_girl.png";

import Desk from "../../assets/images/desk.png";

import QuestionBubble from "../../assets/images/question_bubble.png";

export default function Classroom({ phase }) {
  const studentImage = phase === "presentation" ? GirlStudent : BoyStudent;

  return (
    <div className="classroom">
      <div className="student-area">
        {(phase === "question" || phase === "answering") && (
          <img src={QuestionBubble} alt="" className="question-icon" />
        )}

        <div className="student-circle">
          <img src={studentImage} alt="" className="student-avatar" />
        </div>

        <img src={Desk} alt="" className="student-desk" />
      </div>
    </div>
  );
}
