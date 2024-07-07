import React, { Fragment } from 'react'
import MealsSummary from './MealsSummary'
import AvilableMeals from './AvilableMeals'

function Meals() {
  return (
    <Fragment>
        <MealsSummary/>
        <AvilableMeals />
    </Fragment>
  )
}

export default Meals
