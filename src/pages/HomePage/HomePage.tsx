import React, { useState } from "react";
import * as S from "./styled";
import Search from "../../components/Search";
import { getPokemon } from "../../utils/api";
import PokeData from "../../components/PokeData";
import { Pokemon } from "../../types";

const HomePage = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [searchValue, setSearchValue] = useState("");

  const onChangeText = (event: string) => {
    setSearchValue(event);
  };

  const savePokemon = (searchValue: string) => {
    getPokemon(searchValue).then((response) => {
      setPokemon({
        name: response.data.name,
        stats: response.data.stats,
        abilities: response.data.abilities,
        types: response.data.types,
        images: response.data.sprites,
      });
    });
  };

  return (
    <S.Container>
      <S.PokedexContainer>
        <Search
          searchValue={searchValue}
          onChangeText={onChangeText}
          savePokemon={savePokemon}
        />
        <PokeData pokemon={pokemon} />
      </S.PokedexContainer>
    </S.Container>
  );
};

export default HomePage;
