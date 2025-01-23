import { RouteObject } from "react-router-dom";

//-----Free accsess elements-----
import PageWrapper from "../components/PageWrapper";
import ErrorPage from "../pages/ErrorPage";
import Dispensers from "../pages/Dispensers";
import DispenserScreen from "../pages/DispenserScreen";
import LogInPage from "../pages/LogInPage";
import ProtectedPage from "../pages/ProtectedPage";

//------Restricted access elements-----
import AdminPanel from "../pages/AdminPanel";
import DispenserStats from "../pages/DispenserStats";


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
