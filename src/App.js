import "./App.css";
import Slider from "./components/slider/Slider";
import Carousel from "./components/widthCarousel/Carousel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="widthcarousel" element={<Carousel />} />
          <Route path="slider" element={<Slider />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
