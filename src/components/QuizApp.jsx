import React, { useState, useEffect, useContext } from 'react';
import { QuestionContext } from '../store/QuestionProvider';

const QuizApp = () => {
  const { questions, setQuestions } = useContext(QuestionContext);
  const [difficulty, setDifficulty] = useState('easy');

  useEffect(() => {
    filterQuestions(difficulty);
  }, [difficulty]);

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  };

  const filterQuestions = (difficulty) => {
    const filteredQuestions = questions.filter(
      (question) => question.difficulty === difficulty
    );
    setQuestions(filteredQuestions);
  };

  return (
    <div>
      <h1>Quiz App</h1>
      <label>
        Select Difficulty:
        <select value={difficulty} onChange={handleDifficultyChange}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </label>
      <div>
        {questions.map((question, index) => (
          <div key={index}>
            <h2>{question.question}</h2>
            <ul>
              {question.options.map((option, i) => (
                <li key={i}>{option}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizApp;