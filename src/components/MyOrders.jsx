import React from 'react'
import { useSelector } from 'react-redux'

function MyOrders() {

  const cartItems = useSelector( (state) => state.shopCart.items);
  
  return (
    <div>MyOrders</div>
  )
}

export default MyOrders