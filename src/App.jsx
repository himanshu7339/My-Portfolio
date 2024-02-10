import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import Header from "./components/mobile/Header";
import { About } from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Work from "./components/pages/Work";

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
    </BrowserRouter>
  );
}

export default App;
