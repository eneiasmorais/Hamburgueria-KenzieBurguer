import { MdSearch } from "react-icons/md";
import { StyledSearchForm } from "./style";
import { StyledButton } from "../../../styles/button";
import { useContext } from "react";
import { AuthCartContext } from "../../../providers/cartContext";

const SearchForm = () => {
  const { inputValue, filterProducts, setInputValue } =
    useContext(AuthCartContext);

  return (
    <StyledSearchForm>
      <input
        type="text"
        placeholder="Digitar pesquisa"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value.toLowerCase())}
      />
      <StyledButton type="submit" $buttonSize="medium" $buttonStyle="green">
        <MdSearch />
      </StyledButton>
    </StyledSearchForm>
  );
};

export default SearchForm;
