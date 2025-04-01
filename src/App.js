import './css/tailwind.css';
import HomePage from './content/HomePage.js';
import About from './content/About.js';
import { BrowserRouter, Routes, Route, Link } from "react-router"


function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
