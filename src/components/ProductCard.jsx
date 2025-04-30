import React from "react";

function ProductCard({ product }) {
  // Receives each product details and displays the card
  console.log(product);
  return (
    <div className="flex flex-col border-2 w-42">
      <img
        src={product.image}
        alt="image of the product"
        className="w-52 h-44"
      />
      <div className="flex gap-2">
        <h2 className="flex flex-wrap">{product.title}</h2>
        <h1 className="text-2xl font-semibold">₹ {(product.price*84.57).toFixed(0)}</h1>
      </div>
    </div>
  );
}

export default ProductCard;
