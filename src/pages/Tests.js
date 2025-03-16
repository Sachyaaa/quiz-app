import { useNavigate } from "react-router-dom";
import { questions } from "../data/questions"

export default function Tests() {
    const navigate = useNavigate();
    const testNames = Object.keys(questions);

    return (
        <div className="tests">
            <h3>Select a test</h3>
            <div className="testBtns">
                {testNames && testNames.map((test, index) => (
                    <button key={index} onClick={() => navigate(`/quiz/${test}`)}>
                        {test}
                    </button>
                ))}
            </div>
        </div>
    )
}
