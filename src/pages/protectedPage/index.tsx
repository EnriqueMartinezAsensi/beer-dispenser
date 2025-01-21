import { Navigate } from "react-router";
import useUser from "../../stores/userStore/useUser";

type ProtectedPageProps = {
  children: React.ReactNode;
};

const ProtectedPage = ({ children }: ProtectedPageProps) => {
  const { user } = useUser();

  if (user) return children;

  return <Navigate to={"/login"}></Navigate>;
};

export default ProtectedPage;
