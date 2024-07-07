import React, { Fragment } from "react";
import Header from "./Components/Layouts/Header";
import Meals from "./Components/Meals/Meals";
import MealItemsForms from "./Components/Meals/MealItems/MealItemsForms";
function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals></Meals>
      </main>
      <MealItemsForms/>
    </Fragment>
  );
}

export default App;
