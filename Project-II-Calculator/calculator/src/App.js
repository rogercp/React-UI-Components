import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import NumberButton from './components/ButtonComponents/NumberButton.js';




const App = () => {

  return (
    <div className="main-box">
    <CalculatorDisplay />
    <NumberButton />
    </div>
  );
};

export default App;
