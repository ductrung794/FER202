import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainNavbar from "./components/MainNavbar";
import LoginForm from "./components/LoginForm";
import ManagerUsers from "./components/ManagerUsers";

function App() {
  return (
    <BrowserRouter>
      <MainNavbar />

      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/manager-users" element={<ManagerUsers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
