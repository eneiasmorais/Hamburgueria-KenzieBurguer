import { Key, useContext } from "react";
import { StyledProductList } from "./style";
import { AuthCartContext } from "../../providers/cartContext";
import ProductCard from "./ProductCard";
import { ICartContext, IProduct } from "../../interfaces";

const ProductList = () => {
  const { products } = useContext<ICartContext>(AuthCartContext);

  return (
    <StyledProductList>
      <ProductCard />;
    </StyledProductList>
  );
};

export default ProductList;
