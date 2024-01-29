import { useContext, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { ProductContext } from "../provider/ProductProvider";
import { FaMinus, FaPlus } from "react-icons/fa6";

const Product = ({ item }) => {
  const [openModal, setOpenModal] = useState(false);
  const { handleAddToCart, cart, handleIncrement, handleDecrement } =
    useContext(ProductContext);
  const cartItem = cart.find((product) => product.id === item.id);

  return (
    <>
      <div className="p-5 rounded-2xl bg-white shadow-lg">
        <div className="cursor-pointer" onClick={() => setOpenModal(true)}>
          <img
            src="https://avatars.mds.yandex.net/get-eda/3569651/b272d3b5f10746dfb125abca442a78be/400x400nocrop"
            alt="product-photo"
          />
          <p className="text-3xl font-semibold">{item.price} ₸</p>
          <p className="mt-1 mb-3">{item.name}</p>
          <p className="text-[#9E9B98] text-md my-3">{item.quantity}</p>
        </div>
        {cart?.find((product) => product.id === item.id) ? (
          <div className="flex items-center justify-center gap-3 bg-[#F5F4F2] hover:bg-[#dddcda] duration-200 px-2 py-1 rounded-2xl font-semibold">
            <button onClick={() => handleDecrement(item.id)}>
              <FaMinus />
            </button>
            <span className="mt-[2px]">{cartItem.quant}</span>
            <button onClick={() => handleIncrement(item.id)}>
              <FaPlus />
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              handleAddToCart(item);
            }}
            className="bg-[#F5F4F2] hover:bg-[#dddcda] duration-200 px-3 py-2 rounded-2xl font-semibold w-full grid place-items-center"
          >
            <FaPlus />
          </button>
        )}
      </div>
      {openModal && (
        <div className="fixed z-10 top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-3/4 h-3/4 relative">
            <div className="grid grid-cols-2 gap-20 mx-20 items-center">
              <img
                src="https://avatars.mds.yandex.net/get-eda/3569651/b272d3b5f10746dfb125abca442a78be/400x400nocrop"
                alt="product-photo"
              />
              <div className="p-5">
                <p className="mt-1 text-2xl font-bold mb-3">{item.name}</p>
                <p className="text-[#9E9B98] text-md my-3">{item.quantity}</p>
                <div className="flex items-center gap-5">
                  <p className="text-3xl font-bold">{item.price} ₸</p>
                  {/* <button className="bg-amber-400 duration-200 px-5 py-2 rounded-2xl font-semibold text-2xl w-fit">
                    Add
                  </button> */}
                  {cart?.find((product) => product.id === item.id) ? (
                    <div className="flex items-center justify-center gap-3 bg-amber-400 px-6 py-3 rounded-2xl font-semibold">
                      <button onClick={() => handleDecrement(item.id)}>
                        <FaMinus />
                      </button>
                      <span className="mt-[2px]">{cartItem.quant}</span>
                      <button onClick={() => handleIncrement(item.id)}>
                        <FaPlus />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        handleAddToCart(item);
                      }}
                      className="bg-amber-400 px-6 py-3 rounded-2xl font-semibold w-full grid place-items-center"
                    >
                      <FaPlus />
                    </button>
                  )}
                </div>
              </div>
            </div>

            <button
              className="text-2xl absolute top-5 right-5"
              onClick={(event) => {
                event.stopPropagation();
                setOpenModal(false);
              }}
            >
              <RxCross2 />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
