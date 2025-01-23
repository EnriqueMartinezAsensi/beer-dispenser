import { TextField } from "@mui/material";

type InputProps = {
  label: string;
  value: string;
  inputName: string;
  type?: React.HTMLInputTypeAttribute;
  error?: boolean;
  min?: number;
  max?: number;
  step?: number;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

const Input = ({ label, value, inputName, type, error, min, max, step, onChange }: InputProps) => {
  return (
    <TextField
      margin='normal'
      required
      fullWidth
      label={label}
      name={inputName}
      autoFocus
      value={value}
      onChange={onChange}
      type={type}
      error={error}
      slotProps={{
        htmlInput: {
          max: max,
          min: min,
          step: step,
        },
      }}
    />
  );
};

export default Input;
