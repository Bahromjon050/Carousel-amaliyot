import "./App.css";
import Slider from "./components/slider/Slider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Slider />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
