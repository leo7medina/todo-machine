import React from 'react';
import './TodoSearch.css';
import {TodoContext} from "../../context/TodoContext";

function TodoSearch() {

  const {searchValue, setSearchValue} = React.useContext(TodoContext);

  function onChangeSearch(event) {
    setSearchValue(event.target.value);
  }



  return (
    <input
      placeholder="Cortar cebolla"
      value={searchValue}
      className="TodoSearch" onChange={onChangeSearch}
    />
  )
}

export {TodoSearch};
