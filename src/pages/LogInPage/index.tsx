import { LoginContainer, LoginForm } from "./LogInPage.styled";
import { Navigate } from "react-router";
import useUser from "../../stores/userStore/useUser";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { useState } from "react";

const LogInPage = () => {
  const { user, logIn } = useUser();
  const [email, setEmail] = useState<string>("admin");
  const [password, setPassword] = useState<string>("admin");

  const submit = () => {
    const user = {
      userName: email,
      password: password,
    } as UserCredentials;
    logIn(user);
  };

  if (user) return <Navigate to={"/admin"}></Navigate>;
  return (
    <LoginContainer>
      <LoginForm>
        <Input
          value={email}
          changeEvent={({ target }) => setEmail(target.value)}
          label='Email Address'
          inputName='email'
        />
        <Input
          value={password}
          changeEvent={({ target }) => setPassword(target.value)}
          label='Password'
          inputName='password'
          type='password'
        />
        <Button type='button' click={submit}>
          Sign in
        </Button>
      </LoginForm>
    </LoginContainer>
  );
};

export default LogInPage;
