import React from 'react'

export default function Operation() {

  function division (e) {
    console.log("/")
  }
  
  function add (e) {
    console.log("+")
  }

  function extract (e) {
    console.log("-")
  }

  function multipication(e) {
    console.log("*")

  }
  function del(e) {
    console.log("delete")
  }

  function result(e) {
    console.log("result")
  }

  return (
    <div>
      <button onClick={zero}>0</button>
      <button onClick={division}>/</button>
      <button onClick={multipication}>*</button>
      <button onClick={add}>+</button>
      <button onClick={extract}>-</button>
      <button onClick={del}>DEL</button>
      <button onClick={result}>Result</button>
    </div>
  )
}

