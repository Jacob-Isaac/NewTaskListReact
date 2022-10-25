import React from "react";
import { Wrapper, Input } from "./styled";
import useQueryParameter from "./useQueryParameter";
import searchQueryParamName from "../../../../common/searchQueryParamName";
import useReplaceQueryParameter from "./useReplaceQueryParameter";

const Search = () => {
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = (event) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: event.target.value.trim() !== "" ? event.target.value : undefined,
    });
  };

  return (
    <>
      <Wrapper>
        <Input
          placeholder="Filtruj zadania"
          value={query || ""}
          onInput={onInputChange}
        />
      </Wrapper>
    </>
  );
};

export default Search;
