import styled from "styled-components";

export const LoginContainer = styled.div`
  min-height: 80dvh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginForm = styled.form`
  min-width: 300px;
  max-width: 800px;
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
`;

export const LoginCredentials = styled.p`
  margin: 0.5rem auto;
  text-align: center;
  font-size: 1.2rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors.primary};
`;
