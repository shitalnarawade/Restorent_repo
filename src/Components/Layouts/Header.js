import React, {Fragment} from 'react'
import mealImg from '../../Images/meals.jpg'
import HeaderButton from './HeaderButton'
import './Header.css'

function Header(props) {
  // const onShowCart = () =>{
  // console.log('Hello')
  // }
  return (
    <Fragment>
      <header className='header'>
        <h1>ReactMeals</h1>
        <HeaderButton  onClick={props.onShowCart} />  
      </header>
        <div className='main-image'>
            <img src={mealImg} alt='Food order'/>
        </div>
    </Fragment>
  )
}

export default Header
