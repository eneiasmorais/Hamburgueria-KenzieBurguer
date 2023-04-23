import { MdClose } from "react-icons/md";
import CartProductList from "./CartProductList";

import { StyledCartModalBox } from "./style";
import { StyledParagraph, StyledTitle } from "../../styles/typography";
import { useContext } from "react";
import { AuthCartContext } from "../../providers/cartContext";
import Modal from "react-modal";
import ReactModal from "react-modal";

const CartModal = () => {
  const { modalIsOpen, setIsOpen, handleClose, handleShow, cartList } =
    useContext(AuthCartContext);

  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={handleClose}
      contentLabel="Example Modal"
      className="cart_Modal"
      ariaHideApp={false}
    >
      <StyledCartModalBox>
        <dialog>
          <header>
            <StyledTitle tag="h2" $fontSize="three">
              Carrinho de compras
            </StyledTitle>
            <button
              type="button"
              aria-label="Fechar"
              onClick={() => {
                handleClose();
              }}
            >
              <MdClose size={21} />
            </button>
          </header>

          <div className="cartBox">
            {cartList.length > 0 ? (
              <CartProductList />
            ) : (
              <div className="emptyBox">
                <StyledTitle tag="h3" $fontSize="three" textAlign="center">
                  Sua sacola está vazia
                </StyledTitle>
                <StyledParagraph textAlign="center">
                  Adicione itens
                </StyledParagraph>
              </div>
            )}
          </div>
        </dialog>
      </StyledCartModalBox>
    </ReactModal>
  );
};
export default CartModal;
