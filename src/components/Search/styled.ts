import styled from "styled-components";

export const Container = styled.div`
  background-color: #f0f3f5;
  box-shadow: 0px 5px 15px 2px rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  margin: 2rem 0rem;
  width: 60vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const Header = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

export const Text = styled.span`
  font-size: 1.5rem;
  line-height: 1.5rem;
`;

export const SearchContainer = styled.div`
  align-items: center;
  display: flex;
`;
