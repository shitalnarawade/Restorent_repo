import React, { useState } from "react";
import CartContent from "./CartContent";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

function CartProvider(props) {
  const [cartState, setCartState] = useState(defaultCartState);

  const addItemsHandler = (item) => {
    const updatedTotalAmount = cartState.totalAmount + item.price * item.amount;

    const existingItemIndex = cartState.items.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    let updatedItems;
    if (existingItemIndex !== -1) {
      updatedItems = [...cartState.items];
      updatedItems[existingItemIndex].amount += item.amount;
    } else {
      
      updatedItems = cartState.items.concat(item);
    }
    setCartState({
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    });
  };
  const removeItemsHandler = (id) => {
    const removedItem = cartState.items.find((item) => item.id === id);
    if (!removedItem) {
      return;
    }
    const updatedTotalAmount =
      cartState.totalAmount - removedItem.price * removedItem.amount;
    const updatedItems = cartState.items.filter((item) => item.id !== id);
    setCartState({
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItems: addItemsHandler,
    removeItems: removeItemsHandler,
  };

  return (
    <CartContent.Provider value={cartContext}>
      {props.children}
    </CartContent.Provider>
  );
}

export default CartProvider;