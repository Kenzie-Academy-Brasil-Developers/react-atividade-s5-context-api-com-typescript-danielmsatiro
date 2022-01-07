import { createContext, useContext, useState, ReactNode } from "react";

interface CartProviderProps {
  children: ReactNode;
}
export interface Product {
  image: string;
  title: string;
  description: string;
  price: number;
  id: number;
}
/* type Product = {
  image: string;
  title: string;
  description: string;
  price: number;
  id: number;
}; */
interface CartProviderData {
  cart: Product[];
  addProduct: (product: Product) => void;
  deleteProduct: (productToBeDeleted: Product) => void;
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    if (!cart.some((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const deleteProduct = (productToBeDeleted: Product) => {
    const newCart = cart.filter(
      (product) => product.title !== productToBeDeleted.title
    );
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, deleteProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
