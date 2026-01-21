import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNavbar from "./components/MainNavbar";
import HeroCarousel from "./components/HeroCarousel";
import PizzaList from "./pages/PizzaList";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <MainNavbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroCarousel />
              <PizzaList />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer
        myprofile={{
          avatar: "/img/cat-pilot.jpg",
          name: "TrungTd",
          email: "trungtd@vip.pro.com",
        }}
      />
    </BrowserRouter>
  );
}

export default App;
