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

        <div className="inline">
        <ActionButton />
        <NumButton buttonStyles="red" text="%"/>
        </div>

        <div className="four">
        <NumButton  text="7"/>
        <NumButton  text="8"/>
        <NumButton  text="9"/>
        <NumButton buttonStyles="red" text="x"/>
        </div>

        <div className="four">
        <NumButton  text="4"/>
        <NumButton  text="5"/>
        <NumButton  text="6"/>
        <NumButton buttonStyles="red" text="-"/>
        </div >

        <div className="four">
        <NumButton  text="1"/>
        <NumButton  text="2"/>
        <NumButton  text="3"/>
        <NumButton buttonStyles="red" text="+"/>
        </div>

        <div className="inline">
        <ActionButton2 />
        <NumButton buttonStyles="red" text="="/>
        </div>

      </div>
    );
  };
 
  
  export default NumberButton;
  