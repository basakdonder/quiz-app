import { useState } from "react";
import "./App.css";
import { QuizData } from "./QuizData";

function App() {
  const [current, setCurrent] = useState(0);
  const currentQuiz = QuizData[current];
  const [selectedOption, setSelectedOption] = useState("");

  function nextQuestion() {
    if (QuizData.length > current) {
      setCurrent(current + 1);
    } else {
      alert("You finished the quiz!!!");
    }
    //console.log(selectedOption);
  }

  return (
    <div className="quiz-container">
      <div className="container">
        <h2>{currentQuiz.question}</h2>
        <ul>
          <li>
            <input
              type="radio"
              name="answer"
              id="a"
              value="a"
              onChange={(e) => setSelectedOption(e.target.value)}
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
              onChange={(e) => setSelectedOption(e.target.value)}
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
              onChange={(e) => setSelectedOption(e.target.value)}
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
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            <label htmlFor="d" id="d_text">
              {currentQuiz.d}
            </label>
          </li>
        </ul>
      </div>

      <button className="submit-btn" onClick={() => nextQuestion()}>
        Submit
      </button>
    </div>
  );
}

export default App;
