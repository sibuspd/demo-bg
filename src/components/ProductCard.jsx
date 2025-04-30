import React from "react";

function ProductCard({ product }) {
  // Receives each product details and displays the card
  console.log(product);
  return (
    <div className="flex flex-col w-56 h-64 rounded-md overflow-hidden">
      <img
        src={product.image}
        alt="image of the product"
        className="w-full h-40 object-fit shadow-sm rounded-md"
      />
      <div className="flex flex-col gap-2 p-2">
        <h2 className="text-lg font-small overflow-hidden text-ellipsis">{product.title}</h2>
        <h1 className="text-2xl font-semibold">₹ {(product.price*84.57).toFixed(0)}</h1>
      </div>
    </div>
  );
}

export default ProductCard;
