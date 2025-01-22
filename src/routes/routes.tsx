import { RouteObject } from "react-router-dom";
import Dispensers from "../pages/dispensers";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Dispensers />,
  },
];

export default routes;
