import React, {useState, useRef } from "react";
import Input from "../../UI/Input";
import "./MealItemsForms.css";

function MealItemsForms(props) {
  const [amountIsValid, setAmountIsValid]= useState(true)
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value.trim();
    
   // convert string into number
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 8 ||
      enteredAmount.trim().length === 0
    ) {
      setAmountIsValid(false);
      return;
    }
    setAmountIsValid(true); 
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "8",
          step: "1",
          defaultValue: "1",
        }}
      />
        {!amountIsValid && (
        <p className="error-text">Please enter a valid input value (1 - 8).</p>
      )}
      <button type="submit">+ Add</button>
      
    </form>
  );
}

export default MealItemsForms;
