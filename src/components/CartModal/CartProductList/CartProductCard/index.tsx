import { MdDelete } from "react-icons/md";

import { StyledCartProductCard } from "./style";
import { StyledTitle } from "../../../../styles/typography";
import { useContext } from "react";
import { AuthCartContext } from "../../../../providers/cartContext";
import { IProductCart } from "../../../../interfaces";

const CartProductCard = () => {
  const { cartList, removeProduct } = useContext(AuthCartContext);

  return (
    <>
      {cartList.map((cartProduct: IProductCart) => {
        return (
          <StyledCartProductCard key={cartProduct.id}>
            <>
              <div className="imageBox">
                <img src={cartProduct.img} alt={cartProduct.name} />
              </div>
              <div className="contentBox">
                <StyledTitle tag="h3" $fontSize="three">
                  {cartProduct.name}
                </StyledTitle>
                <h3>{cartProduct.quantity}</h3>
                <button
                  type="button"
                  aria-label="Remover"
                  onClick={() => removeProduct(cartProduct)}
                >
                  <MdDelete size={24} />
                </button>
              </div>
            </>
          </StyledCartProductCard>
        );
      })}
    </>
  );
};

export default CartProductCard;
