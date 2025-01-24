import { LoginContainer, LoginCredentials, LoginForm } from "./LogInPage.styled";
import { Navigate } from "react-router";
import useUser from "../../stores/userStore/useUser";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { useState } from "react";

const LogInPage = () => {
  const { user, logIn } = useUser();
  const [userName, setUserName] = useState<string>("admin");
  const [password, setPassword] = useState<string>("admin");

  const submit = () => {
    const user = {
      userName: userName,
      password: password,
    } as UserCredentials;
    logIn(user);
  };

  if (user) return <Navigate to={"/admin"}></Navigate>;
  return (
    <LoginContainer>
      <LoginForm>
        <LoginCredentials>User: "admin". Password: "admin".</LoginCredentials>
        <Input
          value={userName}
          onChange={({ target }) => setUserName(target.value)}
          label='User'
          inputName='userName'
        />
        <Input
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          label='Password'
          inputName='password'
          type='password'
        />
        <Button type='button' click={submit}>
          Log In
        </Button>
      </LoginForm>
    </LoginContainer>
  );
};

export default LogInPage;
