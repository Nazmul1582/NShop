import { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quant++;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quant: 1 }]);
    }
  };

  const handleIncrement = (productId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        return { ...item, quant: item.quant + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const handleDecrement = (productId) => {
    const updatedCart = cart
      .map((item) => {
        if (item.id === productId && item.quant > 1) {
          return { ...item, quant: item.quant - 1 };
        }
        return item;
      })
      .filter((item) => item.quant > 0);
    setCart(updatedCart);
  };

  const value = {
    cart,
    setCart,
    handleAddToCart,
    handleIncrement,
    handleDecrement,
  };

  console.log(cart);

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;
