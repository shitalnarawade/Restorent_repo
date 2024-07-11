import React, { useContext } from "react";
import Model from "../UI/Model";
import NewCartItem from "./NewCartItem";
import CartContext from "../../Store/CartContent";
import "./Cart.css";

function Cart(props) {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;


  const addcartItemhandler = (item) => {};
  const removecartItemHandler = (id) => {};

  const CartItems = (
    <ul className="cart-items">
      {cartCtx.items.map((item) => (
        <NewCartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAddItem={addcartItemhandler.bind(null, item)}
          onRemoveItem={removecartItemHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

 
  return (
    <Model onClose={props.onClose}>
      {CartItems}
      <div className="total">
        <span>Total Amount</span>
        <span>{totalAmount} </span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className="button">Order</button>}
      </div>
    </Model>
  );
}

export default Cart;
