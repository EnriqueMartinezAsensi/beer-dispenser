import styled from "styled-components";

export const StyledCircle = styled.circle`
  fill:none;
  stroke: ${({theme}) => theme.colors.primary.main};
  stroke-linecap:round;
  stroke-linejoin:round;
  stroke-width:27px;
`

export const StyledPolyline = styled.polyline`
  fill:none;
  stroke: ${({theme}) => theme.colors.primary.main};
  stroke-linecap:round;
  stroke-linejoin:round;
  stroke-width:35px;
  transform: scale(80%) translate(9%, 11%);
`