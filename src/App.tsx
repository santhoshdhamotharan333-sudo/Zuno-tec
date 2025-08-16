import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import CreativeDesign from './pages/services/CreativeDesign';
import ModernDesign from './pages/services/ModernDesign';
import MarketingDesign from './pages/services/MarketingDesign';
import PhotoEditing from './pages/services/PhotoEditing';
import WebDevelopment from './pages/services/WebDevelopment';
import WebApplications from './pages/services/WebApplications';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary text-text-primary font-turret overflow-x-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/services/creative-design" element={<CreativeDesign />} />
          <Route path="/services/modern-design" element={<ModernDesign />} />
          <Route path="/services/marketing-design" element={<MarketingDesign />} />
          <Route path="/services/photo-editing" element={<PhotoEditing />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/web-applications" element={<WebApplications />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;