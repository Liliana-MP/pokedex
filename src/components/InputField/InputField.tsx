import React, { useState } from "react";
import * as S from "./styled";

type InputFieldProps = {
  onChangeText: (inputData: string) => void;
  value: string;
};

const InputField = ({ onChangeText, value }: InputFieldProps) => {
  return (
    <S.Container>
      <S.Input
        value={value}
        placeholder="Search here"
        onChange={(e) => {
          onChangeText(e.target.value);
        }}
      />
    </S.Container>
  );
};

export default InputField;
