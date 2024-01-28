import React from "react";
import { images } from "../../utils/images";

const Cart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-3 max-h-[calc(100vh-120px)] sticky top-[120px]">
      <h2 className="text-2xl font-bold">Cart</h2>
      <div className="flex flex-col justify-center items-center gap-5 h-full">
        <img src={images.emptyCart} alt="empty cart" />
        <h2 className="text-2xl font-bold text-center">Your cart is currently
empty</h2>
      </div>
    </div>
  );
};

export default Cart;
