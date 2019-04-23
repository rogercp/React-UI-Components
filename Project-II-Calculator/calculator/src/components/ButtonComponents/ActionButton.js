import React from 'react';
import './Button.css';

const ActButton=props=><button className={`actButtonStyles ${props.buttonStyles}`}>{props.text}</button>

ActButton.defaultProps={
    buttonStyles:'white',
};

const ActionButton=()=>{
    return (
      <div className="action-botton">
      <ActButton text="clear"/>
      <ActButton text="0"/>
      </div>
    );
  };
  console.log(ActionButton);
  
  export default ActionButton;
  