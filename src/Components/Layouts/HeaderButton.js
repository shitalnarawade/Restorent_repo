import React from 'react'
import CartIcon from '../Carts/CartIcon'
import './HeaderButton.css'

function HeaderButton(props) {
  // const onShowCart = () =>{
  //   props.onClick();
  // }
  return (
    <>
   {/* <button className='button' onClick={onShowCart} > */} 
   <button className='button' onClick={props.onClick} >
   <span className='icon'>
    <CartIcon />
   </span>
   <span>Your Cart</span>
   <span className='badge'>3</span>
   </button>
   </>
  )
}

export default HeaderButton
