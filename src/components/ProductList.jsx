import React from "react";
import { product_api_url } from "../utils/constants"; // URL provided by BharatGo
import useProducts from "../utils/useProducts"; // Custom hook to fetch products data

function ProductList() {
  const { dataCarrierObject, error, loading } = useProducts(product_api_url);

  console.log(dataCarrierObject); // An array of objects
  console.log(error);
  console.log(loading);

  return (
    <div>
      {/* {loading && <h3>LOADING.....</h3>}
      {error && <h2>Error is - {error}</h2>} */}
      {/* {products.map((product)=>
        <div key={product.id}>{product}</div>)} */}
        Product Cards
    </div>
  );
}

export default ProductList;
