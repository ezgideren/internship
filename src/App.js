import React, { useState } from "react";
import "./App.css";

function App() {
  const [firstNumber, setFirstNumber] = useState();
  const [secondNumber, setSecondNumber] = useState();
  const [result, setResult] = useState();

  const firstNumberChange = (e) => {
    setFirstNumber(e.target.value);
  };

  const secondNumberChange = (e) => {
    setSecondNumber(e.target.value);
  };

  const plus = () => {
    setResult(parseInt(firstNumber) + parseInt(secondNumber));
  };

  const minus = () => {
    setResult(parseInt(firstNumber) - parseInt(secondNumber));
  };

  const multiply = () => {
    setResult(parseInt(firstNumber) * parseInt(secondNumber));
  };

  const divide = () => {
    setResult(parseInt(firstNumber) / parseInt(secondNumber));
  };

  return (
    <>
      <h1>Calculator</h1>

      <div>
        <label for="first_number">First number:</label>
        <input type="number" id="first" onChange={firstNumberChange}></input>
      </div>
      <div>
        <label for="second_number">Second number:</label>
        <input type="number" id="second" onChange={secondNumberChange}></input>
      </div>
      <button onClick={plus}>PLUS +</button>
      <button onClick={minus}>MINUS -</button>
      <button onClick={multiply}>MULTIPLY *</button>
      <button onClick={divide}>DIVIDE /</button>
      <div>RESULT: {result}</div>
    </>
  );
}

export default App;
