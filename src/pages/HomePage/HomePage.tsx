import axios from "axios";
import React, { useEffect, useState } from "react";
import * as S from "./styled";
import { BASE_URL } from "../../routes/routes";
import Search from "../../components/Search";

const HomePage = () => {
  return (
    <S.Container>
      Pokédex
      <Search />
    </S.Container>
  );
};

export default HomePage;
