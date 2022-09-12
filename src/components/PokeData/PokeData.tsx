import React from "react";
import { Pokemon } from "../../types";
import * as S from "./styled";

type PokeDataProps = {
  pokemon: Pokemon | undefined;
};

const PokeData = ({ pokemon }: PokeDataProps) => {
  if (pokemon) {
    return (
      <>
        <h1>{pokemon.name}</h1>
        {pokemon.stats.map((stat: any, index: number) => {
          return (
            <div key={index}>
              <h3>{stat.base_stat}</h3>
              <h3>{stat.stat.name}</h3>
            </div>
          );
        })}
        {pokemon.abilities.map((ability: any, index: number) => {
          return <h3 key={index}>{ability.ability.name}</h3>;
        })}
        {pokemon.types.map((type: any, index: number) => {
          return <h3 key={index}>{type.type.name}</h3>;
        })}
      </>
    );
  }

  return <S.Container>PokeData</S.Container>;
};

export default PokeData;
