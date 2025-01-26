import styled, { keyframes } from "styled-components";

type BeerIconProps = {
  size?: string;
};

type BeerProps = {
  $duration?: string;
  $isFilling?: boolean;
};

const fillBeer = keyframes`
  0% {
    clip-path: inset(100% 0 0 0);
  }
  100% {
    clip-path: inset(0 0 0 0);
  }
`;

const emptyBeer = keyframes`
  0% {
    clip-path: inset(100% 0 0 0);
  }
  100% {
    clip-path: inset(100% 0 0 0);
  }
`;

export const BeerIconStyled = styled.svg<BeerIconProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  margin: 0 0.5rem;
`;

export const Glass = styled.path`
  fill: ${({ theme }) => theme.colors.common.black};
`;

export const Beer = styled.path<BeerProps>`
  fill: ${({ theme }) => theme.colors.primary.main};
  animation: ${({ $isFilling: isFilling }) => (isFilling ? fillBeer : emptyBeer)} ease-in-out forwards;
  animation-duration: ${({ $duration: duration }) => duration}s;
  transform-origin: bottom;
`;
