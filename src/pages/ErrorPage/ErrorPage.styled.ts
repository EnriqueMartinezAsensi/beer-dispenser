import styled from "styled-components";

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const GoBack = styled.h3`
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radiuses.medium}px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.common.grey};
  }
`;
