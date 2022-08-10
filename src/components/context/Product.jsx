import { createContext, useState } from "react";
import Product_Data from "../shopData.json";

export const ProductContext = createContext({
  products: [],
});
export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState(Product_Data);
  const value = { product };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
