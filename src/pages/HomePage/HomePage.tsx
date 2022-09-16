import React, { useState } from "react";
import * as S from "./styled";
import Search from "../../components/Search";
import { getPokemon } from "../../utils/api";
import PokeData from "../../components/PokeData";
import { Pokemon } from "../../types";
import { promiseToast } from "../../utils/toast";

const HomePage = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [searchValue, setSearchValue] = useState("");

  const onChangeText = (event: string) => {
    setSearchValue(event);
  };

  const savePokemon = (searchValue: string) => {
    promiseToast(
      getPokemon(searchValue).then((response) => setPokemon(response.data))
    );
  };

  return (
    <S.Container>
      <Search
        searchValue={searchValue}
        onChangeText={onChangeText}
        savePokemon={savePokemon}
      />
      <S.PokedexContainer>
        <S.PokeStats>{pokemon && <PokeData pokemon={pokemon} />}</S.PokeStats>
      </S.PokedexContainer>
    </S.Container>
  );
};

export default HomePage;
