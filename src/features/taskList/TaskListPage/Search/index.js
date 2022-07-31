import React from "react";
import {Wrapper} from "./styled";
import useQueryParameter from "./useQueryParameter";
import searchQueryParamName from "../../../../common/searchQueryParamName"
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
       <h3>Wyszukiwarka</h3><br/>
       <Wrapper>
        <input 
        placeholder="Filtruj zadania" 
        value = {query || ""}
        onInput = {onInputChange}
        />
        </Wrapper><br/><br/><br/><br/>
       
        </>
        
    );
}

export default Search;