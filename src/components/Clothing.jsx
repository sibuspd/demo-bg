import React from 'react'
import { useOutletContext } from 'react-router'
import ProductCard from './ProductCard';


function Clothing() {

  const { dataCarrierObject} = useOutletContext();

  const clothingItems = dataCarrierObject.filter( (p) => p.category.toLowerCase().includes('clothing'));

  // console.log(clothingItems); // Only Clothing category products
  
  return (
    <div className='flex flex-wrap justify-center '>
      {clothingItems?.map( (product) => ( <ProductCard key={product.id} product = {product}/>))}
    </div>
  )
}

export default Clothing