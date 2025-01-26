import { Outlet, ScrollRestoration } from "react-router";
import MenuBar from "../../components/MenuBar/index";
import { OutletWrapper, PageWrapperContainer } from "./MainLayout.styled";

const MainLayout = () => {
  return (
    <PageWrapperContainer data-testid='page-wrapper-container'>
      <ScrollRestoration data-testid='scroll-restoration' />
      <MenuBar data-testid='menu-bar' />
      <OutletWrapper>
        <Outlet data-testid='outlet' />
      </OutletWrapper>
    </PageWrapperContainer>
  );
};
export default MainLayout;
