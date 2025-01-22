import styled from "styled-components";

type BurgerSVGContainerProps = {
  $active: boolean;
};

export const BurgerSVGContainer = styled.svg<BurgerSVGContainerProps>`
  fill: ${({ $active, theme }) => ($active ? theme.colors.button.normal.background : "transparent")};
  transition: ${({ theme }) => theme.transitions.normal}s;

  @media (pointer: fine) {
    &:hover {
      fill: ${({ theme }) => theme.colors.button.normal.background};
    }
  }
`;
