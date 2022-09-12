import React, { useState } from "react";
import * as S from "./styled";

type InputFieldProps = {
  onChangeText: (event: string) => void;
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
