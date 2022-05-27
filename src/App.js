import { Routes, Route, Link } from "react-router-dom";
import './assets/css/styles.css'
import CaseOne from './components/CaseOne.js';
import CaseTwo from './components/CaseTwo.js';
import CaseThree from './components/CaseThree.js';


function App() {

  return (
    <div className="App">
      <nav>
        <div>
          <Link to="/case1">Case 1</Link>
        </div>
        <div>
          <Link to="/case2">Case 2</Link>
        </div>
        <div>
          <Link to="/case3">Case 3</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/case1" element={<CaseOne />} />
        <Route path="/case2" element={<CaseTwo />} />
        <Route path="/case3" element={<CaseThree />} />
      </Routes>
    </div>
  );
}

export default App;
