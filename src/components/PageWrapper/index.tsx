import { Outlet, ScrollRestoration } from "react-router";
import MenuBar from "../MenuBar";
import { OutletWrapper, PageWrapperContainer } from "./PageWrapper.styled";

const PageWrapper = () => {
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
export default PageWrapper;
