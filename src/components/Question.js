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
    <div className="question">
      <h3><span>{question.id}. </span> {question.question}</h3>
      <div className="options">
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
      {!isSubmited && (<button className="nxtBtn" onClick={() => udateScore()}>Next</button>)}
      {isSubmited && 
      (<div>
        <p> <span style={{color: "green", fontWeight: "bold"}}>Answer:</span> {question.answer}</p>
        <p style={{color: "grey", fontStyle: "italic"}}>{question.description}</p>
      </div>)}
    </div>

  )
}
