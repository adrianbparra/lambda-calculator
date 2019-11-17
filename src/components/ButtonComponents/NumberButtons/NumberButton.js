import React from "react";



const NumberButton = (props) => {
  return (
    <button
      className={`button numbers`}
      onClick = {() => {
        props.calc(props.num);
         
      }}
    >
      {props.num}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};


export default NumberButton