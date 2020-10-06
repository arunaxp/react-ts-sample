import * as React from "react";
import QuestionCard from "./questions/Questions";

const App = () => {
  const [loading, setLoading] = React.useState(false);
  const [questions, setQuestions] = React.useState([]);
  const [number, setNumber] = React.useState(0);
  const [userAnswers, setUserAnswers] = React.useState([]);
  const [score, setScore] = React.useState(0);
  const [gameOver, setGameOver] = React.useState(true);

  const startTrivia = () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLElement>) => {};

  const nextQuestion = () => {};

  return (
    <div className="App">
      <h1>React Quiz</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <p className="score">Score:</p>
      <p>Loading...</p>
      <QuestionCard />
      <button className="next" onClick={nextQuestion}>
        Next question
      </button>
    </div>
  );
};

export default App;
