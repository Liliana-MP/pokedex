import React from "react";
import { Pokemon } from "../../types";
import * as S from "./styled";

type PokeDataProps = {
  pokemon: Pokemon | undefined;
};

const PokeData = ({ pokemon }: PokeDataProps) => {
  const pokeImageFront = pokemon?.sprites.front_default;
  let background = "";

  pokemon?.types.map((type) => {
    const pokeType = type.type.name.toLocaleLowerCase();
    if (pokeType === "fire") {
      return (background =
        "url(https://upload.wikimedia.org/wikipedia/commons/5/56/Pokémon_Fire_Type_Icon.svg)");
    } else if (pokeType === "normal") {
      return (background =
        "url(https://upload.wikimedia.org/wikipedia/commons/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg)");
    } else if (pokeType === "grass") {
      return (background =
        "url(https://upload.wikimedia.org/wikipedia/commons/f/f6/Pok%C3%A9mon_Grass_Type_Icon.svg)");
    } else if (pokeType === "bug") {
      return (background =
        "url(https://upload.wikimedia.org/wikipedia/commons/3/3c/Pok%C3%A9mon_Bug_Type_Icon.svg)");
    } else if (pokeType === "water") {
      return (background =
        "url(https://upload.wikimedia.org/wikipedia/commons/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg)");
    } else if (pokeType === "poison") {
      return (background =
        "url(https://upload.wikimedia.org/wikipedia/commons/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg)");
    } else if (pokeType === "electric") {
      return (background =
        "url(https://upload.wikimedia.org/wikipedia/commons/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg)");
    }
  });

  if (pokemon) {
    return (
      <S.Container backgroundImage={background}>
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
