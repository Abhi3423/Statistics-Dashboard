import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/home';
import Home2 from './components/Home/home2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/check" element={<Home2/>} />
      </Routes>
    </Router>
  );
}

export default App;
