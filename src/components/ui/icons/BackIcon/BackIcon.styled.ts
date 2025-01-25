import styled from "styled-components";

type StyledBackIconProps = {
  $size: string;
};

export const StyledBackIcon = styled.svg<StyledBackIconProps>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  min-width: ${({ $size }) => $size}px;
  transition: all 0.2s ease-in-out;
  &:hover {
    filter: drop-shadow(0 0 0.25rem ${({ theme }) => theme.colors.common.grey});
    cursor: pointer;
  }
`;

export const StyledPolyline = styled.polyline`
  fill: ${({ theme }) => theme.colors.primary.main};
  stroke: ${({ theme }) => theme.colors.primary.main};
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 35px;
  transform: scale(80%) translate(9%, 11%);
`;
