import React from 'react';
import './numberbuttons.css';
import ActionButton from './ActionButton.js';
import ActionButton2 from './ActionButton2.js'
// import ActionButton from './components/ButtonComponents/ActionButton.js';

const NumButton=props=><button className={`numberButtonStyles ${props.buttonStyles}`}>{props.text}</button>

NumButton.defaultProps={
    buttonStyles:'white',
};


const NumberButton=()=>{
    return (
      <div className="number-buttons">

        <div>
        <ActionButton />
        <NumButton buttonStyles="red" text="%"/>
        </div>

        <div>
        <NumButton buttonStyles="" text="7"/>
        <NumButton buttonStyles="" text="8"/>
        <NumButton buttonStyles="" text="9"/>
        <NumButton buttonStyles="red" text="x"/>
        </div>

        <div>
        <NumButton buttonStyles="" text="4"/>
        <NumButton buttonStyles="" text="5"/>
        <NumButton buttonStyles="" text="6"/>
        <NumButton buttonStyles="red" text="-"/>
        </div>

        <div>
        <NumButton buttonStyles="" text="1"/>
        <NumButton buttonStyles="" text="2"/>
        <NumButton buttonStyles="" text="3"/>
        <NumButton buttonStyles="red" text="+"/>
        </div>

        <div>
        <ActionButton2 />
        <NumButton buttonStyles="rec" text="="/>
        </div>

      </div>
    );
  };
 
  
  export default NumberButton;
  