import styled from "styled-components";

export const DispenerAdderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px;
`;

export const DispenserFormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin: 10px 30px 10px 30px;
  @media (max-width: ${({ theme }) => theme.media.first}px) {
    flex-direction: column;
  }
`;

export const DispenserTitle = styled.h1`
  margin: 10px;
  text-align: center;
`;
