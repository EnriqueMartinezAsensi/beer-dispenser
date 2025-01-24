import styled from "styled-components";

export const PageWrapperContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary.main};
`;

export const OutletWrapper = styled.div`
  margin: 2rem auto;
  padding: 1rem;
  width: 80%;
  background-color: ${({ theme }) => theme.colors.common.white};
  border-radius: ${({ theme }) => theme.radiuses.medium}px;
`;
