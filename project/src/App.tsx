import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import Geography from './pages/Geography/Geography';
import About from './pages/About/About';
import Culture from './pages/Culture/Culture' ;
import History from './pages/History/History';
import Events from './pages/Events/Events' ;

function App() {
  return (
    <BrowserRouter>
    <Header />
    <HomePage />
    <Geography />
    <About />
    <Culture />
    <History />
    <Events />
    </BrowserRouter>
  );
}

export default App;
