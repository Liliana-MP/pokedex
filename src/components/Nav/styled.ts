import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.nav`
  min-height: 5rem;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: lightcoral;
`;

export const Logo = styled(Link)`
  text-decoration: none;
  color: violet;
  font-size: 1.8rem;
  font-weight: bold;
`;
