import styled from "styled-components";

type StyledProps = {
  backgroundImage?: string;
};

export const Container = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-image: ${(props) => props.backgroundImage};
`;

export const PokeNameContainer = styled.div`
  justify-content: center;
  background-color: cyan;
  margin-bottom: 2rem;
  font-size: 2rem;
  letter-spacing: 0.3rem;
`;

export const Logo = styled.span`
  color: black;
  font-size: 1.8rem;
  font-family: "Lobster Two";
  font-weight: bold;
  letter-spacing: 0.3rem;
`;

export const PokeStatsContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  background-color: yellow;
  width: 60%;
`;

export const Stats = styled.div`
  display: flex;
  background-color: blue;
  width: 100%;
  align-items: center;
  letter-spacing: 0.15rem;
`;
