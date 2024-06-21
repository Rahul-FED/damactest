import React from 'react'
import './App.css'
import Gallery from './components/Gallery';
import HarbourLight from './components/HarbourLight';
import Footer from './components/Footer';
import Book from './components/Book';
import Banner from './components/Banner';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Navbar from './components/Navbar';

const App = () => {
  return (
  <>
    
    <Banner/>
    <Book/>
    <HarbourLight/>
    <Gallery/>
    <Footer/>
  </>
  )
}

export default App