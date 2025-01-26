import { ErrorMessageStyled } from "./ErrorMessage.styled";

type ErrorMessageProps = {
  message: string | undefined;
};

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  if (message) return <ErrorMessageStyled>{message}</ErrorMessageStyled>;
  return null;
};

export default ErrorMessage;
