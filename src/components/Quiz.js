import { useState } from "react";
import { questions } from "../data/questions"
import { Question } from "./Question"
import { useNavigate, useParams } from "react-router-dom";



const Quiz = () => {
    const [score, setScore] = useState(0)
    const [currentId, setCurrentId] = useState(1)

    const {test} = useParams();
    const navigate = useNavigate();

    const testQuestions = questions[test];

    const handleScore = (score) => {
        setScore(score)
    }
    const handleCurrentId = () => {
        setCurrentId((prevId) => prevId + 1);
    }




    return (
        <div>
            {testQuestions && testQuestions.filter(question => question.id == currentId).length > 0 ?
                testQuestions.filter(question => question.id == currentId).map(question => (
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
                    <p className="score">Your final score is {score}</p>
                    {testQuestions.map(question => (
                        <div key={question.id}>
                            <Question
                                question={question}
                                handleScore={handleScore}
                                nextQuestion={handleCurrentId}
                                score={score}
                                isSubmited={true} />
                        </div>
                    ))}
                    <button className="backBtn" onClick={() => navigate("/")}>Back</button>
                </div>
                )}

        </div>
    )
}

export default Quiz;
