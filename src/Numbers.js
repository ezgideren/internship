import React from 'react'

export default function Numbers() {
  return (
    <div className='numbers'>
      <button oneClick={one}>1</button>
      <button onClick={two}>2</button>
      <button onClick={three}>3</button>
      <button onClick={four}>4</button>
      <button onClick={five}>5</button>
      <button onClick={six}>6</button>
      <button onClick={seven}>7</button>
      <button onClick={eight}>8</button>
      <button onClick={nine}>9</button>
    </div>
  )
}
