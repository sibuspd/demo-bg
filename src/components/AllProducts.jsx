import React from "react";
import ProductCard from "./ProductCard"; // Component where each Product will be passed as Prop
import { useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";

function AllProducts() {
  const { dataCarrierObject, error, loading } = useOutletContext();

  console.log(dataCarrierObject); // An array of objects
  // console.log(error);
  // console.log(loading);

  const searchQuery = useSelector((state) => state.shopCart.searchWord);
  // console.log('Search Query is - ', searchQuery); // The string gets updated as a user types in the search bar

  const filteredProducts = dataCarrierObject
    ? dataCarrierObject.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  // console.log(filteredProducts);
  return (

      <div className="flex justify-center flex-wrap gap-8 max-w-[100rem] mx-auto">
        {loading && <h3><span className="loading loading-ring loading-xl"></span></h3>}
        {error && <h2>Error is - {error}</h2>}
        {filteredProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
  );
}

export default AllProducts;
