import React, { useState } from "react";
import * as S from "./styled";
import Search from "../../components/Search";
import { getPokemon } from "../../utils/api";
import PokeData from "../../components/PokeData";
import { Pokemon } from "../../types";
import { toast, ToastContainer } from "react-toastify";

const HomePage = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [searchValue, setSearchValue] = useState("");

  const onChangeText = (event: string) => {
    setSearchValue(event);
  };

  const savePokemon = (searchValue: string) => {
    getPokemon(searchValue)
      .then((response) => {
        setPokemon(response.data);
      })
      .catch((error) => toast("nppb"));
  };

  return (
    <S.Container>
      <ToastContainer />
      <S.PokedexContainer>
        <Search
          searchValue={searchValue}
          onChangeText={onChangeText}
          savePokemon={savePokemon}
        />
        <S.PokeStats>
          <PokeData pokemon={pokemon} />
        </S.PokeStats>
      </S.PokedexContainer>
    </S.Container>
  );
};

export default HomePage;
