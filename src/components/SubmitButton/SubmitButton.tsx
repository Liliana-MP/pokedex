import * as S from "./styled";

type SubmitButtonProps = {
  searchValue: string;
  savePokemon: (data: any) => void;
};

const SubmitButton = ({ searchValue, savePokemon }: SubmitButtonProps) => {
  return (
    <S.Container>
      <button onClick={() => savePokemon(searchValue)}>Submit</button>
    </S.Container>
  );
};

export default SubmitButton;
