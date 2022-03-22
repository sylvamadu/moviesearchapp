
import './App.css';
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Hero from './components/Hero';


function App(){
 
  return(
    <div className="app">
      <Header />
      <Hero />
      <Main />
    </div>
  )
}

export default App;
