import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Navigation from './components/Navigation';
import Others from './components/Others';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="showcase centerFlex"> <Navigation />
        <Others /></div>

    </div>
  );
}

export default App;
