import React from "react";

const Search = () => {
    const handleChange = (event) => {
      // syntetiskt event
      console.log(event)
      // value of target (here: input  HTML element)
      console.log(event.target.value);
    };
  
    return (
      <div>
        <label htmlFor='search'>Search: </label>
        <input id='search' type="text" onChange={handleChange} />
      </div>
    )
  };

  export default Search;