import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";
import About from "./pages/About";
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />        
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
            <Route path="/About" element={<About/>} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
