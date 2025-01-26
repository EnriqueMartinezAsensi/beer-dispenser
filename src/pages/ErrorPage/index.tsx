import { useNavigate } from "react-router";
import { ErrorWrapper, GoBack } from "./ErrorPage.styled";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <ErrorWrapper>
      <h1>Error</h1>
      <GoBack onClick={() => navigate("/")}>Go back!</GoBack>
    </ErrorWrapper>
  );
};

export default ErrorPage;
