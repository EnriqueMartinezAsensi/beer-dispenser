import styled from "styled-components";

type SpinnerSvgProps = {
  size: number;
};

export const SpinnerSvg = styled.svg<SpinnerSvgProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  transform-origin: center;
  animation: spinner_jgYN 1s linear infinite;
  fill: lightgray;
  @keyframes spinner_jgYN {
    100% {
      transform: rotate(360deg);
    }
  }
`;
