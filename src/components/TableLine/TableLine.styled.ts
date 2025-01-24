import styled from "styled-components";

export const StyledTableLine = styled.tr`
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.colors.primary.text};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary.text};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary.main};
  }
`;

export const TableData = styled.td`
  padding: 1rem;
`;
