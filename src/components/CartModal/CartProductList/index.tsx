import CartProductCard from "./CartProductCard";

import { StyledCartProductList } from "./style";
import { StyledButton } from "../../../styles/button";
import { StyledParagraph } from "../../../styles/typography";
import { useContext } from "react";
import { AuthCartContext } from "../../../providers/cartContext";

const CartProductList = () => {
  const { cartTotal, removeAllProducts } = useContext(AuthCartContext);

  return (
    <StyledCartProductList>
      <ul>
        <CartProductCard />
      </ul>

      <div className="totalBox">
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className="total">
          R$ {cartTotal.toLocaleString()}
        </StyledParagraph>
      </div>
      <StyledButton
        $buttonSize="default"
        $buttonStyle="gray"
        onClick={() => removeAllProducts()}
      >
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  );
};

export default CartProductList;
