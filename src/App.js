
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Quiz from './components/Quiz';
import Tests from './pages/Tests';


function App() {
  


  return (
    <div className="App">
      <h1>Quiz App</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Tests />} />
          <Route path="/quiz/:test" element={<Quiz />} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
