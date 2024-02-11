import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import Header from "./components/layout/Header";
import { About } from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Work from "./components/pages/Work";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/work" element={<Work />}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
