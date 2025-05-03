import React from 'react'
import Navbar from './Navbar'
import CartItems from './CartItems'
import Logo from './Logo'

function Header() {
  return (
    <div className='flex justify-between items-center p-4 bg-gray-50 border-b-2 shadow-sm'>
     
            <div className='flex flex-col md:flex-row gap-6 md:ml-4'>
                <Logo/>
                <Navbar/>
            </div>
            
            <div className='flex gap-2'>
                <CartItems/>
            </div>
     
    </div>
  )
}

export default Header