
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Quiz from './components/Quiz';
import Tests from './pages/Tests';
import { questions } from "./data/questions"
import { useState } from 'react';


function App() {

  const [testName, setTestName] = useState("")

  const testNames = Object.keys(questions);
  


  return (
    <div className="App">
      <h1>Quiz App</h1>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Tests />} />
          <Route path="/quiz/:test" element={<Quiz />} />
        </Routes>
      </Router> */}
      
      {!testName && <div className="tests">
            <h3>Select a test</h3>
            <div className="testBtns">
                {testNames && testNames.map((test, index) => (
                    <button key={index} onClick={() => setTestName(test)}>
                        {test}
                    </button>
                ))}
            </div>
        </div>}

        {testName && <Quiz test={testName}/>}
    </div>
  );
}

export default App;
