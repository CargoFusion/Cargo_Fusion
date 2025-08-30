import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import QuoteSection from './components/QuoteSection';
import TrackingSection from './components/TrackingSection';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <TrackingSection />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;