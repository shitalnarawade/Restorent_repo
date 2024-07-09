import React, { useContext} from 'react'
import CartIcon from '../Carts/CartIcon'
import CartContent from '../../Store/CartContent' 

import './HeaderButton.css'

function HeaderButton(props) {
  
  const cartCtx = useContext(CartContent);
  // const numberofCartItems = cartCtx.items.length;

  const numberofCartItems = cartCtx.items.reduce((number, item) => {
    return number + item.amount;
  }, 0);

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
   <span className='badge'>{numberofCartItems}</span>
   </button>
   </>
  )
}

export default HeaderButton
