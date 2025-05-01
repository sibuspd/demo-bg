import React from 'react'
import { Link } from 'react-router'

// The Navigation bar in consistence with the assignment instruction

function Navbar() {
  return (
    <div className='items-center'>
      <ul className='flex gap-2 font-thin'>
        <li><Link to={"/"}>All</Link></li>
        <li><Link to={"/clothing"}>Clothing</Link></li>
        <li><Link to={"/electronics"}>Electronics</Link></li>
        <li><Link to={"/furniture"}>Furniture</Link></li>
        <li><Link to={"/toys"}>Toys</Link></li>
      </ul>
    </div>
  )
}

export default Navbar