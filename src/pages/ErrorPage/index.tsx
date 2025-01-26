import { useNavigate } from "react-router";
import { ErrorWrapper } from "./ErrorPage.styled";
import Button from "../../components/ui/Button";

const ErrorPage = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <ErrorWrapper>
      <h1>Error</h1>
      <Button type='button' click={goToHome} onTouchStart={goToHome}>
        Go back!
      </Button>
    </ErrorWrapper>
  );
};

export default ErrorPage;
