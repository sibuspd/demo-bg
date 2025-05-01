import React from 'react'
import { useOutletContext } from 'react-router'
import ProductCard from './ProductCard';

function Furniture() {

      const { dataCarrierObject} = useOutletContext();
    
      const furnitureItems = dataCarrierObject.filter( (p) => p.category.toLowerCase().includes('furniture'));
    
      // console.log(furnitureItems); // Only furniture category products

  return (
    <div className='flex flex-wrap justify-center '>
    {furnitureItems?.map( (product) => ( <ProductCard key={product.id} product = {product}/>))}
  </div>
  )
}

export default Furniture