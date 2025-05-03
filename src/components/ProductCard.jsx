import React from "react";
import { openModal } from "../utils/modalSlice"; //  Action imported to open the modal on clicking card
import { openMyOrderModal } from "../utils/myOrderModalSlice";
import { addProduct } from '../utils/cartSlice'
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux"; // Importing useSelector to access the Redux store

function ProductCard({ product }) {
  // Receives each product details and displays the card
  // console.log(product);

  const dispatch = useDispatch();
  // const status = useSelector((state) => state.modal.isOpen);

  if(!product)
    return <div>No product received</div>

  return (
    <div className="flex flex-col w-56 h-64 rounded-md overflow-hidden cursor-pointer relative"
    onClick={() => dispatch(openModal(product))}>

      <div className="absolute right-3 top-3">
        <button className="btn btn-xs btn-outline-none rounded-lg text-xl p-4 bg-gray-700 bg-opacity-65"
        onClick={(e) => { e.stopPropagation(); dispatch(addProduct(product)); dispatch(openMyOrderModal());
        }}>+</button> 
      </div>
      
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
