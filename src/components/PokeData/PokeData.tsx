import React from "react";
import { Pokemon } from "../../types";
import * as S from "./styled";

type PokeDataProps = {
  pokemon: Pokemon | undefined;
};

const PokeData = ({ pokemon }: PokeDataProps) => {
  const pokeImage = pokemon?.images;
  if (pokeImage) {
    console.log("pokeimage", pokeImage.back_default);
  }

  if (pokemon) {
    return (
      <S.Container>
        <S.PokeNameContainer>
          <h1>{pokemon.name}</h1>
        </S.PokeNameContainer>

        <S.PokeStatsContainer>
          {pokemon.stats.map((stat: any, index: number) => {
            return (
              <S.Stats key={index}>
                <h3>{stat.base_stat}</h3>
                <h3>{stat.stat.name}</h3>
              </S.Stats>
            );
          })}

          {pokemon.abilities.map((ability: any, index: number) => {
            return <h3 key={index}>{ability.ability.name}</h3>;
          })}
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
