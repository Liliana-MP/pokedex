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
      <InputField onChangeText={onChangeText} />
      <SubmitButton searchValue={searchValue} savePokemon={savePokemon} />
    </S.Container>
  );
};

export default Search;
