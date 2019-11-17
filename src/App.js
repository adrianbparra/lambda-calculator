import React, {useState} from "react";
import "./App.css";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators"
import Display from "./components/DisplayComponents/Display";

import {operators} from "./data";

// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  // const [selectedNum, setSelectedNum] = useState("")

  const [selectedSpecial, setSelectedSpecial] = useState();
  const [selectedOperator, setSelectedOperator] = useState("");

  var [selFirstNum, setFirstNum] = useState("");
  var [selSecondNum, setSecondNum] = useState("");

  var [answerPrint, setAnswer] = useState("");
  

  const opertatorCheck = operators.map(oper => {
    return oper.value
  })

  console.log(opertatorCheck)
  
  

  function numPressed(num) {
    console.log(num, "first check of num pressed")
    // console.log(opertatorCheck, "operators")

    if(num == "C"){
      setFirstNum("");
      setAnswer("");
      setSecondNum("");
      setSelectedOperator("")

      console.log("clear")
      return
    }

    // set it to percentage only for first num
    if(num == "%" && !isNaN(selFirstNum)){
      var percent  = (selFirstNum / 100);
      setFirstNum(percent);
      setAnswer(percent);
      console("set percent")
      return
    }
    //Set fist num to positive and negative
    if(num == "+/-" && !isNaN(selFirstNum) && selSecondNum == ""){
      var term = (selFirstNum * -1);
      setFirstNum(term);
      setAnswer(term);
       console.log(num, "set pos or neg");
      return
    }
    //set second num to pos or neg
    if(num == "+/-" && selFirstNum != "" && selectedOperator != ""){
      var termSecond = (selSecondNum * -1);
      setSecondNum(termSecond);
      setAnswer(termSecond);
      console.log(num, "set second num to pos or neg")
    }

    //check if numbers pressed or . and no selected operator
    if((!isNaN(num) || num == ".") && selectedOperator == ""){
      console.log(num, "first num")
      setFirstNum(selFirstNum + num);
      setAnswer(answerPrint + num);
      return
    }
    
    //check if we have firstnum and operators is pressed.
    //yes on nums already then check what operators and set it

    if(opertatorCheck.indexOf(num) >= 0 && !selFirstNum == "" && selectedOperator == ""){
      console.log(num, "operator pressed")
      setAnswer("");
      setSelectedOperator(num);
      return
    }

    //if has firstnum and has operator set second number
    if((!isNaN(num) || num == ".") && opertatorCheck.includes(selectedOperator)){
      // setAnswer("");
      setSecondNum(selSecondNum + num);
      setAnswer(answerPrint + num);
      console.log(selSecondNum, "second num set");
      return
    }

    //if equal sign pressed and first num set and oper and second set do calc
    if(num == "=" && !isNaN(selFirstNum) && opertatorCheck.includes(selectedOperator) && !isNaN(selSecondNum)){
      console.log(num, "equal pressed")
      // var answer = (selFirstNum  + selectedOperator  + selSecondNum);
      var answer = "";

      var firstDigit = Number.parseInt(selFirstNum);
      var secondDigit = Number.parseInt(selSecondNum);

      switch(selectedOperator) {
        case "/":
          answer = (firstDigit / secondDigit)
          setAnswer(answer)
          break;
        case "*":
          answer = (firstDigit * secondDigit)
          setAnswer(answer)
          break;
        case "+":
          answer = (firstDigit + secondDigit)
          setAnswer(answer)
          break;
        case "-":
          answer = (firstDigit - secondDigit)
          setAnswer(answer)
          break;        
      }
      return
    }




  }

  // console.log(selFirstNum)


  // console.log(selectedNum);
  // console.log(selectedSpecial);
  // console.log(selectedOperator);
  return (
    <div className="container">
      <Logo />
      <Display selectedNum = {answerPrint} selectedSpecial ={selectedSpecial} selectedOperator ={selectedOperator}/>
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <Specials calc = {numPressed}/>
        <Operators calc = {numPressed}/>
        <Numbers calc = {numPressed}/>
      </div>
    </div>
  );
}

export default App;
