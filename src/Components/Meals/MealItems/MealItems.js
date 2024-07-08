import React from "react";
import MealItemsForms from "./MealItemsForms";
import "./MealItems.css";

function MealItems(props) {
  const price = `$${props.price.toFixed(2)}`;
  return (
    
      <li className="meal">
        <div>
          <h4>{props.name} </h4>
          <div className="description">{props.description} </div>
          <div className="price">{price} </div>
        </div>
        <div>
          <MealItemsForms />
        </div>
      </li>
   
  );
}

export default MealItems;
