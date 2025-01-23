import { MenuItem, MenuLink } from "./MenuItemList.styled";

type MenuItemListProps = {
  user: User | undefined;
  logOut: () => void;
};

const MenuItemList = ({ user, logOut: logout }: MenuItemListProps) => {
  return (
    <>
      <MenuItem>
        <MenuLink to='/'>Beer Taps</MenuLink>
      </MenuItem>
      <MenuItem>{user ? <MenuLink to='/admin'>Administration</MenuLink> : null}</MenuItem>
      <MenuItem>
        {user ? (
          <MenuLink to='' onClick={logout}>
            Log Out
          </MenuLink>
        ) : (
          <MenuLink to='/login'>Log In</MenuLink>
        )}
      </MenuItem>
    </>
  );
};

export default MenuItemList;
