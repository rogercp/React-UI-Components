import React from 'react';
import './actionbuttons.css';

const ActButton2=props=><button className={`actButtonStyles ${props.buttonStyles}`}>{props.text}</button>

ActButton2.defaultProps={
    buttonStyles:'white',
};

////////0 action button
const ActionButton2=()=>{
    return (
      <div className="action-button">
      <ActButton2 text="0"/>
      </div>
    );
  };
  
  export default ActionButton2;
  