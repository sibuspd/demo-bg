import React from "react";
import { useSelector } from "react-redux";

function MyOrders() {
  const cartItems = useSelector((state) => state.shopCart.items);

  return (
    <div className="p-6 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">Orders' Summary </h1>
      {/* Cart Items Display */}
      {cartItems.length === 0 ? (
        <p>Cart is Empty</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 justify-center">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-lg p-2 shadow-sm flex flex-col items-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-32 h-32 mb-4 object-contain"
              />
              <h3 className="font-thin text-center text-sm mb-2">
                {item.title}
              </h3>
              <div className="mt-auto">
                <p className="text-gray-700 text-sm">
                  Quantity:{" "}
                  <span className="font-bold text-blue-800">
                    {item.quantity}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Payment Proceeds */}
      <div className="mt-8 flex justify-start">
        <button className="bg-blue-950 hover:bg-green-700 text-white py-2 px-4 rounded-full shadow-md transition-all font-medium text-sm"
        onClick={()=>alert("Payment feature upcoming")}>Proceed to Payment</button>
      </div>
    </div>
  );
}

export default MyOrders;
