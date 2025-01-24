import { Button as ButtonMui } from "@mui/material";

type ButtonProps = {
  type: "button" | "reset" | "submit" | undefined;
  children: React.ReactNode;
  click?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseDown?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseUp?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ type, children, click, onMouseDown, onMouseUp }: ButtonProps) => {
  return (
    <ButtonMui
      type={type}
      fullWidth
      variant='contained'
      sx={{ mt: 2, mb: 2 }}
      onClick={click}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      {children}
    </ButtonMui>
  );
};

export default Button;
