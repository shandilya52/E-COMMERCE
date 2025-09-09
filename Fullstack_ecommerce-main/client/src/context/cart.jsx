import { useState, useContext, createContext, useEffect } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(()=>{
    let exixtingcart = localStorage.getItem("cart")
    if (exixtingcart) {
        setCart(JSON.parse(exixtingcart))
    }
},[])

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
