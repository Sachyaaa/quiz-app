import { useState } from "react";


export const Question = ({ question, handleScore, nextQuestion, score, isSubmited }) => {
  const [selectedOption, setSelectedOption] = useState(question.submitedAnswer);


  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    
  };

  const udateScore = () => {
    if (question.answer === selectedOption) {
      score += 1
    }
    handleScore(score);
    question.submitedAnswer = selectedOption;
    nextQuestion();    
  }


  return (
    <div>
      <h3><span>{question.questinId}</span> {question.question}</h3>
      <div>
        {question.options && question.options.map((option) => (
          <div key={option}>
            <label>
              <input
                type="checkbox"
                value={option}
                checked={selectedOption === option}
                onChange={handleCheckboxChange}
              />
              {option}
            </label>
          </div>
        ))}
      </div>
      {!isSubmited && (<button onClick={() => udateScore()}>Next</button>)}
      {isSubmited && 
      (<div>
        <p>Answer: {question.answer}</p>
        <p>{question.description}</p>
      </div>)}
    </div>

  )
}
