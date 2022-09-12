import React, { useState } from "react";
import * as S from "./styled";

type InputFieldProps = {
  onChangeText: (inputData: string) => void;
};

const InputField = ({ onChangeText }: InputFieldProps) => {
  return (
    <S.Container>
      <input
        onChange={(e) => {
          onChangeText(e.target.value);
        }}
      />
    </S.Container>
  );
};

export default InputField;
