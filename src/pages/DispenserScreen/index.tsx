import { useParams } from "react-router";
import { manageDispenser } from "../../api/apiDispenser";
import { useState } from "react";
import { ButtonWrapper, DispenserScreenButton, DispenserScreenTittle } from "./DispenserScreen.styled";

const DispenserScreen = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const handleMouseDown = async () => {
    if (!id) return;

    setLoading(true);
    try {
      console.log(new Date());
      await manageDispenser({ status: "open", updated_at: new Date().toISOString() }, id);
      console.log("Dispenser opened");
    } catch (error) {
      console.error("Error opening dispenser:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleMouseUp = async () => {
    if (!id) return;

    setLoading(true);
    try {
      await manageDispenser({ status: "close", updated_at: new Date().toISOString() }, id);
      console.log("Dispenser closed");
    } catch (error) {
      console.error("Error closing dispenser:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <DispenserScreenTittle>DISPENSER SCREEN: {id} </DispenserScreenTittle>
      <ButtonWrapper>
        <DispenserScreenButton type='button' onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
          {loading ? "Processing..." : "Dispense"}
        </DispenserScreenButton>
      </ButtonWrapper>
    </>
  );
};

export default DispenserScreen;
