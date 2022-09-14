import React from "react";
import { Pokemon } from "../../types";
import { getBackground } from "../../utils";
import * as S from "./styled";

type PokeDataProps = {
  pokemon: Pokemon | undefined;
};

const PokeData = ({ pokemon }: PokeDataProps) => {
  const pokeImageFront = pokemon?.sprites.front_default;
  let pokeType = "";

  pokemon?.types.map((type) => {
    pokeType = type.type.name.toLocaleLowerCase();
  });

  if (pokemon) {
    return (
      <S.Container backgroundImage={getBackground(pokeType)}>
        <S.PokeNameContainer>
          <h1>{pokemon.name.toLocaleUpperCase()}</h1>
        </S.PokeNameContainer>
        {pokeImageFront ? (
          <img src={pokeImageFront} alt={pokemon.name} />
        ) : null}
        <S.PokeStatsContainer>
          <S.Logo>STATS</S.Logo>
          {pokemon.stats.map((stat: any, index: number) => {
            return (
              <S.Stats key={index}>
                <h2>{stat.base_stat}</h2>
                <h3>{stat.stat.name.toLocaleUpperCase()}</h3>
              </S.Stats>
            );
          })}
          <S.Logo>ABILITIES</S.Logo>
          {pokemon.abilities.map((ability: any, index: number) => {
            return <h3 key={index}>{ability.ability.name}</h3>;
          })}
          <S.Logo>TYPES</S.Logo>
          {pokemon.types.map((type: any, index: number) => {
            return <h3 key={index}>{type.type.name}</h3>;
          })}
        </S.PokeStatsContainer>
      </S.Container>
    );
  }

  return <S.Container>PokeData</S.Container>;
};

export default PokeData;
