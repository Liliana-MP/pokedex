import React from "react";
import * as S from "./styled";

type PokeDataProps = {
  data: (data: any) => void;
};

const PokeData = ({ data }: PokeDataProps) => {
  return <S.Container>PokeData</S.Container>;
};

export default PokeData;
