import { MenuList, MenuHolder, StickyBar, BurgerMenu, VerticalMenuHolder, MemuListVertical } from "./MenuBar.styled";
import BurgerIcon from "../ui/icons/BurgerIcon";
import { useState } from "react";
import useUser from "../../stores/userStore/useUser";
import MenuItemList from "./MenuItemList";
import BeerIcon from "../ui/icons/BeerIcon";

const MenuBar = () => {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
  const { user, logOut } = useUser();

  const closeMenu = () => setIsMenuActive(false);

  return (
    <StickyBar>
      <MenuHolder>
        <BurgerMenu aria-label='BurgerIcon' onClick={() => setIsMenuActive(!isMenuActive)}>
          <BurgerIcon size='60' active={isMenuActive}></BurgerIcon>
        </BurgerMenu>
        <VerticalMenuHolder $active={isMenuActive}>
          <MemuListVertical $active={isMenuActive}>
            <MenuItemList user={user} logOut={logOut} onClick={closeMenu} />
          </MemuListVertical>
        </VerticalMenuHolder>
        <BeerIcon size='50' />
        <MenuList>
          <MenuItemList user={user} logOut={logOut} onClick={closeMenu} />
        </MenuList>
      </MenuHolder>
    </StickyBar>
  );
};

export default MenuBar;
