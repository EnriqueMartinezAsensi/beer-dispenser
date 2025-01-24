import styled from "styled-components";

export const StyledStatsTable = styled.table`
  margin: 20px auto;
  width: 80%;
  border-collapse: collapse;
`;

export const GlobalInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media (max-width: ${({ theme }) => theme.media.first}px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const DispenserStatsTittle = styled.h3`
  text-align: center;
`;
