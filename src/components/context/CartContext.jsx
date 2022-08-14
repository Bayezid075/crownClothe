import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, ProductToAdd) => {
  // find if exist or not in cart
  const exisitingItems = cartItems.find(
    (cartItem) => cartItem.id === ProductToAdd.id
  );
  // if exist then add more  quantity on that item otherwise create one
  if (exisitingItems) {
    return cartItems.map((cItem) =>
      cItem.id === ProductToAdd.id
        ? { ...cItem, quantity: cItem.quantity + 1 }
        : cItem
    );
  }
  //return modified data or new data
  return [...cartItems, { ...ProductToAdd, quantity: 1 }];
};

const removeCart = (cartItems, removeFromCart) => {
  // find the item exist or not
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === removeFromCart.id
  );
  // if exitst remove them
  if (existingItem.quantity === 1) {
    return cartItems.filter((item) => cartItems.id !== removeFromCart.id);
  }

  if (existingItem) {
    return cartItems.map((cItem) =>
      cItem.id === removeFromCart.id
        ? { ...cItem, quantity: cItem.quantity - 1 }
        : cItem
    );
  }
};
const clearCheckoutItem = (cartItems, checkoutRemove) => {
  return cartItems.filter((item) => item.id !== checkoutRemove.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setisCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartItemDecriment: () => {},
  clearItemFromCheckout: () => {},
  cartTotal: 0,
});

export const CartContextProvider = ({ children }) => {
  const [isCartOpen, setisCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const CountItem = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(CountItem);
  }, [cartItems]);

  useEffect(() => {
    const CartItemTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(CartItemTotal);
  }, [cartItems]);

  const addItemToCart = (ProductToAdd) => {
    setCartItems(addCartItem(cartItems, ProductToAdd));
  };

  const removeCartItem = (removeFromCart) => {
    setCartItems(removeCart(cartItems, removeFromCart));
  };

  const clearItemFromCheckout = (checkoutRemove) => {
    setCartItems(clearCheckoutItem(cartItems, checkoutRemove));
  };
  const value = {
    isCartOpen,
    setisCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    removeCartItem,
    clearItemFromCheckout,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children} </CartContext.Provider>;
};
