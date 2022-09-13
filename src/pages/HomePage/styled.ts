import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  background-color: blue;
  height: 100vh;
`;

export const PokedexContainer = styled.div`
  width: 80%;
  height: 70%;
  padding: 2rem 2rem;
  margin: 0rem 0rem 2rem 2rem;
  background-color: #fffef2;
  box-shadow: 0px 5px 15px 2px rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
`;

export const PokeStats = styled.p`
  margin: 1.5rem 0rem;
  line-height: 170%;
  font-size: 1rem;
`;

export const RulesHeader = styled.h2`
  font-weight: bold;
  letter-spacing: 0.3rem;
`;
