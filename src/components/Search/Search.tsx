import React, { useState } from "react";
import InputField from "../InputField";
import SubmitButton from "../SubmitButton";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  const onChangeText = (event: string) => {
    console.log("evemt", event);
    setSearchValue(event);
  };

  return (
    <div>
      <InputField onChangeText={onChangeText} />
      <SubmitButton searchValue={searchValue} />
    </div>
  );
};

export default Search;
