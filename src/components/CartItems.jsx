import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import {openMyOrderModal} from '../utils/myOrderModalSlice'


export default function CartItems() {

  const dispatch = useDispatch();
  const totalQuantity = useSelector( state => state.shopCart.totalQuantity);

  const handleClick = () => {
    dispatch(openMyOrderModal());
  }

  return (
    <div className='relative cursor-pointer' onClick={handleClick}>
      <FaShoppingCart className='text-2xl'/>
      { (
        <span className='absolute -top-1 -right-2 px-2 bg-red-500 text-white rounded-full text-xs'>{totalQuantity}</span>
      )}
    </div>
  )
}
