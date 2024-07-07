import React from 'react'
import './Input.css'

function Input(props) {
  return (
    <div className='input'>
          <label htmlFor={props.input.id}>{props.label} </label>
          {/* <input{...props.Input} /> */}
          <input id={props.input.id}/>
    </div>
  )
}

export default Input
