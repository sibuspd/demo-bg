import React from "react";
import { product_api_url } from "../utils/constants"; // URL provided by BharatGo
import useProducts from "../utils/useProducts"; // Custom hook to fetch products data
import ProductCard from "./ProductCard"; // Component where each Product will be passed as Prop

function ProductList() {
  const { dataCarrierObject, error, loading } = useProducts(product_api_url);

  console.log(dataCarrierObject); // An array of objects
  console.log(error);
  console.log(loading);

  return (
    <div className="flex gap-24 flex-wrap">
      {loading && <h3>LOADING.....</h3>}
      {error && <h2>Error is - {error}</h2>}
       {dataCarrierObject.map((product)=>
        <ProductCard product={ product } key={product.id}/>)} 
    </div>
  );
}

export default ProductList;
