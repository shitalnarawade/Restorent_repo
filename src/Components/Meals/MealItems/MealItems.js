import React from "react";
import "./MealItems.css";

function MealItems(props) {
    const price = `$${props.price.toFixed(2)}`
  return (
    <div>
      <li>
          <h4>{props.name} </h4>
          <div className="description">{props.description} </div>
          <div className="price">{price} </div>
      </li>

    </div>
  );
}

export default MealItems;
