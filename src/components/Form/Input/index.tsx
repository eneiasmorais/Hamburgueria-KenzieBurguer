import { IInputProviderProps } from "../../../interfaces";
import { StyledInputContainer } from "../../../styles/form";
import { StyledParagraph } from "../../../styles/typography";
import React, { forwardRef } from "react";

const Input = forwardRef(
  ({ name, label, type, register, errors, id }: IInputProviderProps, ref) => {
    return (
      <div>
        <StyledInputContainer>
          <input type={type} ref={ref} name={name} {...register} />
          <label htmlFor={id}>{label}</label>
        </StyledInputContainer>
        <StyledParagraph fontColor="red">{errors}</StyledParagraph>
      </div>
    );
  }
);

export default Input;
