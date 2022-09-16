import styled from "styled-components";

export const Container = styled.div``;

export const Button = styled.button`
  font-size: 20px;
  border-radius: 10px;
  background-color: #ff0000;
  cursor: pointer;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  border: 0;
  transition: all 250ms;
  color: white;
  font-weight: bold;

  &:hover {
    background-color: #cc0000;
  }
`;
