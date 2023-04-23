import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";
import {
  ICartContext,
  ICartProviderProps,
  IProduct,
  IProductCart,
} from "../interfaces";

export const AuthCartContext = createContext({} as ICartContext);

export const AuthCartProvider = ({ children }: ICartProviderProps) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartList, setCartList] = useState<IProductCart[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [counter, setCounter] = useState(0);

  const handleClose = () => setIsOpen(false);
  const handleShow = () => setIsOpen(true);

  useEffect(() => {
    const getProducts = async () => {
      const token = localStorage.getItem("@hamb:token");

      try {
        const response = await api.get("products", {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts(response.data);
      } catch (error) {
        toast.error(
          "Lista de produtos indisponível. Tente novamente mais tarde!"
        );
      }
    };
    getProducts();
  });

  const newCart = [""];

  const addProduct = (product: IProduct) => {
    const productCart: IProductCart = { ...product, quantity: 1 };
    if (
      cartList.some(
        (productCart: IProductCart) => productCart.id === product.id
      )
    ) {
      const newCart = cartList.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartList(newCart);
      setCounter(counter + 1);
    } else {
      const newCart = [...cartList, productCart];
      setCartList(newCart);
      setCounter(counter + 1);
    }
  };

  const removeProduct = (product: IProduct) => {
    const productCart: IProductCart = { ...product, quantity: 1 };
    const existingProduct = cartList.find(
      (productCart: IProductCart) => productCart.id === product.id
    );

    console.log(counter); //numero total de itens
    console.log(existingProduct);
    console.log(productCart);
    if (existingProduct) {
      if (existingProduct.quantity == 1) {
        const newCart = cartList.filter((item) => item.id !== product.id);
        setCartList(newCart);
        setCounter(counter - existingProduct.quantity);
      } else if (existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
      }
    }
  };

  const filterProducts = products.filter(
    (product: { name: string | string[] }) => {
      if (Array.isArray(product.name)) {
        return product.name.some((name) =>
          name.toLowerCase().includes(inputValue)
        );
      } else {
        return product.name.toLowerCase().includes(inputValue);
      }
    }
  );

  const cartTotal = cartList.reduce((valorAcumulado, valorAtual) => {
    return valorAcumulado + valorAtual.price * valorAtual.quantity;
  }, 0);

  const removeAllProducts = () => {
    setCartList([]);
  };

  return (
    <AuthCartContext.Provider
      value={{
        handleClose,
        handleShow,
        modalIsOpen,
        setIsOpen,
        products,
        setProducts,
        cartList,
        setCartList,
        addProduct,
        removeProduct,
        newCart,
        counter,
        filterProducts,
        inputValue,
        setInputValue,
        cartTotal,
        removeAllProducts,
      }}
    >
      {children}
    </AuthCartContext.Provider>
  );
};
