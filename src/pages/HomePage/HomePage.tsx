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
      .catch((error) =>
        toast.error("ERROR", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      );
  };

  return (
    <S.Container>
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
