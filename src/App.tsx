import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import FreeResources from './pages/FreeResources/FreeResources';


//import Signup from './components/Signup/Signup';
//import Login from './components/Login/Login';
//import ExploreTopics from './pages/ExploreTopics/ExploreTopics';
//import FreeResources from './pages/FreeResources/FreeResources';

function App() {
  return (
    <>
    <Header />
    <HomePage />
    <Footer />
    <FreeResources/>
    
    
    
    </>
  );
}

export default App;
