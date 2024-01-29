import { useContext } from "react";
import { images } from "../utils/images";
import { ProductContext } from "../provider/ProductProvider";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Cart = () => {
  const { cart, setCart, handleDecrement, handleIncrement } =
    useContext(ProductContext);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-3 max-h-[calc(100vh-120px)] hidden lg:block sticky top-[120px] overflow-y-scroll">
      <div className="flex justify-between">
        <h2 className="text-2xl px-4 py-2 lg:px-6 lg:py-3 font-bold">Cart</h2>
        {cart.length > 0 && (
          <button
            onClick={() => setCart([])}
            className="bg-[#f8f8f8] hover:bg-[#e9e9e9] px-4 py-2 lg:px-6 lg:py-3 rounded-2xl font-semibold"
          >
            Clear
          </button>
        )}
      </div>
      {cart.length <= 0 ? (
        <div className="flex flex-col justify-center items-center gap-5 h-full">
          <img src={images.emptyCart} alt="empty cart" />
          <h2 className="text-2xl font-bold text-center">
            Your cart is currently empty
          </h2>
        </div>
      ) : (
        <div className="mt-5">
          {cart.map((product) => (
            <div
              className="p-2 border-b border-[#e7e7e7] flex justify-between gap-2"
              key={product.id}
            >
              <img
                className="w-12 h-12 object-cover"
                src="https://avatars.mds.yandex.net/get-eda/3569651/b272d3b5f10746dfb125abca442a78be/400x400nocrop"
                alt="product"
              />
              <div className="flex flex-col">
                <p>{product.name}</p>
                <div className="flex gap-2">
                  <p>{product.price} ₸</p>
                  <p className="text-[#9E9B98]">{product.quantity}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-[#f8f8f8] hover:bg-[#e9e9e9] px-3 py-1 rounded-2xl font-bold">
                <button onClick={() => handleDecrement(product.id)}>
                  <FaMinus />
                </button>
                <span className="mt-[2px]">{product.quant}</span>
                <button onClick={() => handleIncrement(product.id)}>
                  <FaPlus />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
