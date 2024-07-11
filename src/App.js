import React, { useState } from "react";
import Header from "./Components/Layouts/Header";
import Meals from "./Components/Meals/Meals";
import MealItemsForms from "./Components/Meals/MealItems/MealItemsForms";
import CartProvider from "./Store/CartProvider";
import Cart from "./Components/Carts/Cart";
function App(props) {

 const [showCart, setShowCart] = useState(false);

  const showCartHandler = () =>{
    setShowCart(true);
  }
  const hideCartHandler = () =>{
    setShowCart(false)
  }
  return (
    <CartProvider>
     {showCart && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      
        <Meals></Meals>
      
      <MealItemsForms/> 
    </CartProvider>
  );
}

export default App;
