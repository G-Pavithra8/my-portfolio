import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Internships from './components/Internships';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Landing from './components/Landing';
import { useState } from 'react';


function App() {
  const [showLanding, setShowLanding] = useState(true);

  return (
    <div className="bg-darkBg min-h-screen">
      {showLanding && <Landing onFinish={() => setShowLanding(false)} />}
      {!showLanding && (
        <>
          <Navbar />
          <Home />
          <About />
          <Internships />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
