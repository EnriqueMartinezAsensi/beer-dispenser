import { MenuItem, MenuLink } from "./MenuItemList.styled";

type MenuItemListProps = {
  user: User | undefined;
  logOut: () => void;
  onClick: () => void;
};

const MenuItemList = ({ user, logOut, onClick }: MenuItemListProps) => {
  return (
    <>
      <MenuItem>
        <MenuLink to='/' onClick={onClick}>
          Beer Taps
        </MenuLink>
      </MenuItem>
      <MenuItem>
        {user ? (
          <MenuLink to='/admin' onClick={onClick}>
            Administration
          </MenuLink>
        ) : null}
      </MenuItem>
      <MenuItem>
        {user ? (
          <MenuLink
            to=''
            onClick={() => {
              onClick();
              logOut();
            }}
          >
            Log Out
          </MenuLink>
        ) : (
          <MenuLink to='/login' onClick={onClick}>
            Log In
          </MenuLink>
        )}
      </MenuItem>
    </>
  );
};

export default MenuItemList;
