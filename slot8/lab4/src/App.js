import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainNavbar from "./components/MainNavbar";
import ProcessOrder from "./components/ProcessOrder";
import QuantityControl from "./components/QuantityControl";
import Exercise3 from "./components/Exercise3";
import Exercise4 from "./components/Exercise4";

function App() {
  return (
    <BrowserRouter>
      <MainNavbar />

      <div className="p-4">
        <Routes>
          <Route path="/" element={<Navigate to="/ex1" />} />
          <Route path="/ex1" element={<QuantityControl />} />
          <Route path="/ex2" element={<ProcessOrder />} />
          <Route path="/ex3" element={<Exercise3 />} />
          <Route path="/ex4" element={<Exercise4 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
