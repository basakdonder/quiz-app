import { useEffect, useState } from "react";
import "./App.css";
import { QuizData } from "./QuizData";

function App() {
  const [current, setCurrent] = useState(0);
  const [point, setPoint] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedRadio, setSelectedRadio] = useState();
  const [isCompleted, setIsCompleted] = useState(false);
  const currentQuiz = QuizData[current];

  useEffect(() => {
    console.log(point);
  }, [point]);

  function nextQuestion() {
    if (QuizData.length > current) {
      if (currentQuiz.answer === selectedOption) {
        setPoint(point + 1);
      }
      if (current === QuizData.length - 1) {
        setIsCompleted(true);
      }
      setCurrent(current + 1);
      selectedRadio.checked = false;
      setSelectedOption("");
    }
  }

  function handleSelectedOption(e) {
    setSelectedOption(e.target.value);
    setSelectedRadio(e.target);
  }

  return (
    <div className="quiz-container">
      <div className="container">
        {current === QuizData.length ? (
          <h2>
            You did {point} of {QuizData.length}
          </h2>
        ) : (
          <>
            <h2>{currentQuiz.question}</h2>
            <ul>
              <li>
                <input
                  type="radio"
                  name="answer"
                  id="a"
                  value="a"
                  onChange={handleSelectedOption}
                />
                <label htmlFor="a" id="a_text">
                  {currentQuiz.a}
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="answer"
                  id="b"
                  value="b"
                  onChange={handleSelectedOption}
                />
                <label htmlFor="b" id="b_text">
                  {currentQuiz.b}
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="answer"
                  id="c"
                  value="c"
                  onChange={handleSelectedOption}
                />
                <label htmlFor="c" id="c_text">
                  {currentQuiz.c}
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="answer"
                  id="d"
                  value="d"
                  onChange={handleSelectedOption}
                />
                <label htmlFor="d" id="d_text">
                  {currentQuiz.d}
                </label>
              </li>
            </ul>
          </>
        )}
      </div>

      <button
        className={isCompleted ? "submit-btn hide" : "submit-btn"}
        onClick={() => nextQuestion()}
      >
        {current === QuizData.length - 1 ? "Complete Quiz" : "Submit"}
      </button>
    </div>
  );
}

export default App;
