import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <main
      className="max-w-full max-h-full grid grid-cols-2 bg-hero border-2 border-slate-gray">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
