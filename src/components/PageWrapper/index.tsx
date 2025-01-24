import { Outlet, ScrollRestoration } from "react-router";
import MenuBar from "../MenuBar";
import { PageWrapperContainer } from "./PageWrapper.styled";

const PageWrapper = () => {
  return (
    <PageWrapperContainer>
      <ScrollRestoration />
      <MenuBar />
      <Outlet />
    </PageWrapperContainer>
  );
};

export default PageWrapper;
