import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NewList from "./pages/NewList";
import Quiz from "./components/Quiz";
import Contact from "./components/Contact";
import SlideBar from './components/SlideBar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <SlideBar />
      
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<NewList />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
