import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.nav`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #cc0000;
`;

export const Logo = styled(Link)`
  text-decoration: none;
  color: #f0f3f5;
  font-size: 2rem;
  font-family: "Pokemon-Solid";
`;
