import React from 'react'
import CartIcon from '../Carts/CartIcon'
import './HeaderButton.css'

function HeaderButton(props) {
  return (
    <>
   <button className='button'>
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
