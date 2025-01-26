import { useNavigate, useParams } from "react-router";
import { manageDispenser } from "../../api/apiDispenser";
import {
  BeerIconWrapper,
  ButtonWrapper,
  DispenserScreenButton,
  DispenserScreenHeaderWrapper,
  DispenserScreenTittle,
} from "./DispenserScreen.styled";
import BeerIcon from "../../components/ui/icons/BeerIcon";
import { useState } from "react";
import BackIcon from "../../components/ui/icons/BackIcon";
import ErrorMessage from "../../components/ui/ErrorMessage";

const DispenserScreen = () => {
  const { id } = useParams();
  const [isJarFilling, setIsJarFilling] = useState<boolean>(false);
  const [error, setError] = useState<Error>();
  const isMobile = window.matchMedia("(pointer: coarse)").matches;
  const navigate = useNavigate();

  const handleMouseDown = async () => {
    if (id) {
      manageDispenser({ status: "open", updated_at: new Date().toISOString() }, id)
        .then(() => setIsJarFilling(true))
        .catch((error) => setError(error))
        .finally(() =>
          setTimeout(() => {
            setError(undefined);
          }, 5000)
        );
    }
  };

  const handleMouseUp = async () => {
    if (id) {
      manageDispenser({ status: "close", updated_at: new Date().toISOString() }, id)
        .catch((error) => setError(error.message))
        .finally(() => setTimeout(() => setError(undefined), 5000));
      setIsJarFilling(false);
    }
  };

  return (
    <>
      <DispenserScreenHeaderWrapper>
        <BackIcon size='45' onClick={() => navigate("/")} />
        <DispenserScreenTittle>Dispenser Screen: {id} </DispenserScreenTittle>
      </DispenserScreenHeaderWrapper>
      <ButtonWrapper>
        {isMobile ? (
          <DispenserScreenButton type='button' onTouchStart={handleMouseDown} onTouchEnd={handleMouseUp}>
            Dispense
          </DispenserScreenButton>
        ) : (
          <DispenserScreenButton
            type='button'
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            Dispense
          </DispenserScreenButton>
        )}
        <ErrorMessage message={error?.message} />
        <BeerIconWrapper>
          <BeerIcon size='300' duration='5' isFilling={isJarFilling}></BeerIcon>
        </BeerIconWrapper>
      </ButtonWrapper>
    </>
  );
};

export default DispenserScreen;
