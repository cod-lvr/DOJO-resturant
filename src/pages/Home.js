import React from 'react';

import Hero from '../components/Hero';
import About from '../components/About';
import Menu from '../components/Menu';
import Places from '../components/Places';
import Contact from '../components/Contact';
import Navbar from '../components/UI/Navbar';
import Footer from '../components/UI/Footer';

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Places />
      <Contact />
      <Footer />
    </React.Fragment> 
  );
}

export default Home;
