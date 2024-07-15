
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import Footer from './components/footer';
import About from './components/about'

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
