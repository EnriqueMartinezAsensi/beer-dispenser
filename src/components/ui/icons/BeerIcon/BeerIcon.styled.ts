import styled from "styled-components";

type BeerIconProps = {
  size?: string;
};

export const BeerIconStyled = styled.svg<BeerIconProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  margin: 0 0.5rem;
`;

export const Glass = styled.path`
  fill: ${({ theme }) => theme.colors.common.black};
`;

export const Beer = styled.path`
  fill: ${({ theme }) => theme.colors.primary.main};
`;
