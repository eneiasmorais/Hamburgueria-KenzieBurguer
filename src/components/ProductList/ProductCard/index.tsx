import { StyledProductCard } from "./style";
import { StyledButton } from "../../../styles/button";
import { StyledParagraph, StyledTitle } from "../../../styles/typography";
import { useContext } from "react";
import { AuthCartContext } from "../../../providers/cartContext";
import { ICartContext } from "../../../interfaces";
import { IProduct } from "../../../interfaces";

const ProductCard = () => {
  const { products, addProduct, filterProducts } =
    useContext<ICartContext>(AuthCartContext);

  return (
    <>
      {filterProducts
        ? filterProducts.map((item) => {
            return (
              <StyledProductCard key={item.id}>
                <div className="imageBox">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="content">
                  <StyledTitle tag="h3" $fontSize="three">
                    {item.name}
                  </StyledTitle>
                  <StyledParagraph className="category">
                    {item.category}
                  </StyledParagraph>
                  <StyledParagraph className="price">
                    R$ {item.price.toFixed(2)}
                  </StyledParagraph>
                  <StyledButton
                    $buttonSize="medium"
                    $buttonStyle="green"
                    onClick={() => addProduct(item)}
                  >
                    Adicionar
                  </StyledButton>
                </div>
              </StyledProductCard>
            );
          })
        : products?.map((product: IProduct) => {
            return (
              <StyledProductCard key={product.id}>
                <div className="imageBox">
                  <img src={product.img} alt={product.name} />
                </div>
                <div className="content">
                  <StyledTitle tag="h3" $fontSize="three">
                    {product.name}
                  </StyledTitle>
                  <StyledParagraph className="category">
                    {product.category}
                  </StyledParagraph>
                  <StyledParagraph className="price">
                    R$ {product.price.toFixed(2)}
                  </StyledParagraph>
                  <StyledButton
                    $buttonSize="medium"
                    $buttonStyle="green"
                    onClick={() => addProduct(product)}
                  >
                    Adicionar
                  </StyledButton>
                </div>
              </StyledProductCard>
            );
          })}
    </>
  );
};

export default ProductCard;
