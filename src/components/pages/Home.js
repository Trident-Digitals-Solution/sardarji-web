import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Testimonials from '../Testimonial';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;
