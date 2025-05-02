import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../utils/modalSlice";
import { addProduct, removeProduct} from "../utils/cartSlice"

// THE MODAL BOX THAT TAKES STATUS INFORMATION FROM MODAL SLICE
export default function MyOrderModal() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.modal); // Name of the slice is modal in modalSlice.js

  const cartItems = useSelector((state) => state.shopCart.items); // Loads the Cart list of products
  

  if (!isOpen) return null; // This means Modal is still not open

  // But if isOpen is true i.e., if a product card has been clicked
  return (
    
      <div className="fixed z-50 top-24 right-3 bg-opacity-full flex justify-center w-11/12 max-w-[300px] min-h-[300px] max-h-[400px] border-2 border-gray shadow-lg rounded-md">
        <div className="bg-white w-full max-w-[400px] min-h-[200px] shadow-lg rounded-md p-4 relative">
            <button // This is the close Button of the Modal
            className="btn btn-circle btn-sm absolute right-2 top-2"
            onClick={() => dispatch(closeModal())}>X</button>

            {cartItems.length === 0?(
                <p className="text-center">Your cart is empty</p>
            ):(
                cartItems.map( (product) => (
                    <div className="mt-8 flex items-center">
                    <img src={product?.image} alt={product?.title} 
                    className="w-20 h-20 object-fit mx-auto rounded-md"/>
                    
                    <div className="flex flex-col ml-4">
                        <h5 className="text-sm font-bold overflow-hidden text-ellipsis">{product.title}</h5>
                        <div className="flex items-center mt-2">
                            <button className="btn btn-xs btn-outline bg-red-300 rounded-s-2xl text-lg"
                            onClick={()=> dispatch(removeProduct(product))}>-</button>

                            <span className="w-8 text-center">{product.quantity}</span>

                            <button className="btn btn-xs btn-outline bg-green-200 rounded-e-2xl text-lg"
                            onClick={()=> dispatch(addProduct(product))}>+</button>
                        </div>
                    </div>
                </div>
                ))
            )}



        <div>
        </div>
        </div>
    </div>


  );
}
