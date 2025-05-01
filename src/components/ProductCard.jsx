import React from "react";
import { openModal } from "../utils/modalSlice"; //  Action imported to open the modal on clicking card
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"; // Importing useSelector to access the Redux store

function ProductCard({ product }) {
  // Receives each product details and displays the card
  // console.log(product);

  const dispatch = useDispatch();
  const status = useSelector((state) => state.modal.isOpen);

  function handleClick(){ // Function that opens the modal
    dispatch(openModal(product)); // product is passed as payload to action - "openModal"
    console.log(status);
  }

  return (
    <div className="flex flex-col w-56 h-64 rounded-md overflow-hidden cursor-pointer"
    onClick={handleClick}>
      <img
        src={product.image}
        alt="image of the product"
        className="w-full h-44 object-fit border-2 shadow-sm rounded-md"
      />
      <div className="flex gap-2 p-2 justify-between md:h-20">
        <h2 className="md:text-sm font-small overflow-hidden text-ellipsis w-2/3">{product.title}</h2>
        <h1 className="text-md font-semibold">₹ {(product.price*84.57).toFixed(0)}</h1>
      </div>
    </div>
  );
}

export default ProductCard;
