import {
  MenuList,
  MenuHolder,
  MenuItem,
  StickyBar,
  BurgerMenu,
  VerticalMenuHolder,
  MemuListVertical,
  MenuLink,
} from "./MenuBar.styled";
import BurgerIcon from "../ui/icons/BurgerIcon";
import { useState } from "react";
import { menuRoutesList } from "../../routes/routeList";
import useUser from "../../stores/userStore/useUser";

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
          {menuRoutesList.map((route) => (
            <MenuItem key={route.name}>
              <MenuLink to={route.route}>{route.name}</MenuLink>
            </MenuItem>
          ))}
          <MenuItem>
            {user ? (
              <MenuLink to='' onClick={logOut}>
                Log Out
              </MenuLink>
            ) : (
              <MenuLink to='/login'>Log In</MenuLink>
            )}
          </MenuItem>
        </MenuList>
        <VerticalMenuHolder $active={isMenuActive}>
          <MemuListVertical $active={isMenuActive}>
            {menuRoutesList.map((route) => (
              <MenuItem key={route.name}>
                <MenuLink to={route.route}>{route.name}</MenuLink>
              </MenuItem>
            ))}
          </MemuListVertical>
        </VerticalMenuHolder>
      </MenuHolder>
    </StickyBar>
  );
};

export default MenuBar;
