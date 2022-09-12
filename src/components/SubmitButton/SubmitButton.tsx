import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../../routes/routes";
import * as S from "./styled";

type SubmitButtonProps = {
  searchValue: string;
  setPokeData: (data: any) => void;
};

const SubmitButton = ({ searchValue, setPokeData }: SubmitButtonProps) => {
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
