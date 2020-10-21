import React, { useState } from 'react';
import './App.css';

function App() {

  const [answer, SetAnswer] = useState("")
  const [op, SetOp] = useState("")
  const [num1, SetNum1] = useState("")

  const clearClicked = () => {
    SetAnswer("")
  }

  const Number1Clicked = () => {
    SetAnswer(answer + "1")
  }

  const Number2Clicked = () => {
    SetAnswer(answer + "2")
  }

  const Number3Clicked = () => {
    SetAnswer(answer + "3")
  }

  const Number4Clicked = () => {
    SetAnswer(answer + "4")
  }

  const Number5Clicked = () => {
    SetAnswer(answer + "5")
  }

  const Number6Clicked = () => {
    SetAnswer(answer + "6")
  }

  const Number7Clicked = () => {
    SetAnswer(answer + "7")
  }

  const Number8Clicked = () => {
    SetAnswer(answer + "8")
  }

  const Number9Clicked = () => {
    SetAnswer(answer + "9")
  }

  const Number0Clicked = () => {
    SetAnswer(answer + "0")
  }

  const DivisionClicked = () => {
    SetOp("division")
    SetNum1(answer)
    SetAnswer("")
  }

  const MultiplicationClicked = () => {
    SetOp("multiplication")
    SetNum1(answer)
    SetAnswer("")
  }

  const SubtractionClicked = () => {
    SetOp("subtraction")
    SetNum1(answer)
    SetAnswer("")
  }

  const AdditionClicked = () => {
    SetOp("addition")
    SetNum1(answer)
    SetAnswer("")
  }

  const EqualityClicked = () => {

    if (op === "addition") {
      SetAnswer(Number(num1) + Number(answer))
    }

    if (op === "subtraction") {
      SetAnswer(Number(num1) - Number(answer))
    }

    if (op === "multiplication") {
      SetAnswer(Number(num1) * Number(answer))
    }

    if (op === "division") {
      if (answer !== "0") {
        SetAnswer(Number(num1) / Number(answer))
      }
      else {
        SetAnswer("Error")
      }
    }

    SetNum1("")
    SetOp("")
  }

  return (
    <div className="App">
      <p className="display">{answer}</p>
      <button className="btn btn-clear" onClick = {clearClicked}>C</button>
      <button className="btn btn-memory">M+</button>
      <button className="btn btn-memory">M-</button>
      <button className="btn btn-operation" value = "/" onClick = {DivisionClicked}>/</button>
      <br></br>
      <button className="btn btn-number" value = "1" onClick = {Number1Clicked}>1</button>
      <button className="btn btn-number" value = "2" onClick = {Number2Clicked}>2</button>
      <button className="btn btn-number" value = "3" onClick = {Number3Clicked}>3</button>
      <button className="btn btn-operation" value = "*" onClick = {MultiplicationClicked}>*</button>
      <br></br>
      <button className="btn btn-number" value = "4" onClick = {Number4Clicked}>4</button>
      <button className="btn btn-number" value = "5" onClick = {Number5Clicked}>5</button>
      <button className="btn btn-number" value = "6" onClick = {Number6Clicked}>6</button>
      <button className="btn btn-operation" value = "-" onClick = {SubtractionClicked}>-</button>
      <br></br>
      <button className="btn btn-number" value = "7" onClick = {Number7Clicked}>7</button>
      <button className="btn btn-number" value = "8" onClick = {Number8Clicked}>8</button>
      <button className="btn btn-number" value = "9" onClick = {Number9Clicked}>9</button>
      <button className="btn btn-operation" value = "+" onClick = {AdditionClicked}>+</button>
      <br></br>
      <button className="btn btn-number" value = "0" onClick = {Number0Clicked}>0</button>
      <button className="btn btn-comma">,</button>
      <button className="btn btn-negative">(-)</button>
      <button className="btn btn-equal" value = "=" onClick = {EqualityClicked}>=</button>
    </div>
  );
}

export default App;
