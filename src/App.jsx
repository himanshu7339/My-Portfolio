import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";



import Footer from "./components/layout/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import  Contact  from "./pages/Contact";
import  Work  from "./pages/Work";

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
