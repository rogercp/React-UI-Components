import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import ActionButton from './components/ButtonComponents/ActionButton';


const App = () => {
  return (
    <div className="main-box">
    <CalculatorDisplay />
     <ActionButton />
    </div>
  );
};

export default App;
