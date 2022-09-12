import React, { useState } from "react";
import InputField from "../InputField";
import SubmitButton from "../SubmitButton";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [pokeData, setPokeData] = useState({});
  console.log("pokeData hej", pokeData);

  const onChangeText = (event: string) => {
    setSearchValue(event);
  };

  const savedData = (data: {}) => {
    setPokeData(data);
  };

  return (
    <div>
      <InputField onChangeText={onChangeText} />
      <SubmitButton searchValue={searchValue} setPokeData={savedData} />
    </div>
  );
};

export default Search;
