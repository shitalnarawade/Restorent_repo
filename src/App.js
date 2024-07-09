import React, { Fragment, useState } from "react";
import Header from "./Components/Layouts/Header";
import Meals from "./Components/Meals/Meals";
import MealItemsForms from "./Components/Meals/MealItems/MealItemsForms";
import Cart from "./Components/Carts/Cart";
function App() {

 const [showCart, setShowCart] = useState(false);

  const showCartHandler = () =>{
    setShowCart(true);
  }
  const hideCartHandler = () =>{
    setShowCart(false)
  }
  return (
    <Fragment>
     {showCart && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals></Meals>
      </main>
      <MealItemsForms/> 
    </Fragment>
  );
}

export default App;
