import styled from "styled-components";

export const PageWrapperContainer = styled.div``;

export const OutletWrapper = styled.div`
  margin: 2rem auto;
  padding: 1rem;
  width: 80%;
  max-width: 1200px;
  background-color: ${({ theme }) => theme.colors.common.white};
  border-radius: ${({ theme }) => theme.radiuses.medium}px;
  @media (max-width: ${({ theme }) => theme.media.first}px) {
    width: 95%;
    padding: 0.2rem;
    margin: 0.4rem auto;
  }
`;
