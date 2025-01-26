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
  const [direction, setDirection] = useState<boolean>(false);
  const [error, setError] = useState<Error>();
  const navigate = useNavigate();

  const handleMouseDown = async () => {
    if (id) {
      manageDispenser({ status: "open", updated_at: new Date().toISOString() }, id)
        .then(() => setDirection(true))
        .catch((error) => setError(error));
    }
  };

  const handleMouseUp = async () => {
    if (id) {
      manageDispenser({ status: "close", updated_at: new Date().toISOString() }, id).catch((error) =>
        setError(error.message)
      );
      setDirection(false);
    }
  };

  return (
    <>
      <DispenserScreenHeaderWrapper>
        <BackIcon size='45' onClick={() => navigate("/")} />
        <DispenserScreenTittle>Dispenser Screen: {id} </DispenserScreenTittle>
      </DispenserScreenHeaderWrapper>
      <ButtonWrapper>
        <DispenserScreenButton
          type='button'
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
        >
          Dispense
        </DispenserScreenButton>
        <ErrorMessage message={error?.message} />
        <BeerIconWrapper>
          <BeerIcon size='300' duration='5' isFilling={direction}></BeerIcon>
        </BeerIconWrapper>
      </ButtonWrapper>
    </>
  );
};

export default DispenserScreen;
