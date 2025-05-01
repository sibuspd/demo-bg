import React from 'react'
import { useOutletContext } from 'react-router'
import ProductCard from './ProductCard';

function Toys() {

        const { dataCarrierObject} = useOutletContext();
      
        const toyItems = dataCarrierObject.filter( (p) => p.category.toLowerCase().includes('toy'));
      
        // console.log(toyItems); // Only toy category products

  return (
    <div className='flex flex-wrap justify-center '>
    {toyItems?.map( (product) => ( <ProductCard key={product.id} product = {product}/>))}
  </div>
  )
}

export default Toys