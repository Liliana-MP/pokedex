import React, { useState } from "react";
import * as S from "./styled";
import Search from "../../components/Search";
import { getPokemon } from "../../utils/api";
import PokeData from "../../components/PokeData";
import { Pokemon } from "../../types";
import { errorToast, promiseToast } from "../../utils/toast";
import { getColor } from "../../utils";

const HomePage = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [searchValue, setSearchValue] = useState("");
  const pokeType = pokemon?.types[0].type.name;

  const onChangeText = (event: string) => {
    setSearchValue(event);
  };

  const savePokemon = (searchValue: string) => {
    if (searchValue === "") {
      errorToast("No input! Try again!");
    } else {
      promiseToast(
        getPokemon(searchValue).then((response) => setPokemon(response.data))
      );
      setSearchValue("");
    }
  };

  return (
    <S.Container>
      <Search
        searchValue={searchValue}
        onChangeText={onChangeText}
        savePokemon={savePokemon}
      />
      <S.PokedexContainer
        backgroundColor={pokeType ? getColor(pokeType) : "white"}
      >
        <S.PokeStats>{pokemon && <PokeData pokemon={pokemon} />}</S.PokeStats>
      </S.PokedexContainer>
    </S.Container>
  );
};

export default HomePage;
