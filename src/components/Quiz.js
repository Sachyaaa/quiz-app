import { useState } from "react";
import { questions } from "../data/questions"
import { Question } from "./Question"



const Quiz = () => {
    const [score, setScore] = useState(0)
    const [currentId, setCurrentId] = useState(1)

    const handleScore = (score) => {
        setScore(score)
    }
    const handleCurrentId = () => {
        setCurrentId((prevId) => prevId + 1);
    }




    return (
        <div>
            {questions && questions.filter(question => question.id == currentId).length > 0 ?
                questions.filter(question => question.id == currentId).map(question => (
                    <div key={question.id}>
                        <Question
                            question={question}
                            handleScore={handleScore}
                            nextQuestion={handleCurrentId}
                            score={score} />
                    </div>
                ))
                :
                (<div>
                    <div>Your final score is {score}</div>
                    {questions.map(question => (
                        <div key={question.id}>
                            <Question
                                question={question}
                                handleScore={handleScore}
                                nextQuestion={handleCurrentId}
                                score={score}
                                isSubmited={true} />
                        </div>
                    ))}
                </div>
                )}

        </div>
    )
}

export default Quiz;
