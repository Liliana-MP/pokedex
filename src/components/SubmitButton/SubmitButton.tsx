import * as S from "./styled";

type SubmitButtonProps = {
  searchValue: string;
  savePokemon: (data: any) => void;
};

const SubmitButton = ({ searchValue, savePokemon }: SubmitButtonProps) => {
  return (
    <S.Container>
      <S.Button onClick={() => savePokemon(searchValue)}>Submit</S.Button>
    </S.Container>
  );
};

export default SubmitButton;
