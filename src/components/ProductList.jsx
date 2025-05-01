import React from "react";
import { product_api_url } from "../utils/constants"; // URL provided by BharatGo
import useProducts from "../utils/useProducts"; // Custom hook to fetch products data
import ProductCard from "./ProductCard"; // Component where each Product will be passed as Prop
import SearchProduct from "./SearchProduct";
import { useSelector } from "react-redux";


function ProductList() {
  const { dataCarrierObject, error, loading } = useProducts(product_api_url);

  // console.log(dataCarrierObject); // An array of objects
  // console.log(error);
  // console.log(loading);

  const searchQuery = useSelector( (state) => state.shopCart.searchWord);
  // console.log('Search Query is - ', searchQuery); // The string gets updated as a user types in the search bar

  const filteredProducts = dataCarrierObject?dataCarrierObject.filter((p) => p.title.toLowerCase().includes(searchQuery.toLowerCase()) ): [];

  // console.log(filteredProducts);

  return (
    <div className="mx-auto mt-9 lg:mx-5">

      <div className="flex justify-center mb-8 mx-auto max-w-[100rem]">
        <SearchProduct/>
      </div>

      <div className="flex justify-center flex-wrap gap-8 max-w-[100rem] mx-auto">
        {loading && <h3>LOADING.....</h3>}
        {error && <h2>Error is - {error}</h2>}
        {filteredProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>

    </div>
  );
}

export default ProductList;
