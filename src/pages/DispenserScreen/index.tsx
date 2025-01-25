import { useParams } from "react-router";
import { manageDispenser } from "../../api/apiDispenser";
import { BeerIconWrapper, ButtonWrapper, DispenserScreenButton, DispenserScreenTittle } from "./DispenserScreen.styled";
import BeerIcon from "../../components/ui/icons/BeerIcon";
import { useState } from "react";

const DispenserScreen = () => {
  const { id } = useParams();
  const [direction, setDirection] = useState<boolean>(false);

  const handleMouseDown = async () => {
    if (id) {
      manageDispenser({ status: "open", updated_at: new Date().toISOString() }, id);
      setDirection(true);
    }
  };

  const handleMouseUp = async () => {
    if (id) {
      manageDispenser({ status: "close", updated_at: new Date().toISOString() }, id);
      setDirection(false);
    }
  };

  return (
    <>
      <DispenserScreenTittle>DISPENSER SCREEN: {id} </DispenserScreenTittle>
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
        <BeerIconWrapper>
          <BeerIcon size='300' duration='5' isFilling={direction}></BeerIcon>
        </BeerIconWrapper>
      </ButtonWrapper>
    </>
  );
};

export default DispenserScreen;
