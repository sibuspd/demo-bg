import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'


export default function CartItems() {

  const totalQuantity = useSelector( state => state.shopCart.totalQuantity);

  return (
    <div className='relative'>
      <FaShoppingCart className='text-2xl'/>
      { (
        <span className='absolute -top-1 -right-2 px-2 bg-red-500 text-white rounded-full text-xs'>{totalQuantity}</span>
      )}
    </div>
  )
}
