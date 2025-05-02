import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../utils/modalSlice";

// MODAL FOR INFORMATION ON A PRODUCT CARD
export default function ProductModal() {
  const dispatch = useDispatch();
  const { isOpen, product } = useSelector((state) => state.modal); // Information of the clicked product is retreived

  if (!isOpen) return null;

  return (
    <div>
      <div className="fixed z-50 top-24 right-3 bg-opacity-full flex justify-center w-11/12 max-w-[300px] min-h-[300px] max-h-[400px] border-2 border-gray shadow-lg rounded-md">
        <div className="bg-white w-full max-w-[400px] min-h-[200px] shadow-lg rounded-md p-4 relative">
          <button className="btn btn-circle btn-sm absolute right-2 top-2" 
          onClick={ () => dispatch(closeModal())}>X</button>
          
          <h3 className="text-md font-bold text-center">{product.title}</h3>
          <img src={product?.image} className="w-40 h-40 object-fit mx-auto mt-4 rounded-md"/>
          <p className="text-2xl font-bold text-center mt-4">₹ {(product.price * 84.57).toFixed(0)}</p>
          <p className="mt-4">{product.description}</p>
        </div>
      </div>
    </div>
  );
}
