import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Gallery from './components/Gallery';
import Songs from './components/Songs';
import Videos from './components/Videos';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen relative">
        <div className="animated-bg"></div>
        <div className="relative z-10">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/songs" element={<Songs />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;