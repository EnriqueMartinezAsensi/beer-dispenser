import { Link } from "react-router-dom";
import styled from "styled-components";

export const MenuItem = styled.li`
  padding: 1rem;
  @media (max-width: ${({ theme }) => theme.media.first}px) {
    padding: 0.2rem;
  }
`;

export const MenuLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary.text};
  text-decoration: none;
  font-size: ${({ theme }) => theme.text.navigationBar.fontSize};
  font-family: ${({ theme }) => theme.text.navigationBar.fontFamily};
  font-weight: ${({ theme }) => theme.text.navigationBar.fontWeight};
`;
