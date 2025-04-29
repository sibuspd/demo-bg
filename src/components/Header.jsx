import React from 'react'
import Navbar from './Navbar'
import CartItems from './CartItems'

function Header() {
  return (
    <div className='flex justify-between items-center p-4 bg-gray-50 border-b-2 shadow-sm'>
     


            <div className='flex gap-2 ml-4'>
                LOGO
                <Navbar/>
            </div>
            
            <div className='flex gap-2'>
                Current user
                <CartItems/>
            </div>
     
    </div>
  )
}

export default Header