import React from "react";
import { Pokemon } from "../../types";
import { getColor } from "../../utils";
import * as S from "./styled";

type PokeDataProps = {
  pokemon?: Pokemon;
};

const PokeData = ({ pokemon }: PokeDataProps) => {
  const pokeImageFront = pokemon?.sprites.front_default;

  if (pokemon) {
    const pokeType = pokemon.types[0].type.name;
    return (
      <S.Container>
        <S.PokeNameContainer
          textColor={pokeType ? getColor(pokeType) : "black"}
        >
          <h1>{pokemon.name.toLocaleUpperCase()}</h1>
        </S.PokeNameContainer>
        {pokeImageFront ? (
          <S.Image src={pokeImageFront} alt={pokemon.name} />
        ) : null}
        <S.PokeInfoContainer>
          <S.StatsContainer>
            <S.Logo>STATS</S.Logo>
            {pokemon.stats.map((stat: any, index: number) => {
              return (
                <S.Stats key={index}>
                  <h3>{stat.stat.name.toLocaleUpperCase()}</h3>
                  <h2>{stat.base_stat}</h2>
                </S.Stats>
              );
            })}
          </S.StatsContainer>
          <S.StatsContainer>
            <S.Logo>ABILITIES</S.Logo>
            {pokemon.abilities.map((ability: any, index: number) => {
              return <h3 key={index}>{ability.ability.name}</h3>;
            })}
          </S.StatsContainer>
          <S.StatsContainer>
            <S.Logo>TYPES</S.Logo>
            {pokemon.types.map((type: any, index: number) => {
              return <h3 key={index}>{type.type.name}</h3>;
            })}
          </S.StatsContainer>
        </S.PokeInfoContainer>
      </S.Container>
    );
  }

  return <S.Container>Pokedex</S.Container>;
};

export default PokeData;
