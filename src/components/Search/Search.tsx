import React, { useState } from "react";
import InputField from "../InputField";
import SubmitButton from "../SubmitButton";

const Search = () => {
  const [input, setInput] = useState("");

  const onChangeText = (event: string) => {
    console.log("evemt", event);
    setInput(event);
  };

  return (
    <div>
      <InputField onChangeText={onChangeText} />
      <SubmitButton value={input} />
    </div>
  );
};

export default Search;
