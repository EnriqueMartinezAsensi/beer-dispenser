import styled from "styled-components";

export const StyledAdminTable = styled.table`
  margin: 20px auto;
  width: 80%;
  border-collapse: collapse;
  table-layout: fixed;
`;
export const DispensersSubTile = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary.text};
`;
