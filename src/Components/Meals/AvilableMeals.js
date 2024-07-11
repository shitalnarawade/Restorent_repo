import React from "react";
import Card from "../UI/Card";
import MealItems from "./MealItems/MealItems";
import "./AvilableMeals.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
    amount:1
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
    amount:2
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    amount:3
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
    amount:4
  },
];

function AvilableMeals() {
  const mealsList = DUMMY_MEALS.map((meal) => (
      <MealItems
        key={meal.id}
        id ={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
        amount = {meal.amount}
      />
   
  ));

  return (
    <div>
      <section className="meals">
        <Card>
          <ul> {mealsList}</ul>
        </Card>
      </section>
    </div>
  );
}

export default AvilableMeals;
