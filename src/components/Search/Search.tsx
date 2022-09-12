import React, { useState } from "react";
import InputField from "../InputField";
import SubmitButton from "../SubmitButton";

type SearchProps = {
  savePokemon: (data: any) => void;
  onChangeText: (inputData: string) => void;
  searchValue: string;
};

const Search = ({ savePokemon, onChangeText, searchValue }: SearchProps) => {
  return (
    <div>
      <InputField onChangeText={onChangeText} />
      <SubmitButton searchValue={searchValue} savePokemon={savePokemon} />
    </div>
  );
};

export default Search;
