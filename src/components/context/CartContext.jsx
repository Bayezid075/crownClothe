import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, ProductToAdd) => {
  // find if exist or not in cart
  const exisitingItems = cartItems.find(
    (cartItem) => cartItem.id === ProductToAdd.id
  );
  // if exist then add more  quantity on that item otherwise create one
  if (exisitingItems) {
    return cartItems.map((cItem) =>
      cartItems.id === ProductToAdd.id
        ? { ...cartItems, quantity: cItem + 1 }
        : cartItems
    );
  }
  //return modified data or new data
  return [...cartItems, { ...ProductToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setisCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [isCartOpen, setisCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const CountItem = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(CountItem);
  }, [cartItems]);

  const addItemToCart = (ProductToAdd) => {
    setCartItems(addCartItem(cartItems, ProductToAdd));
  };

  const value = {
    isCartOpen,
    setisCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
  };
  return <CartContext.Provider value={value}>{children} </CartContext.Provider>;
};
