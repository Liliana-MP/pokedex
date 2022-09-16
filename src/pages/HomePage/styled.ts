import styled from "styled-components";

type PokedexContainerProps = {
  backgroundColor?: string;
};

export const Container = styled.div`
  align-items: center;
  flex-direction: column;
  display: flex;
`;

export const PokedexContainer = styled.div<PokedexContainerProps>`
  width: 60vw;
  height: 60vh;
  padding: 2rem 2rem;

  background: linear-gradient(
    180deg,
    #f0f3f5 0%,
    ${(props) => props.backgroundColor} 87%
  );

  box-shadow: 0px 5px 15px 2px rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PokeStats = styled.div`
  display: flex;
  width: 80%;
  background-color: lilac;
`;
export const RulesHeader = styled.h2`
  font-weight: bold;
  letter-spacing: 0.3rem;
`;
