import styled from "styled-components";
import Button from "../../components/ui/Button";

export const DispenserScreenTittle = styled.h3`
  text-align: center;
  text-wrap: balance;
`;

export const DispenserScreenButton = styled(Button)`
  height: 40vh;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  width: 10rem;
`;

export const BeerIconWrapper = styled.div`
  margin: 2rem;
`;

export const DispenserScreenHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;
