import { Button as ButtonMui } from "@mui/material";

type ButtonProps = {
  type: "button" | "reset" | "submit" | undefined;
  children: React.ReactNode;
  click: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ type, children, click }: ButtonProps) => {
  return (
    <ButtonMui type={type} fullWidth variant='contained' sx={{ mt: 2, mb: 2 }} onClick={click}>
      {children}
    </ButtonMui>
  );
};

export default Button;
