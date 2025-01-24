import { Outlet, ScrollRestoration } from "react-router";
import MenuBar from "../MenuBar";
import { OutletWrapper, PageWrapperContainer } from "./PageWrapper.styled";

const PageWrapper = () => {
  return (
    <PageWrapperContainer>
      <ScrollRestoration />
      <MenuBar />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </PageWrapperContainer>
  );
};

export default PageWrapper;
