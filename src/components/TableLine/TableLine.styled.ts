import styled from "styled-components";

type StyledTableLineProps = {
  $isClickable: boolean;
};

export const StyledTableLine = styled.tr<StyledTableLineProps>`
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.colors.common.grey};
  cursor: ${({ $isClickable: isClickable }) => (isClickable ? "pointer" : "default")};
  &:hover {
    background-color: ${({ theme, $isClickable: isClickable }) => (isClickable ? theme.colors.secondary.main : "none")};
  }
`;

export const TableData = styled.td`
  padding: 1rem;
`;
