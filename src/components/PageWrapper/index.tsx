import { Outlet, ScrollRestoration } from "react-router";
import MenuBar from "../MenuBar";

const PageWrapper = () => {
  return (
    <div>
      <ScrollRestoration />
      <MenuBar />
      <Outlet />
    </div>
  );
};

export default PageWrapper;
