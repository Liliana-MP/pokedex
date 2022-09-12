import axios from "axios";
import React from "react";
import { BASE_URL } from "../../routes/routes";
import * as S from "./styled";

type SubmitButtonProps = {
  value: String;
};

const SubmitButton = ({ value }: SubmitButtonProps) => {
  const getData = () => {
    axios
      .get(BASE_URL + value)
      .then((response) => {
        console.log("res", response.data);
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
