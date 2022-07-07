import React from 'react'
import Numbers from './Numbers'
import Operation from './Operation'

const ACTIONS = {
  ADD: 'add',
  EXTRACT: 'extract',
  MULTIPLY: 'multiply',
  DIVISION: 'division'


}
function reducer (state, action) {
  switch(action.type) {
    case ACTIONS.ADD:
      return {}
    case ACTIONS.EXTRACT:
    return {}
    case ACTIONS.DIVISION:
    return {}
    case ACTIONS.MULTIPLY:
    return {}
  }
}

export default function Display({numbers}) {

  return (
    <div>
      {numbers}
    </div>
  )
}
