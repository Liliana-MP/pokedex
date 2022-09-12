import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../../routes/routes";
import * as S from "./styled";

type SubmitButtonProps = {
  searchValue: string;
};

const SubmitButton = ({ searchValue }: SubmitButtonProps) => {
  const [pokeData, setPokeData] = useState({});
  console.log("pokeData", pokeData);

  const getData = () => {
    axios
      .get(BASE_URL + searchValue)
      .then((response) => {
        setPokeData(response.data);
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <S.Container>
      <button onClick={getData}>Submit</button>
    </S.Container>
  );
};

export default SubmitButton;
