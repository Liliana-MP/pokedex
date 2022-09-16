import styled from "styled-components";

type PokeNameProps = {
  textColor: string;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const PokeNameContainer = styled.div<PokeNameProps>`
  justify-content: center;
  font-size: 1.5rem;
  letter-spacing: 0.3rem;
  font-family: "Montserrat-Bold";
  color: ${(props) => props.textColor};
`;

export const Image = styled.img`
  margin: 2rem 0rem;
  width: 150px;
  height: 150px;
`;

export const Logo = styled.span`
  color: black;
  font-size: 1.8rem;
  font-family: "Montserrat-SemiBold";
  letter-spacing: 0.3rem;
`;

export const PokeInfoContainer = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;
`;

export const StatsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  margin: 0rem 0.5rem;
  width: 33%;
`;

export const Stats = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  letter-spacing: 0.15rem;
`;
