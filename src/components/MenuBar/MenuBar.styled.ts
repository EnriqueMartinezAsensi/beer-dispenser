import styled from "styled-components";

type MenuListProps = {
  $active: boolean;
};

type VerticalMenuHolderProps = {
  $active: boolean;
};

export const StickyBar = styled.div`
  background-color: ${({ theme }) => theme.colors.common.white};
  position: sticky;
  overflow: hidden;
  z-index: 2;
  width: 100%;
  height: 80px;
  top: 0px;
  border-bottom: 5px solid ${({ theme }) => theme.colors.primary.main};
`;

export const MenuHolder = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  max-width: 1200px;
  min-width: 660px;
  height: 100%;
  margin: auto;
  z-index: 0;
  @media (max-width: ${({ theme }) => theme.media.first}px) {
    min-width: 0;
    max-width: 100%;
    width: 100%;
    justify-content: space-between;
  }
`;
export const MenuList = styled.ul`
  display: flex;
  flex-flow: row;
  list-style-type: none;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.media.first}px) {
    display: none;
  }
`;

export const MenuLogo = styled.img`
  display: block;
  height: 50%;
  @media (max-width: ${({ theme }) => theme.media.first}px) {
  }
`;

export const BurgerMenu = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.media.first}px) {
    display: flex;
  }
`;

export const BackButton = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.media.first}px) {
    display: flex;
    margin: 0 0.3rem;
  }
`;

export const VerticalMenuHolder = styled.div<VerticalMenuHolderProps>`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: ${({ $active }) => ($active ? "rgba(255, 255, 255, 0.98)" : "rgba(255, 255, 255, 0)")};
  z-index: -1;
  top: ${({ $active }) => {
    return $active ? "80px" : "-120vh";
  }};
  transition: ${({ theme }) => theme.transitions.normal}s;
`;

export const MemuListVertical = styled.ul<MenuListProps>`
  display: flex;
  flex-flow: column;
  list-style-type: none;
  align-items: start;
  display: ${({ $active }) => {
    return $active ? "flex-box" : "none";
  }};
`;
