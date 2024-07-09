import React, { useRef } from "react";
import Input from "../../UI/Input";
import "./MealItemsForms.css";

function MealItemsForms(props) {
  // const [amountIsValid, setAmountIsValid]= useState([])
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
   // convert string into number
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      // setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "text",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />

      <button>+ Add</button>
      {/* {!amountIsValid && <p>Please Enter Valid Input Value (1 - 5 ).</p>} */}
    </form>
  );
}

export default MealItemsForms;
