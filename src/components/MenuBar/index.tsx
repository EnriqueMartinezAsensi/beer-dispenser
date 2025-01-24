import { MenuList, MenuHolder, StickyBar, BurgerMenu, VerticalMenuHolder, MemuListVertical } from "./MenuBar.styled";
import BurgerIcon from "../ui/icons/BurgerIcon";
import { useState } from "react";
import useUser from "../../stores/userStore/useUser";
import MenuItemList from "./MenuItemList";

const MenuBar = () => {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
  const { user, logOut } = useUser();

  return (
    <StickyBar>
      <MenuHolder>
        <BurgerMenu onClick={() => setIsMenuActive(!isMenuActive)}>
          <BurgerIcon size='60' active={isMenuActive}></BurgerIcon>
        </BurgerMenu>
        <MenuList>
          <MenuItemList user={user} logOut={logOut} />
        </MenuList>
        <VerticalMenuHolder $active={isMenuActive}>
          <MemuListVertical $active={isMenuActive}>
            <MenuItemList user={user} logOut={logOut} />
          </MemuListVertical>
        </VerticalMenuHolder>
      </MenuHolder>
    </StickyBar>
  );
};

export default MenuBar;
