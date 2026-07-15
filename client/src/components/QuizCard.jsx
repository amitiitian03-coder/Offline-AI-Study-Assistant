import { useState } from "react";

function QuizCard() {
    const [answer1, setAnswer1] = useState("");
    const [answer2, setAnswer2] = useState("");

    return (
        <div className="quiz-card">
            <h2>Quick Quiz</h2>

            {/* Question 1 */}
            <p><b>1. AI stands for?</b></p>

            <div className="quiz-options">
                <button
                    className={`quiz-btn ${answer1 === "Artificial Intelligence" ? "selected" : ""}`}
                    onClick={() => setAnswer1("Artificial Intelligence")}
                >
                    Artificial Intelligence
                </button>

                <button
                    className={`quiz-btn ${answer1 === "Advanced Internet" ? "selected" : ""}`}
                    onClick={() => setAnswer1("Advanced Internet")}
                >
                    Advanced Internet
                </button>

                <button
                    className={`quiz-btn ${answer1 === "Automatic Input" ? "selected" : ""}`}
                    onClick={() => setAnswer1("Automatic Input")}
                >
                    Automatic Input
                </button>

                <button
                    className={`quiz-btn ${answer1 === "None of these" ? "selected" : ""}`}
                    onClick={() => setAnswer1("None of these")}
                >
                    None of these
                </button>
            </div>

            <br />

            {/* Question 2 */}
            <p><b>2. Which language is popular for AI?</b></p>

            <div className="quiz-options">
                <button
                    className={`quiz-btn ${answer2 === "Python" ? "selected" : ""}`}
                    onClick={() => setAnswer2("Python")}
                >
                    Python
                </button>

                <button
                    className={`quiz-btn ${answer2 === "HTML" ? "selected" : ""}`}
                    onClick={() => setAnswer2("HTML")}
                >
                    HTML
                </button>

                <button
                    className={`quiz-btn ${answer2 === "CSS" ? "selected" : ""}`}
                    onClick={() => setAnswer2("CSS")}
                >
                    CSS
                </button>

                <button
                    className={`quiz-btn ${answer2 === "PHP" ? "selected" : ""}`}
                    onClick={() => setAnswer2("PHP")}
                >
                    PHP
                </button>
            </div>

            <br />

            <button
                className="btn"
                onClick={() => {
                    if (!answer1 || !answer2) {
                        alert("Please answer all questions.");
                        return;
                    }

                    let score = 0;

                    if (answer1 === "Artificial Intelligence") score++;

                    if (answer2 === "Python") score++;

                    alert(`Quiz Submitted!\n\nYour Score: ${score}/2`);
                }}
            >
                Submit Quiz
            </button>

            <div style={{ marginTop: "20px" }}>
                <p>
                    <b>Question 1:</b> {answer1 || "Not Selected"}
                </p>

                <p>
                    <b>Question 2:</b> {answer2 || "Not Selected"}
                </p>
            </div>
        </div>
    );
}

export default QuizCard;