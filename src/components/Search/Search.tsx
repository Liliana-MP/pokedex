import InputField from "../InputField";
import SubmitButton from "../SubmitButton";
import * as S from "./styled";

type SearchProps = {
  savePokemon: (data: any) => void;
  onChangeText: (inputData: string) => void;
  searchValue: string;
};

const Search = ({ savePokemon, onChangeText, searchValue }: SearchProps) => {
  return (
    <S.Container>
      <S.ContainerBox>
        <S.HeaderContainer>
          <S.Header>Welcome to Pokédex.</S.Header>
          <S.Text>Search for a pokémon with its name or id</S.Text>
        </S.HeaderContainer>
        <S.SearchContainer>
          <InputField value={searchValue} onChangeText={onChangeText} />
          <SubmitButton searchValue={searchValue} savePokemon={savePokemon} />
        </S.SearchContainer>
      </S.ContainerBox>
    </S.Container>
  );
};

export default Search;
