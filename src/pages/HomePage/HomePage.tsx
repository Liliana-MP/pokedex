import axios from "axios";
import React, { useEffect, useState } from "react";
import * as S from "./styled";
import { BASE_URL } from "../../routes/routes";
import Search from "../../components/Search";

const HomePage = () => {
  const getData = () => {
    axios
      .get(BASE_URL + "charmander")
      .then((response) => {
        console.log("res", response.data);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <S.Container>
      Pokédex
      <Search />
    </S.Container>
  );
};

export default HomePage;
