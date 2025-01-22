import { RouteObject } from "react-router-dom";

//-----Free accsess elements-----
import PageWrapper from "../components/PageWrapper";
import ErrorPage from "../pages/errorPage";
import Dispensers from "../pages/dispensers";
import DispenserScreen from "../pages/dispenserScreen";
import LogInPage from "../pages/logInPage";
import ProtectedPage from "../pages/protectedPage";

//------Restricted access elements-----
import AdminPanel from "../pages/AdminPanel";
import DispenserStats from "../pages/dispenserStats";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <PageWrapper />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dispensers />,
      },
      {
        path: "/:id",
        element: <DispenserScreen />,
      },
      {
        path: "/login",
        element: <LogInPage />,
      },
      {
        path: "/admin",
        element: (
          <ProtectedPage>
            <AdminPanel />
          </ProtectedPage>
        ),
      },
      {
        path: "/admin/:id",
        element: (
          <ProtectedPage>
            <DispenserStats />
          </ProtectedPage>
        ),
      },
    ],
  },
];

export default routes;
