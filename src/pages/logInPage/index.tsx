import { Navigate } from "react-router";
import useUser from "../../stores/userStore/useUser";

const LogInPage = () => {
  const { user, logIn } = useUser();
  if (user) return <Navigate to={"/admin"}></Navigate>;
  return <button onClick={() => logIn({ userName: "admin", password: "admin" })}>LOGIN</button>;
};

export default LogInPage;
