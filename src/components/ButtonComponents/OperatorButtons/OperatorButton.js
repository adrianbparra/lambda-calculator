import React from "react";

export const OperatorButton = (props) => {
  return (
    <button className="button operator_button">
      {props.oper.value}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

