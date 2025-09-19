import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
        
        <main>
          <div id="home">
            <HomeSection />
          </div>
          
          <div id="about">
            <AboutSection />
          </div>
          
          <div id="projects">
            <ProjectsSection />
          </div>
          
          <div id="contact">
            <ContactSection />
          </div>

          <div id="footer">
            <Footer />
          </div>
          
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;