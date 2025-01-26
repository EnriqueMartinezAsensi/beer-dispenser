import styled from "styled-components";

export const DispenserTable = styled.table`
  margin: 20px auto;
  width: 80%;
  border-collapse: collapse;
  table-layout: fixed;
`;

export const DispensersTitle = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary.text};
`;
