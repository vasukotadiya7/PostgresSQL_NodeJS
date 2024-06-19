
import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ThreeScene from './components/ThreeScene';

function App() {
  return (
    <div className="App">
      <Header />
      <ThreeScene />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
