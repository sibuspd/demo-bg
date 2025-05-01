import React from 'react'
import { useOutletContext } from 'react-router'
import ProductCard from './ProductCard';

function Electronics() {

    const { dataCarrierObject} = useOutletContext();
  
    const electronicsItems = dataCarrierObject.filter( (p) => p.category.toLowerCase().includes('electronics'));
  
    console.log(electronicsItems); // Only electronics category products

  return (
    <div className='flex flex-wrap justify-center '>
    {electronicsItems?.map( (product) => ( <ProductCard key={product.id} product = {product}/>))}
  </div>
  )
}

export default Electronics