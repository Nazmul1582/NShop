import { createContext, useState } from "react";

export const ProductContext = createContext();


const ProductProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const handleAddToCart = (product) => {
        setCart([...cart, product]);
    }
    const value = {cart, setCart, handleAddToCart}
    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
};

export default ProductProvider;