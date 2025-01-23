import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import { DispenerAdderWrapper, DispenserFormWrapper, DispenserTitle } from "./DispenserAdder.styled";

type DispenserAdderProps = {
  flow: string;
  onFlowChange: (value: string) => void;
  onClick: () => void;
};

const DispenserAdder = ({ flow, onFlowChange, onClick }: DispenserAdderProps) => {
  return (
    <DispenerAdderWrapper>
      <DispenserTitle>Dispenser Adder</DispenserTitle>
      <DispenserFormWrapper>
        <Input
          type='number'
          label='Flow'
          inputName='Flow'
          onChange={({ target }) => onFlowChange(target.value)}
          value={flow}
          min={0.05}
          max={1}
          step={0.01}
        />
        <Button click={onClick} type='button'>
          Add Dispenser
        </Button>
      </DispenserFormWrapper>
    </DispenerAdderWrapper>
  );
};

export default DispenserAdder;
