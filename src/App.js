import React, { useState } from 'react';
import './App.css';
import Numbers from './Numbers';
import Display from './Display';
import Operation from './Operation';


function App() {
  const [numbers, resultNumbers] = useState([])

function computation({prevNum, nextNum, operator}) {
  const prev = parseFloat()
} 
  

  return (
    <>
    <h1>Calculator</h1>
    <Display numbers={numbers} />
    <Numbers />
    <Operation/>
    <span>{resultNumbers}</span>
    </>
  );
}

export default App;
