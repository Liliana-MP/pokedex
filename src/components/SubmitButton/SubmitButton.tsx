import * as S from "./styled";

type SubmitButtonProps = {
  searchValue: string;
  savePokemon: (data: any) => void;
};

const SubmitButton = ({ searchValue, savePokemon }: SubmitButtonProps) => {
  const searchValueToLowerCase = searchValue.toLocaleLowerCase();
  return (
    <S.Container>
      <S.Button onClick={() => savePokemon(searchValueToLowerCase)}>
        Submit
      </S.Button>
    </S.Container>
  );
};

export default SubmitButton;
