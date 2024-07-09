import React, { useContext } from "react";
import MealItemsForms from "./MealItemsForms";
import CartContent from "../../../Store/CartContent";
import "./MealItems.css";

function MealItems(props) {
  const cartCtx = useContext(CartContent)
  const price = `$${props.price.toFixed(2)}`;

  const onAddToCartHandler = (amount)=>{
    cartCtx.addItems({
      id:props.id,
      name: props.name,
      amount: props.amount,
      price:props.price
    });
  }
  return (
    
      <li className="meal">
        <div>
          <h4>{props.name} </h4>
          <div className="description">{props.description} </div>
          <div className="price">{price} </div>
        </div>
        <div>
          <MealItemsForms onAddToCart={onAddToCartHandler}/>
        </div>
      </li>
   
  );
}

export default MealItems;
