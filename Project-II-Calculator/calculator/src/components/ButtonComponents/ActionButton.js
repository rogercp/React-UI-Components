import React from 'react';
import './actionbuttons.css';

const ActButton=props=><button className={`actButtonStyles ${props.buttonStyles}`}>{props.text}</button>

ActButton.defaultProps={
    buttonStyles:'white',
};
//////clear button
const ActionButton=()=>{
    return (
      <div className="action-botton">
      <ActButton text="clear"/>
      </div>
    );
  };
  console.log(ActionButton);
  
  export default ActionButton;
  