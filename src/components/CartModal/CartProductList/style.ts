import styled from "styled-components";

export const StyledCartProductList = styled.div`
  display: flex;
  flex-direction: column;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    height: max-content;
    overflow: auto;
  }

  .totalBox {
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    .total {
      font-weight: 700;
      color: ${({ theme }) => theme.colors.gray300};
    }
  }
`;
