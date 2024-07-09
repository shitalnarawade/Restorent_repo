import React from "react";
import Model from "../UI/Model";
import "./Cart.css";

function Cart(props) {
  const CartItems =<ul className="cart-items"> {[
    { id: "1", name: "Sushi", amount: "78", price: "14" },
  ].map((item) => <li>{ item.name}</li>)}</ul>;
  return (
    <Model onClose={props.onClose} >
      {CartItems}
      <div className="total">
      <span>Total Amount</span>
       <span>90.82</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={props.onClose}>Close</button>
        <button className="button">Order</button>
      </div>
    </Model>
  );
}

export default Cart;
