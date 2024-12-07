// src/App.js
import { Hero } from './components/Hero';

import './App.css';
import { Navbar } from './components/Nav';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Projects } from './components/Projects';

function App() {
  
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Portfolio />
        <Projects />
        <About />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
