import React from 'react'
import Input from '../../UI/Input';
import "./MealItemsForms.css";

function MealItemsForms(props) {
  return (
   <form className='form'>
    <Input
      label ='Amount'
      input={{id:'amount',
      type:'text',
      min:'1',
      max:'5',
      step:'1',
      defaultValue:'1' 
      }} 
    />
   
    <button>+ Add</button>
   </form>
  )
}

export default MealItemsForms
