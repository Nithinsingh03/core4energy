
import React from 'react';
import Navbar from './components/nav.jsx'; 
import HeroSection from './components/home.jsx';
import AboutSection from './components/about.jsx';
import About from './components/ab1.jsx';
import FeaturedProjects from './components/project.jsx';
import Services from './components/service.jsx';
import TeamSection from './components/team.jsx';
import Testimonials from './components/test.jsx';
import Footer from './components/foot.jsx';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <About />
      <Services />
      <FeaturedProjects />
      <TeamSection />
      <Testimonials />
      <Footer />
    </div>
    
  );
}
export default App;
